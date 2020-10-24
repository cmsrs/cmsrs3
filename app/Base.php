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
        $refId = $d[$refName];
        $data = $d['data'];
        foreach($columns as $column => $require ){
            if( $require && empty($data[$column]) ){
                throw new \Exception("Translation problem, require column: $column, var= ". var_export($data, true ));
            }else{                
                $col = !empty($data[$column]) ? $data[$column] : [];
                foreach($this->getArrLangs() as $lang ){
                    $value = !empty($col[$lang]) ? $col[$lang] : null;

                    if( $require && !$value ){
                        throw new \Exception("Translation problem, require lang: $lang for column: $column, var= ". var_export($data, true ));
                    }

                    $row = [ $refName => $refId, 'column' => $column, 'lang' => $lang, 'value' => $value ];
                    if($create ){
                        $this->createRow( $row );
                    }else{
                        $this->updateRow( $row );
                    }
                    //}
                    // }else{
                    //     $strCreateOrUpdate = $create ? "create" : "update";
                    //     throw new \Exception( var_export( isSet($data[$column][$lang]), true ) . "Translation problem (no data for $strCreateOrUpdate), for: column: $column lang: $lang, var= ". var_export($data, true ));                        
                    // }
                }
            }                
        }
        return true;
    }

    public function getAllTranslateByColumn()
    {
        $data = $this->getAllTranslate();
        //dd($data);

        $out = [];
        foreach($data as $d){
          $out[ $d['column'] ][ $d['lang'] ] = $d['value'];
        }

        return $out;
    }    
    

    public function translatesByColumnAndLang( $column, $lang )
    {
        $data = $this->getAllTranslateByColumn();

        $value = '';
        if( isSet($data[$column]) && isSet($data[$column][$lang]) ){
            $value = $data[$column][$lang];
        }

        return $value;
    }    

    /*
    public function translatesByColumn( $column )
    {
      $data = $this->getAllTranslate();

      $values = [];
      if( isSet($data[$column]) ){
        $values = $data[$column];
      }

      return $values;
    } 
    */   
    
    protected function wrapTranslateUpdate( $obj, $row )
    {
        if($obj){
            $obj->update([ 'value' => $row['value']] );
            // if(empty($row['value'])){
            //     $obj->delete();
            // }else{
            //     $obj->update([ 'value' => $row['value']] );
            // }
        }else{
            $this->createRow( $row );
        }
    }

    protected function createRow( $row )
    {
        $translate = $this->create($row);
        if( empty($translate->id) ){
            throw new \Exception("problem with save into translate table");
        }    
    }
}
