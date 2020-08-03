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
    
            for ( $i = 0; $i < count($props); $i++ ) {
                if ( $props[$i] != "" ) {
    
                    $whereClause .= key($props) . "=?";
        
                    if ( $i !== count($props) - 1 ) {
                        $whereClause .= " AND ";
                    }
        
                    $values[] = $props[$i];
                }
            }
    
            if ( sqlAccess::countModel($model) > 0 )
            {
                $sql = "UPDATE $modelName SET ";
                $whereClause = "WHERE ";
            }
            else
            {
                $sql = "INSERT INTO $modelName ";
            }     
    
    
            $stmt = sqlConnect::db()->query($sql . $whereClause);
            $success = $stmt->execute($values);
            return $success;
        }
    
        public static function countModel($model) {
            $modelName = strtoupper(get_class($model));
    
            $props = get_object_vars($model);
    
            $whereClause = "WHERE ";
    
            $values = [];
    
            for ( $i = 0; $i < count($props); $i++ ) {
                if ( $props[$i] != "" ) {
    
                    $whereClause .= key($props) . "=?";
        
                    if ( $i !== count($props) - 1 ) {
                        $whereClause .= " AND ";
                    }
        
                    $values[] = $props[$i];
                }
            }
    
            $sql = "SELECT COUNT(*) FROM $modelName $whereClause";
    
            $stmt = sqlConnect::db()->query($sql);
            $stmt->execute($values);
            $data = $stmt->fetchAll();
    
            return $data[0];
        }
    }    
?>