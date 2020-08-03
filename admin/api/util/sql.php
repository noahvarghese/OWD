<?php

    include '../util/db.php';

    /**
     * Takes a model and will update the fields if it exists already,
     * else it will isnert into the tables
     */
    function upsert($model) {
        $modelName = strtoupper(get_class($model));

        

    }

    function countModel($model) {
        $modelName = strtoupper(get_class($model));

        $props = get_object_vars($model);

        $whereClause = "WHERE ";

        $values = [];

        for ( $i = 0; $i < count($props); $i++ ) {
            $whereClause .= key($props) . "=?";

            if ( $i !== count($props) - 1 ) {
                $whereClause .= " AND ";
            }

            $values[] = $props[$i];
        }

        $sql = "SELECT COUNT(*) FROM $modelName $whereClause";

        $stmt = $db->query($sql);
        $stmt->execute($values);
        $data = $stmt->fetchAll();

        return $data[0];
    }
?>