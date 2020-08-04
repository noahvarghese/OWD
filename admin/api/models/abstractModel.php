<?php 

    abstract class abstractModel {
        
        /** 
         * @Author: Noah Varghese 
         * @Date: 2020-08-03 22:18:13 
         * @Desc:  Basic ID of any model
         * @Returns Autoincremented from any SQL database
         */public $id;
        /** 
         * @Author: Noah Varghese 
         * @Date: 2020-08-03 22:18:04 
         * @Desc:  Keys to find one entry in the table
         * @Returns: Exactly one model
         */
        public abstract function getKeys();
        /** 
         * @Author: Noah Varghese 
         * @Date: 2020-08-03 22:17:59 
         * @Desc:  Keys to return a list of models, it can be empty
         * @Returns: List of models
         */
        public abstract function getListKeys();
        /** 
         * @Author: Noah Varghese 
         * @Date: 2020-08-03 22:18:30 
         * @Desc: Constructor 
         */
        public function __construct()
        {
            
        }
    }

?>