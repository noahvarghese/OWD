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
    
            $cmd = "";
            $values = [];
    
            if ( sqlAccess::countModel($model, true, false) === 0 )
            {
                $cmd = "INSERT INTO $modelName ";
                $attributes = " (";
                $placeholders = " VALUES (";

                for ( $i = 0; $i < (count($props)); $i++ ) {

                    $attributes .= key($props);
                    $placeholders .= "?";

                    if ( $i < count($props) - 1 )
                    {
                         $attributes .= ", ";
                         $placeholders .= ",";
                    }
                        

                    $type = gettype($props[$i]);
                    $val = $props[$i];

                    if ( $type === "string" ) {
                        $values[] = strval($val);
                    }
                    else if ( $type === "integer" ) {
                        $values[] = intval($val);
                    }
                    else if ( $type === "boolean" ) {
                        $values[] = $val ? 1 : 0;
                    } 
                    else if ( $props[$i] instanceof DateTime ) {
                        $values = $val->format('Y-m-d H:i:s');
                    }
                    else {
                        $values[] = strval($val);
                    }
                }

                $attributes .= ")";
                $placeholders .= ")";

                $cmd .= ($attributes . $placeholders);
            }
            else
            {
                $cmd = "UPDATE $modelName SET (";

                for ( $i = 0; $i < (count($props)); $i++ ) {

                    $cmd .= (key($props) . "=?");

                    if ( $i < count($props) - 1 )
                    {
                         $cmd .= ", ";
                    }

                    $type = gettype($props[$i]);
                    $val = $props[$i];

                    if ( $type === "string" ) {
                        $values[] = strval($val);
                    }
                    else if ( $type === "integer" ) {
                        $values[] = intval($val);
                    }
                    else if ( $type === "boolean" ) {
                        $values[] = $val ? 1 : 0;
                    } 
                    else if ( $props[$i] instanceof DateTime ) {
                        $values = $val->format('Y-m-d H:i:s');
                    }
                    else {
                        $values[] = strval($val);
                    }
                }

                $keys = $model->getKeys();
                $whereClause = " WHERE";

                for ( $i = 0; $i < count($keys); $i++ ) {
                    
                    $type = gettype($keys[$i]);
                    $key = key($keys[$i]);
                    $val = $keys[$i];

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

                $cmd .= $whereClause;
            }     
    
            $stmt = sqlConnect::db()->query($cmd);
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
    
            return intval($data[0]);
        }
    }    
?>