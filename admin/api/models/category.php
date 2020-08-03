<?php

    class Category {
        var $cateogry_id;
        var $category;
        var $post_id;
        
        public function defineMapping() {
            echo [
                $this->id,
                $this->category,
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