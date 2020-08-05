<?php

    class Category extends AbstractModel {
        public int $cateogry_id;
        public string $category;

        public function getKeys() : array {
            $props = get_object_vars($this);

            return [
                key($props[0]) => $props[0]
            ];
        }

        public function getListKeys() : array {
            $props = get_object_vars($this);

            return [
                key($props[1]) => $props[1]
            ];
        }
    }
?>