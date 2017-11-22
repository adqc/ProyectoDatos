<%-- 
    Document   : listaProyectos
    Created on : Nov 18, 2017, 8:27:47 PM
    Author     : ALVAR
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <title>Reporte</title>
    </head>
    <body class="container">

        <h1>Reporte de Proyectos</h1>

        <div class="col-md-6">
            <select class="form-control" id="filtroTurno">
                <option value="1">Mañana</option>
                <option value="2">Tarde</option>
                <option value="3">Noche</option>
            </select>
            <button id="btnFiltrarEmp" type="submit" class="btn colorBoton destacado">FILTRAR</button>            
        </div>

        <div class="row">
            <div class="col-md-12"> 
                <table class="table" id ="tablita">
                    <thead>
                    <th>IDCLIENTE</th>
                    <th>IDPROYECTO</th>
                    <th>PLATAFORMA</th>
                    <th>FECHA DE INICIO</th>
                    <th>FECHA DE FINALIZACIÓN</th>
                    <th>NOMBRE PROYECTO</th>
                    <th>PRESUPUESTO</th>
                    <th>NOMBRE IDJEFE</th>
                    </thead>
                    <tbody id="cuerpoProy">                        
                    </tbody>

                </table>
            </div>
        </div>


    </body>
</html>
