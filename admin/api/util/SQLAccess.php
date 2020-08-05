<?php

    require_once("./functions.php");

    class SQLAccess {

        private static string $database =  "OWD";
        private static array $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_BOTH,
            PDO::ATTR_EMULATE_PREPARES => false
        ];
        private static string $char = "utf8";
        private static string $server = "mysql.nvarghese.com";
        private static string $user = "owd";
        private static string $pwd = "zqpThWqiFEgZp9+n8B4NWEf6ZnZxiABOr5r7wn11H2M=";

        
        private static function db() : PDO {
            return new PDO(
                "mysql:host=" . SqlAccess::$server . 
                ";dbname=" . SqlAccess::$database . 
                ";charset=" . SqlAccess::$char, 
                SqlAccess::$user, 
                Functions::decrypt(SqlAccess::$pwd), 
                SqlAccess::$options);
        }

        public static function selectListModel(AbstractModel $model, ?string $predefinedWhere = "") : array {

            $list = [];
            $modelName = strtoupper(get_class($model));
            $keys = $model->getListKeys();
            $values = [];

            $cmd = "";
            $whereClause = " WHERE";

            if ( $predefinedWhere != "" ) {
                $whereClause = $predefinedWhere;
            }
            else if ( count($keys) !== 0 ) {

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
            }

            $selectTable = "SELECT";
            $props = get_object_vars($model);

            for ( $i = 0; $i < count($props); $i++ ) {
                $property = $props[$i];
                $selectTable .= (" $property");

                if ( $i < (count($props - 1))) {
                    $selectTable .= ",";
                }
            }

            $selectTable .= " FROM $modelName";
            $cmd = $selectTable . $whereClause;

            $stmt = SqlAccess::db()->query($cmd);
            $stmt->execute($values);
            $data = $stmt->fetchAll();

            for ( $i = 0; $i < count($data); $i++ ) {

                $class = get_class($model);
                $model = new $class();

                for ( $j = 0; $j < count($props); $j++ ) {

                    $key = key($data[$j]);
                    $val = $data[$j];

                    $model->$key = $val;
                }

                $list[] = $model;
            }

            return $list;
        } 

        public static function selectModel(AbstractModel $model) : AbstractModel {

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
                    $selectTable .= ",";
                }
            }

            $selectTable .= " FROM $modelName";
            $cmd = $selectTable . $whereClause;

            $stmt = SqlAccess::db()->query($cmd);
            $stmt->execute($values);
            $data = $stmt->fetchAll();

            $class = get_class($model);
            $model = new $class();

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
        public static function upsert($model) : bool {

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
    
        public static function countModel($model, $useKeys = true, $searchList = true, $predefinedWhere = "") : int {

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