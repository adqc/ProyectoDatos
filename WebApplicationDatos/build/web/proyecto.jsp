<%-- 
    Document   : prooyecto
    Created on : Nov 18, 2017, 8:05:44 PM
    Author     : ALVAR
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
<head>
	<title>Proyecto nuevo</title>
	<meta charset="utf-8" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>
<body class="container">
    <h3>Registrar Proyecto</h3>
	<div class="container bordes col-md-6">
		
			<div class="form-group">
				<label for="nombre">Nombre del Proyecto: </label>
				<input type="text" class="form-control" id="nombreProy">
			</div>

			

			<div class="form-group">
				<label for="nombre">Presupuesto: </label>
				<input type="text" class="form-control" id="presupuesto">
			</div>

			<div class="form-group">
				<label for="nombre">Plataforma: </label>
				<select class="form-control" id="tipoPlat">
                                    <option value="1">Android</option>
                                    <option value="2">IOS</option>
                                    <option value="3">Web</option>
				</select>
			</div>

			<div class="form-group">
				<label for="cargo">Cliente: </label>
				<select class="form-control" id="cargo">
                                    <option value="1">Vigilante</option>
                                    <option value="2">Administrador</option>
                                    <option value="3">Ventas</option>
				</select>
			</div>

			<div class="form-group">
				<label for="nombre">Fecha de inicio:</label>				
                                <input type="date" class="form-control" id="fechaContrato" name="fechaInic">
			</div>

			<div class="form-group">
				<label for="nombre">Fecha de finalizacion: </label>
				<input type="date" class="form-control" id="fechaFin">
			</div>			

                    <button id="btnRegistrar" class="btn btn-success">Registrar</button>	
	</div>

       
</body>
</html>