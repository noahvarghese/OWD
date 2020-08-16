<?php

namespace Routing {

    class Request implements IRequest
    {
        public function __construct()
        {
            $this->bootstrapSelf();
        }
    
        private function bootstrapSelf() : void
        {
            foreach ( $_SERVER as $key => $value)
            {
                $this->{$this->toCamelCase($key)} = $value;
            }
        }
    
        private function toCamelCase(string $string) : string
        {
            $result = strtolower($string);

            // Change underscore to hyphen to use in urls
            preg_match_all('/_[a-z]/', $result, $matches);
            
            foreach ( $matches[0] as $match )
            {
                // uppsercases first letter
                // replaces underscore with capitalized letter
                $c = str_replace('_', '', strtoupper($match));
                $result = str_replace($match, $c, $result);
            }

            return $result;
        }

        public function getBody() : array
        {
            // Defines method for get parameters
            if ( $this->requestMethod == "GET" )
            {
                return null;
            }

            // Defines method for post parameters
            if ( $this->requestMethod == "POST" )
            {
                $body = [];

                foreach ( $_POST as $key => $value )
                {
                    $body[$key] = filter_input(INPUT_POST, $key, FILTER_SANITIZE_SPECIAL_CHARS);
                }

                return $body;
            }

            // Need to implement put and delete http methods

            // Default
            return null;
        }
    }
}