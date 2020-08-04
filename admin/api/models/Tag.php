<?php

    class Tag extends AbstractModel {
        var $id;
        var $tag;

        public function getKeys() {
            $props = get_object_vars($this);

            return [
                key($props[0]) => $props[0]
            ];
        }

        public function getListKeys() {
            $props = get_object_vars($this);

            return [
                key($props[1]) => $props[1]
            ];
        }
    }
?>