<%-- 
    Document   : cliente
    Created on : Nov 18, 2017, 8:26:25 PM
    Author     : ALVAR
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
<head>
	<title>Cliente  nuevo</title>
	<meta charset="utf-8" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>
<body class="container">
    <h3>Registrar Cliente</h3>
    <form action="controller" method="POST">
	<div class="container bordes col-md-6">
		
			<div class="form-group">
				<label for="nombre">Nombre: </label>
				<input type="text" class="form-control" id="nombreCli">
			</div>

			

			<div class="form-group">
				<label for="nombre">Email: </label>
				<input type="text" class="form-control" name="emailC" id="emailC">
			</div>

			
                    <button id="btnRegistrarCli" class="btn btn-success">Registrar</button>	
	</div>
        </form>

       
</body>
</html>