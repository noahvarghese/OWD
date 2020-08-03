<?php

    class Tag {
        var $tag_id;
        var $tag;
        var $post_id;
        
        public function defineMapping() {
            echo [
                $this->id,
                $this->tag,
                $this->post_id
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