var BASE_URL = "http://localhost:4567/";

$(document).ready(function () {
    var rpta = "";
    $.ajax({
        type: 'GET',
        url: BASE_URL + "listarIncidencias",
        data: "",
        async: false,
        success: function (data) {
            
            var lisIncidencias = JSON.parse(data);
            
            var monthNum = {
                "ene":01,     
                "feb": 02,
                "mar": 03,
                "abr": 04,
                "may": 05,           
                "jun": 06,
                "jul": 07,       
                "ago": 08,
                "sep": 09,
                "oct": 10,     
                "nov": 11,
                "dic": 12 
            };
            
            for (var k = 0; k < lisIncidencias.length; k++) {
                var incidencia = lisIncidencias[k];             
                               
                var arFecha = incidencia["fechaOcur"].toString().split(" ");
                var mes = arFecha[0];
                
                var casidia = arFecha[1].toString().split(",");
                var dia = casidia[0];
                
                var anio = arFecha[2];               
                
                var mesEnNum = monthNum[mes];               
                
                var fechaFinal = dia + "/" + mesEnNum + "/" + anio;
                
                
                var llamaBom;
                var llamaCom;
                
                if(incidencia["bombero"] = 1){
                    llamaBom = "SI";
                }else{
                    llamaBom = "NO";
                }
                
                if(incidencia["comisaria"] = 1){
                    llamaCom = "SI";
                }else{
                    llamaCom = "NO";
                }
                var temp = "<tr>" +
                 "<td>" + incidencia["idIncidencia"] + "</td>" +
                 "<td>" + incidencia["dniCliente"] + "</td>" +
                 "<td>" + incidencia["codServicio"] + "</td>" +
                 "<td>" + fechaFinal + "</td>" +
                 "<td>" + incidencia["tipoOcur"] + "</td>" +
                 "<td>" + incidencia["nroCamara"] + "</td>" +
                 "<td>" + incidencia["obs"] + "</td>" +
                 "<td>" + incidencia["dniEmp"] + "</td>" +
                 "<td>" + llamaBom + "</td>" +
                 "<td>" + llamaCom + "</td>" +                 
                 "</tr>";
         
                 rpta = rpta + temp;
                 
            }

            $("#cuerpoInci").empty();
            $("#cuerpoInci").append(rpta);
        }
    });
});




$(document).ready(function () {
    var rpta = "";
    $.ajax({
        type: 'GET',
        url: BASE_URL + "listarEmpleados",
        data: "",
        async: false,
        success: function (data) {          
            
            var lisEmp = JSON.parse(data);
            
            var monthNum = {
                "ene":01,     
                "feb": 02,
                "mar": 03,
                "abr": 04,
                "may": 05,           
                "jun": 06,
                "jul": 07,       
                "ago": 08,
                "sep": 09,
                "oct": 10,     
                "nov": 11,
                "dic": 12 
            };
            
            
            for (var k = 0; k < lisEmp.length; k++) {
                var empleado = lisEmp[k];             
                               
                var arFecha = empleado["fechaContrato"].toString().split(" ");
                var mes = arFecha[0];
                
                var casidia = arFecha[1].toString().split(",");
                var dia = casidia[0];
                
                var anio = arFecha[2];               
                
                var mesEnNum = monthNum[mes];               
                
                var fechaFinal = dia + "/" + mesEnNum + "/" + anio;
                
                
                var temp = "<tr>" +
                 "<td>" + empleado["idEmpleado"] + "</td>" +
                 "<td>" + empleado["nombreEmp"] + "</td>" +
                 "<td>" + empleado["apeEmp"] + "</td>" +
                 "<td>" + empleado["dniEmp"] + "</td>" +
                 "<td>" + empleado["idTurno"] + "</td>" +
                 "<td>" + empleado["idCargo"] + "</td>" +
                 "<td>" + fechaFinal + "</td>" +
                 "<td>" + empleado["codAgencia"] + "</td>" +
                                 
                 "</tr>";
         
                 rpta = rpta + temp;
                 
            }

            $("#cuerpoEmp").empty();
            $("#cuerpoEmp").append(rpta);
            
        }
    });
});

$(document).ready(function () {
    var rpta = "";
    $.ajax({
        type: 'GET',
        url: BASE_URL + "idTipo/listar/",
        data: "",
        async: false,
        success: function (data) {
            
            //[{"id":1,"desc":"Grave"},{"id":2,"desc":"Medio"},{"id":3,"desc":"Leve"}]
            
            var listadoTipoInci = JSON.parse(data);
            for (var k = 0; k < listadoTipoInci.length; k++) {
                var listaTipo = listadoTipoInci[k];
                var temp = "<option value=" + listaTipo["id"] + ">" + listaTipo["desc"] + "</option>";
                rpta = rpta + temp;
                
            }
            
            $("#lostipos").append(rpta);
            
        }
    });
});



$(document).on("click", "#btnFiltrarInci", function () {
    
    var x = $("#lostipos").val();    
    var rpta = "";
    $.ajax({
        type: "POST",
        url: BASE_URL + "incidenciaFiltro",
        data: "data=" + x,
        async: false,
        success: function (data) {
           
           
           var lisIncidencias = JSON.parse(data);
            
            var monthNum = {
                "ene":01,     
                "feb": 02,
                "mar": 03,
                "abr": 04,
                "may": 05,           
                "jun": 06,
                "jul": 07,       
                "ago": 08,
                "sep": 09,
                "oct": 10,     
                "nov": 11,
                "dic": 12 
            };
            
            for (var k = 0; k < lisIncidencias.length; k++) {
                var incidencia = lisIncidencias[k];             
                               
                var arFecha = incidencia["fechaOcur"].toString().split(" ");
                var mes = arFecha[0];
                
                var casidia = arFecha[1].toString().split(",");
                var dia = casidia[0];
                
                var anio = arFecha[2];               
                
                var mesEnNum = monthNum[mes];               
                
                var fechaFinal = dia + "/" + mesEnNum + "/" + anio;
              
                var llamaBom;
                var llamaCom;
                
                if(incidencia["bombero"] = 1){
                    llamaBom = "SI";
                }else{
                    llamaBom = "NO";
                }
                
                if(incidencia["comisaria"] = 1){
                    llamaCom = "SI";
                }else{
                    llamaCom = "NO";
                }
                var temp = "<tr>" +
                 "<td>" + incidencia["idIncidencia"] + "</td>" +
                 "<td>" + incidencia["dniCliente"] + "</td>" +
                 "<td>" + incidencia["codServicio"] + "</td>" +
                 "<td>" + fechaFinal + "</td>" +
                 "<td>" + incidencia["tipoOcur"] + "</td>" +
                 "<td>" + incidencia["nroCamara"] + "</td>" +
                 "<td>" + incidencia["obs"] + "</td>" +
                 "<td>" + incidencia["dniEmp"] + "</td>" +
                 "<td>" + llamaBom + "</td>" +
                 "<td>" + llamaCom + "</td>" +                 
                 "</tr>";
         
                 rpta = rpta + temp;
                 
            }

            $("#cuerpoInci").empty();
            $("#cuerpoInci").append(rpta);
        }
    });

});

$(document).on("click", "#btnFiltrarEmp", function () {
    
    var x = $("#filtroTurno").val();    
    var rpta = "";
    
    $.ajax({
        type: "POST",
        url: BASE_URL + "empleadoFiltro",
        data: "data=" + x,
        async: false,
        success: function (data) {
           
           
           var lisIncidencias = JSON.parse(data);
            
            var monthNum = {
                "ene":01,     
                "feb": 02,
                "mar": 03,
                "abr": 04,
                "may": 05,           
                "jun": 06,
                "jul": 07,       
                "ago": 08,
                "sep": 09,
                "oct": 10,     
                "nov": 11,
                "dic": 12 
            };
            
            for (var k = 0; k < lisIncidencias.length; k++) {
                var incidencia = lisIncidencias[k];             
                               
                var arFecha = incidencia["fechaOcur"].toString().split(" ");
                var mes = arFecha[0];
                
                var casidia = arFecha[1].toString().split(",");
                var dia = casidia[0];
                
                var anio = arFecha[2];               
                
                var mesEnNum = monthNum[mes];               
                
                var fechaFinal = dia + "/" + mesEnNum + "/" + anio;
              
                var llamaBom;
                var llamaCom;
                
                if(incidencia["bombero"] = 1){
                    llamaBom = "SI";
                }else{
                    llamaBom = "NO";
                }
                
                if(incidencia["comisaria"] = 1){
                    llamaCom = "SI";
                }else{
                    llamaCom = "NO";
                }
                var temp = "<tr>" +
                 "<td>" + incidencia["idIncidencia"] + "</td>" +
                 "<td>" + incidencia["dniCliente"] + "</td>" +
                 "<td>" + incidencia["codServicio"] + "</td>" +
                 "<td>" + fechaFinal + "</td>" +
                 "<td>" + incidencia["tipoOcur"] + "</td>" +
                 "<td>" + incidencia["nroCamara"] + "</td>" +
                 "<td>" + incidencia["obs"] + "</td>" +
                 "<td>" + incidencia["dniEmp"] + "</td>" +
                 "<td>" + llamaBom + "</td>" +
                 "<td>" + llamaCom + "</td>" +                 
                 "</tr>";
         
                 rpta = rpta + temp;
                 
            }

            $("#cuerpoInci").empty();
            $("#cuerpoInci").append(rpta);
        }
    });

});

$(document).on("click", "#btnFiltrarServ", function () {
    
    var x = $("#idAgencia").val();    
    var rpta = "";
    
    $.ajax({
        type: "POST",
        url: BASE_URL + "servicioFiltro",
        data: "data=" + x,
        async: false,
        success: function (data) {          
           
           var lisSer = JSON.parse(data);
            
            var monthNum = {
                "ene":01,     
                "feb": 02,
                "mar": 03,
                "abr": 04,
                "may": 05,           
                "jun": 06,
                "jul": 07,       
                "ago": 08,
                "sep": 09,
                "oct": 10,     
                "nov": 11,
                "dic": 12 
            };
            
            
            for (var k = 0; k < lisSer.length; k++) {
                var servicio = lisSer[k];             
                               
                var arFecha1 = servicio["fechaPedido"].toString().split(" ");
                var mes1 = arFecha1[0];                
                var casidia1 = arFecha1[1].toString().split(",");
                var dia1 = casidia1[0];                
                var anio1 = arFecha1[2];             
                var mesEnNum1 = monthNum[mes1];              
                var fechaPed = dia1 + "/" + mesEnNum1 + "/" + anio1;
                
                
                var arFecha2 = servicio["fechaInsta"].toString().split(" ");
                var mes2 = arFecha2[0];                
                var casidia2 = arFecha2[1].toString().split(",");
                var dia2 = casidia2[0];                
                var anio2 = arFecha2[2];             
                var mesEnNum2 = monthNum[mes2];              
                var fechaIns = dia2 + "/" + mesEnNum2 + "/" + anio2;
                
                
                var arFecha3 = servicio["fechaFinServicio"].toString().split(" ");
                var mes3 = arFecha3[0];                
                var casidia3 = arFecha3[1].toString().split(",");
                var dia3 = casidia3[0];                
                var anio3 = arFecha3[2];             
                var mesEnNum3 = monthNum[mes3];              
                var fechaFin = dia3 + "/" + mesEnNum3 + "/" + anio3;
                
                
                
                var temp = "<tr>" +
                 "<td>" + servicio["codServicio"] + "</td>" +
                 "<td>" + fechaPed + "</td>" +
                 "<td>" + fechaIns + "</td>" +
                 "<td>" + fechaFin+ "</td>" +
                 "<td>" + servicio["idPrecio"] + "</td>" +
                 "<td>" + servicio["estado"] + "</td>" +                 
                 "<td>" + servicio["codIden"] + "</td>" +
                 "<td>" + servicio["codAgencia"] + "</td>" +
                 "<td>" + servicio["direccion"] + "</td>" +           
                 "</tr>";
         
                 rpta = rpta + temp;
                 
            }

            $("#cuerpoServ").empty();
            $("#cuerpoServ").append(rpta);
                                 
                
        }
    });

});


$(document).ready(function () {
    var rpta = "";
    $.ajax({
        type: 'GET',
        url: BASE_URL + "listarServicios",
        data: "",
        async: false,
        success: function (data) {
            
            
            var lisSer = JSON.parse(data);
            
            var monthNum = {
                "ene": 1,     
                "feb": 2,
                "mar": 3,
                "abr": 4,
                "may": 5,           
                "jun": 6,
                "jul": 7,       
                "ago": 8,
                "sep": 9,
                "oct": 10,     
                "nov": 11,
                "dic": 12 
            };
            
            
            for (var k = 0; k < lisSer.length; k++) {
                var servicio = lisSer[k];             
                               
                var arFecha1 = servicio["fechaPedido"].toString().split(" ");
                var mes1 = arFecha1[0];                
                var casidia1 = arFecha1[1].toString().split(",");
                var dia1 = casidia1[0];                
                var anio1 = arFecha1[2];             
                var mesEnNum1 = monthNum[mes1];              
                var fechaPed = dia1 + "/" + mesEnNum1 + "/" + anio1;
                
                
                var arFecha2 = servicio["fechaInsta"].toString().split(" ");
                var mes2 = arFecha2[0];                
                var casidia2 = arFecha2[1].toString().split(",");
                var dia2 = casidia2[0];                
                var anio2 = arFecha2[2];             
                var mesEnNum2 = monthNum[mes2];              
                var fechaIns = dia2 + "/" + mesEnNum2 + "/" + anio2;
                
                
                var arFecha3 = servicio["fechaFinServicio"].toString().split(" ");
                var mes3 = arFecha3[0];                
                var casidia3 = arFecha3[1].toString().split(",");
                var dia3 = casidia3[0];                
                var anio3 = arFecha3[2];             
                var mesEnNum3 = monthNum[mes3];              
                var fechaFin = dia3 + "/" + mesEnNum3 + "/" + anio3;
                
                
                
                var temp = "<tr>" +
                 "<td>" + servicio["codServicio"] + "</td>" +
                 "<td>" + fechaPed + "</td>" +
                 "<td>" + fechaIns + "</td>" +
                 "<td>" + fechaFin+ "</td>" +
                 "<td>" + servicio["idPrecio"] + "</td>" +
                 "<td>" + servicio["estado"] + "</td>" +                 
                 "<td>" + servicio["codIden"] + "</td>" +
                 "<td>" + servicio["codAgencia"] + "</td>" +
                 "<td>" + servicio["direccion"] + "</td>" +           
                 "</tr>";
         
                 rpta = rpta + temp;
                 
            }

            $("#cuerpoServ").empty();
            $("#cuerpoServ").append(rpta);
            
        }
    });
});




