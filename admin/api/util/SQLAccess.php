<?php

    require_once("./functions.php");

    class SQLAccess {

        private static $database =  "OWD";
        private static $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_BOTH,
            PDO::ATTR_EMULATE_PREPARES => false
        ];
        private static $char = "utf8";
        private static $server = "mysql.nvarghese.com";
        private static $user = "owd";
        private static $pwd = "zqpThWqiFEgZp9+n8B4NWEf6ZnZxiABOr5r7wn11H2M=";

        
        private static function db() {
            return new PDO(
                "mysql:host=" . SqlAccess::$server . 
                ";dbname=" . SqlAccess::$database . 
                ";charset=" . SqlAccess::$char, 
                SqlAccess::$user, 
                decrypt(SqlAccess::$pwd), 
                SqlAccess::$options);
        }

        public static function selectModel($model) {

            $modelName = strtoupper(get_class($model));
            $keys = $model->getKeys();
            $values = [];

            $cmd = "";
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

            $selectTable = "SELECT";
            $props = get_object_vars($model);

            for ( $i = 0; $i < count($props); $i++ ) {
                $property = $props[$i];
                $selectTable .= (" $property");

                if ( $i < (count($props - 1))) {
                    $whereClause .= ",";
                }
            }

            $selectTable .= " FROM $modelName";
            $cmd = $selectTable . $whereClause;

            $stmt = SqlAccess::db()->query($cmd);
            $stmt->execute($values);
            $data = $stmt->fetchAll();

            $model = new $modelName();

            for ( $i = 0; $i < count($data); $i++ ) {

                $key = key($data[$i]);
                $val = $data[$i];

                $model->$key = $val;
            }

            return $model;
        }
        
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


                    if ( $i < count($props) - 1 )
                    {
                         $attributes .= ", ";
                         $placeholders .= ",";
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


                    if ( $i < count($props) - 1 )
                    {
                         $cmd .= ", ";
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
    
            $stmt = SqlAccess::db()->query($cmd);
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

            $stmt = SqlAccess::db()->query($cmd);
            $stmt->execute($values);
            $data = $stmt->fetchAll();
    
            return intval($data[0]);
        }
    }    
?>