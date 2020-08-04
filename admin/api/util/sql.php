<?php

    require_once('../util/db.php');

    class sqlAccess {
        
        /**
         * Takes a model and will update the fields if it exists already,
         * else it will isnert into the tables
         */
        public static function upsert($model) {

            $modelName = strtoupper(get_class($model));
            $props = get_object_vars($model);
    
            $sql = "";
            $whereClause = "";
            $values = [];
    
            if ( sqlAccess::countModel($model) > 0 )
            {
                $sql = "UPDATE $modelName SET ";
                $whereClause = "WHERE ";
                $attributes = "";

                $keys = $model->getKeys();

                

            }
            else
            {
                $sql = "INSERT INTO $modelName (";

                $attributes = "";
                $placeholders = "";

    
                for ( $i = 0; $i < count($props); $i++ ) {
                    if ( $props[$i] != "" ) {
                        if ( $i === 0 )
                        {
                            $attributes .= "(";
                            $placeholders .= "(";
                        }

                        $attributes .= key($props);
                        $placeholders .= "?";

                        if ( $i < count($props) - 1 )
                        {
                             $attributes .= ", ";
                             $placeholders .= ",";
                        }
                        else
                        {
                            $attributes .= ")";
                            $placeholders .= ")";
                        }    
                        
                        $values[] = $props[$i];
                    }
                }
            }     
    
    
            $stmt = sqlConnect::db()->query($sql . $whereClause);
            $success = $stmt->execute($values);
            return $success;
        }
    
        public static function countModel($model, $useKeys = true, $searchList = true, $predefinedWhere = "") {

            $modelName = strtoupper(get_class($model));
            $cmd = "";
            $values = [];
    
            if ( $predefinedWhere != "" ) {
                $cmd = "SELECT COUNT(*) FROM $modelName $predefinedWhere"; 
            }
            else if ( $useKeys ) {

                $keys = [];

                if ( $searchList ) {
                    $keys = $model->getListKeys();
                } else {
                    $keys = $model->getKeys();
                }

                $whereClause = "WHERE";

                for ( $i = 0; $i < count($keys); $i++ ) {

                    $type = gettype($keys[$i]);
                    $val = $keys[$i];
                    $key = key($keys[$i]);

                    $whereClause .= (" $key=?");

                    if ( $type === "string" ) {
                        $values[] = strval($val);
                    }
                    else if ( $type === "integer" ) {
                        $values[] = intval($val);
                    }
                    else if ( $type === "boolean" ) {
                        $values[] = $val ? 1 : 0;
                    } 
                    else if ( $keys[$i] instanceof DateTime ) {
                        $values = $val->format('Y-m-d H:i:s');
                    }
                    else {
                        $values[] = strval($val);
                    }

                    if ( $i < (count($keys - 1))) {
                        $whereClause .= " AND";
                    }
                }

                $cmd = "SELECT COUNT(*) FROM $modelName $whereClause";
            }
            else {
                $cmd = "SELECT COUNT(*) FROM $modelName";
            }
            
            $stmt = sqlConnect::db()->query($cmd);
            $stmt->execute($values);
            $data = $stmt->fetchAll();
    
            return $data[0];
        }

        public static function getID($model) {

            $modelName = strtoupper(get_class($model));

            if ( $model->id == "" ) {
                $id = "SELECT id FROM $modelName WHERE "
            }
            else {
                return $model->id;
            }
            
        }

        private static function getPreparedUpdateFields($model) {
            $returnValue = [[]];
            $keys = $model->getKeys();

        }

        private static function getPreparedSelectFields($model) {

        }

        private static function getPreparedInsertFields($model) {

        }
    }    
?>