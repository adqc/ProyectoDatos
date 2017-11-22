<%-- 
    Document   : empleado
    Created on : Nov 18, 2017, 8:26:33 PM
    Author     : ALVAR
--%>


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Empleado nuevo</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">

    </head>
    <body class="container">
        <h3>Ingresar Empleado: </h3>
        <div class="container bordes col-md-6">

            <div class="form-group">
                <label for="nombre">Nombre del Empleado: </label>
                <input type="text" class="form-control" id="nombreEmp">
            </div>

            <div class="form-group">
                <label for="nombre">DNI del empleado: </label>
                <input type="text" class="form-control" id="dniEmp">
            </div>

            <div class="form-group">
                <label for="nombre">Sueldo: </label>
                <input type="text" class="form-control" id="sueldo">
            </div>



            <div class="form-group">
                <label for="nombre">Fecha de contratacion: </label>				
                <input type="date" class="form-control" id="fechaContrato" name="fechaCont">
            </div>

            <div class="form-group">
                <label for="nombre">Correo: </label>
                <input type="text" class="form-control" id="correoEmp">
            </div>
             <div class="form-group">
                 <label for="nombre">Rol</label>
               <select>
 
</select>
            </div>	

            <button id="btnRegistrar" class="btn btn-success">Registrar</button>	
        </div>


    </body>
</html>
