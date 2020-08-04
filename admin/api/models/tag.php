<?php

    class Tag {
        var $id;
        var $tag;
        
        public function defineMapping() {
            echo [
                "id" => $this->id,
                "tag" => $this->tag,
                "pos_id" => $this->post_id
            ];
        }

        public function getKeys() {
            echo [
                $this->defineMapping()[1]
            ];
        }

        public function getListKeys() {
            echo [
                $this->defineMapping()[2]
            ];
        }
    }
?>