<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Base extends Model
{
    private $arrLangs;    

    public function getArrLangs()
    {
        if($this->arrLangs){
            return $this->arrLangs;
        }
        $config = new Config;
        return $config->arrGetLangs();
    }

    public function setArrLangs( $arrLangs )
    {
        $this->arrLangs = $arrLangs;
    }   

    public function genericCreateTranslate( $d, $refName, $columns, $create = true)
    {    
        //dump($create);
        //dd('++++++');
        $refId = $d[$refName];
        $data = $d['data'];
        foreach($columns as $column => $require ){
            if( $require && empty($data[$column]) ){
                throw new \Exception("Translation problem, require column: $column var=". var_export($data, true ));
            }elseif( !empty($data[$column]) ){
                foreach($this->getArrLangs() as $lang ){
                    if( $require && empty($data[$column][$lang]) ){
                        throw new \Exception("Translation problem, require lang: $lang for column: $column ". var_export($data, true ));
                    }
                    if( !empty($data[$column][$lang]) ){
                        $row = [ $refName => $refId, 'column' => $column, 'lang' => $lang, 'value' => $data[$column][$lang] ];
                        if($create){
                            $this->createRow( $row );
                        }else{
                            $this->updateRow( $row );
                        }

                    }
                }
            }                
        }
        return true;
    }    

    protected function createRow( $row ){
        $translate = $this->create($row);
        if( empty($translate->id) ){
            throw new \Exception("problem with save into translate table");
        }    
    }

    /*
    public function genericUpdateTranslate( $d, $refName, $columns )
    {
        $refId = $d[$refName];
        $data = $d['data'];
        foreach($columns as $column => $require ){
        }

        dd($data);
    }
    */

}
