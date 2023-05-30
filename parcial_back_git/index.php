<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Content-Type: JSON");

include_once "funciones.php";

switch ($_SERVER["REQUEST_METHOD"]) {
    case 'GET':
        echo json_encode(Ingreso::getAll());
        break;

    case 'DELETE':
        if (isset($_GET["id"])) {
            if (Ingreso::deleteById($_GET["id"])) {
                http_response_code(200);
            } else {
                http_response_code(400);
            }
        }
        break;
    case 'POST':
        $datos = json_decode(file_get_contents("php://input"));

        if (Ingreso::insert($datos->fecha, $datos->hora, $datos->nombreYApellido, $datos->temperaturaSintoma, $datos->tosSintoma, $datos->insuficienciaRespiratoriaSintoma, $datos->dolorGargantaSintoma, $datos->perdidaOlfatoSintoma, $datos->perdidaGustoSintoma, $datos->otrosSintoma, $datos->contactoEnAislamiento, $datos->contactoViajero, $datos->viajes, $datos->observacion)) {
            http_response_code(200);
        } else {
            http_response_code(400);
        }

    case 'PUT':
        if (isset($_GET["id"])) {
            $datos = json_decode(file_get_contents("php://input"));
            if (Ingreso::update($_GET["id"], $datos->fecha, $datos->hora, $datos->nombreYApellido, $datos->temperaturaSintoma, $datos->tosSintoma, $datos->insuficienciaRespiratoriaSintoma, $datos->dolorGargantaSintoma, $datos->perdidaOlfatoSintoma, $datos->perdidaGustoSintoma, $datos->otrosSintoma, $datos->contactoEnAislamiento, $datos->contactoViajero, $datos->viajes, $datos->observacion)) {
                http_response_code(200);
            } else {
                http_response_code(400);
            }
        }

    default:

        break;
}

?>