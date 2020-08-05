<?php 

    abstract class AbstractModel {
        
        /** 
         * @Author: Noah Varghese 
         * @Date: 2020-08-03 22:18:13 
         * @Desc:  Basic ID of any model
         * @Returns Autoincremented from any SQL database
         */
        public int $id;
        /** 
         * @Author: Noah Varghese 
         * @Date: 2020-08-03 22:18:04 
         * @Desc:  Keys to find one entry in the table
         * @Returns: Exactly one model
         */
        public abstract function getKeys() : array;
        /** 
         * @Author: Noah Varghese 
         * @Date: 2020-08-03 22:17:59 
         * @Desc:  Keys to return a list of models, it can be empty
         * @Returns: List of models
         */
        public abstract function getListKeys() : array;
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