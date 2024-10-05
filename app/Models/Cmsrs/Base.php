<?php

namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Number;

class Base extends Model
{
    private $arrLangs;

    public function getArrLangs()
    {
        if ($this->arrLangs) {
            return $this->arrLangs;
        }
        $config = new Config;
        return $config->arrGetLangs();
    }

    public function setArrLangs($arrLangs)
    {
        $this->arrLangs = $arrLangs;
    }

    public function genericCreateTranslate($d, $refName, $columns, $create = true)
    {
        $refId = $d[$refName];
        $data = $d['data'];
        foreach ($columns as $column => $require) {
            if ($require && empty($data[$column])) {
                throw new \Exception("Translation problem, require column: $column, var= ". var_export($data, true));
            } else {
                $col = !empty($data[$column]) ? $data[$column] : [];
                foreach ($this->getArrLangs() as $lang) {
                    $value = !empty($col[$lang]) ? $col[$lang] : null;

                    if ($require && !$value) {
                        throw new \Exception("Translation problem, require lang: $lang for column: $column, var= ". var_export($data, true));
                    }

                    $row = [ $refName => $refId, 'column' => $column, 'lang' => $lang, 'value' => $value ];
                    if ($create) {
                        $this->createRow($row);
                    } else {
                        $this->updateRow($row);
                    }
                }
            }
        }
        return true;
    }

    public function getAllTranslateByColumn()
    {
        $data = $this->getAllTranslate();

        $out = [];
        foreach ($data as $d) {
            $out[ $d['column'] ][ $d['lang'] ] = $d['value'];
        }

        return $out;
    }
    
    public function translatesByColumnAndLang($column, $lang)
    {
        $data = $this->getAllTranslateByColumn();

        $value = '';
        if (isset($data[$column]) && isset($data[$column][$lang])) {
            $value = $data[$column][$lang];
        }

        return $value;
    }

    
    protected function wrapTranslateUpdate($obj, $row)
    {
        if ($obj) {
            $obj->update([ 'value' => $row['value']]);
        } else {
            $this->createRow($row);
        }
    }

    protected function createRow($row)
    {
        $translate = $this->create($row);
        if (empty($translate->id)) {
            throw new \Exception("problem with save into translate table");
        }
    }

    public static function reIndexArr($arr, $key = 'id')
    {
        $out = [];
        foreach($arr as $item){
            $arrItem = (array) $item;
            if( empty($arrItem[$key]) ){
                throw new \Exception("not found key id in arr");
            }

            $out[$arrItem[$key]] = $arrItem; 
        }
        return $out;
    }

    protected function getPaginationFromCollection($collection)
    {
        $perPage = Config::getPagination(); 
        $page = \Illuminate\Pagination\Paginator::resolveCurrentPage() ?: 1;
        return new \Illuminate\Pagination\LengthAwarePaginator(
            $collection->forPage($page, $perPage)->values(), 
            $collection->count(), 
            $perPage, 
            $page, 
            ['path' => request()->url()]
        );
    }

    protected static function formatCurrency($number)
    {
        $currency = (new Config)->getCurrency(); 
        return Number::currency( ($number / 100), $currency  ); //100 - cents
    }

}
