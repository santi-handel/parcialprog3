<?php

class Connection extends Mysqli
{
    function __construct()
    {
        parent::__construct("localhost", "root", "", "ingresos");
        $this->set_charset("utf8");
        $this->connect_error == NULL ? "Conexion exitosa" : die("error al conectarse a la base de datos");
    }
}

?>