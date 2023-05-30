<?php

    include_once "connection.php";

    class Ingreso{

        public static function getAll () {
            $con = new Connection();
            $query = "SELECT * from ingreso";
            $resultado = $con -> query($query);
            $datos = [];
            if ($resultado -> num_rows >=0) {
                while( $row = $resultado->fetch_assoc()){
                    $datos[] =[
                        "id" => $row["id"],
                        "fecha" => $row["fecha"],
                        "hora" => $row["hora"],
                        "nombreYApellido" => $row["nombreYApellido"],
                        "temperaturaSintoma" => $row["temperaturaSintoma"],
                        "tosSintoma" => $row["tosSintoma"],
                        "insuficienciaRespiratoriaSintoma" => $row["insuficienciaRespiratoriaSintoma"],
                        "dolorGargantaSintoma" => $row["dolorGargantaSintoma"],
                        "perdidaOlfatoSintoma" => $row["perdidaOlfatoSintoma"],
                        "perdidaGustoSintoma" => $row["perdidaGustoSintoma"],
                        "otrosSintoma" => $row["otrosSintoma"],
                        "contactoEnAislamiento" => $row["contactoEnAislamiento"],
                        "contactoViajero" => $row["contactoViajero"],
                        "viajes" => $row["viajes"],
                        "observacion" => $row["observacion"],

                    ];
                }
            }
            return $datos;
        }

        public static function deleteById($id){
            $con = new Connection();
            $query = "DELETE from ingreso where id = $id";
            if($con -> query($query)){
                return true;
            }
            echo $con -> error;
            return false;
        }

        public static function insert($fecha, $hora,$nombreYApellido,$temperaturaSintoma,$tosSintoma,$insuficienciaRespiratoriaSintoma, $dolorGargantaSintoma, $perdidaOlfatoSintoma, $perdidaGustoSintoma,$otrosSintomas, $contactoEnAislamiento, $contactoViaje, $viajes,$observacion){
            $con = new Connection();
            $query = "INSERT INTO ingreso( fecha, hora, nombreYApellido, temperaturaSintoma, tosSintoma, insuficienciaRespiratoriaSintoma, dolorGargantaSintoma, perdidaOlfatoSintoma, perdidaGustoSintoma, otrosSintoma, contactoEnAislamiento, contactoViajero, viajes, observacion) VALUES ('$fecha',   '$hora' ,  '$nombreYApellido', '$temperaturaSintoma', '$tosSintoma', '$insuficienciaRespiratoriaSintoma',  '$dolorGargantaSintoma',  '$perdidaOlfatoSintoma',  '$perdidaGustoSintoma', '$otrosSintomas', '$contactoEnAislamiento',  '$contactoViaje',  '$viajes' , '$observacion')";
            if ($con -> query($query)) {
                return true;
            }
            echo $con-> error;
            return false;
        }


        public static function update($id, $fecha, $hora,$nombreYApellido,$temperaturaSintoma,$tosSintoma,$insuficienciaRespiratoriaSintoma, $dolorGargantaSintoma, $perdidaOlfatoSintoma, $perdidaGustoSintoma,$otrosSintomas, $contactoEnAislamiento, $contactoViaje, $viajes,$observacion){
            $con = new Connection();
            $query = "UPDATE ingreso SET 
            fecha = '$fecha', 
            hora = '$hora' , 
            nombreYApellido = '$nombreYApellido', 
            temperaturaSintoma = '$temperaturaSintoma', 
            tosSintoma = '$tosSintoma', 
            insuficienciaRespiratoriaSintoma ='$insuficienciaRespiratoriaSintoma' , 
            dolorGargantaSintoma = '$dolorGargantaSintoma', 
            perdidaOlfatoSintoma = '$perdidaOlfatoSintoma', 
            perdidaGustoSintoma = '$perdidaGustoSintoma', 
            otrosSintoma = '$otrosSintomas', 
            contactoEnAislamiento = '$contactoEnAislamiento', 
            contactoViajero = '$contactoViaje', 
            viajes = '$viajes', 
            observacion= '$observacion' WHERE $id = id";
            if ($con -> query($query)) {
                return true;
            }
            echo $con-> error;
            return false;
        }
    }

?>