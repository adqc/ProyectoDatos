<%-- 
    Document   : listaClientes
    Created on : Nov 18, 2017, 11:21:01 PM
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

        <h1>Reporte de Clientes</h1>

        <div class="col-md-6">
            <select class="form-control" id="filtroTurno">
                <option value="1">Individual</option>
                <option value="1">Empresa</option>
            </select>
            <button id="btnFiltrarEmp" type="submit" class="btn colorBoton destacado">FILTRAR</button>            
        </div>

        <div class="row">
            <div class="col-md-12"> 
                <table class="table" id ="tablita">
                    <thead>
                    <th>IDCLIENTE</th>
                    <th>EMAIL</th>
                    <th>NOMBRE</th>
                    
                    </thead>
                    <tbody id="cuerpoProy">                        
                    </tbody>

                </table>
            </div>
        </div>


    </body>
</html>
