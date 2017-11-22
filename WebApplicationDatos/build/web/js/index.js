var BASE_URL = "http://localhost:4567/";

$(document).ready(function () {
    var rpta = "";
    $.ajax({
        type: 'GET',
        url: BASE_URL + "idTipo/listar/",
        data: "",
        async: false,
        success: function (data) {
            console.log("lista de tipo de incidencia");
            console.log(data)
            //[{"id":1,"desc":"Grave"},{"id":2,"desc":"Medio"},{"id":3,"desc":"Leve"}]
            
            var listadoTipoInci = JSON.parse(data);
            for (var k = 0; k < listadoTipoInci.length; k++) {
                var listaTipo = listadoTipoInci[k];
                var temp = "<option value=" + listaTipo["id"] + ">" + listaTipo["desc"] + "</option>";
                rpta = rpta + temp;
                console.log("cada fila");
                console.log(rpta);
            }
            
            $("#tipoOcurrencia").append(rpta);
            
        }
    });
});
$(document).on("click", "#btnGuardar", function () {
    var datos = {
        codigoIden: $("#idCliente").val(),
        fechaPedido: $("#fechaPedido").val(),
        fechaInsta: $("#fechaInstala").val(),
        direccion: $("#direccion").val(),
        codAgencia: $("#codAgencia").val(),
        estado: $("#estado").val()
    };

    console.log(datos);

    $.ajax({
        type: "POST",
        url: BASE_URL + "guardarServicio",
        data: "data=" + JSON.stringify(datos),
        async: false,
        success: function (data) {
            console.log(data);

            $("#idCliente").val("");
            $("#fechaPedido").val("");
            $("#fechaInstala").val("");
            $("#direccion").val("");
            $("#codAgencia").val("");
            $("#estado").val("");
        }
    });
});


$(document).on("click", "#btnRegistrarCli", function () {
    var datos = {
        nombreCli: $("#nombreCli").val(),
        emailC: $("#emailC").val(),

    };

    console.log(datos);

    $.ajax({
        type: "POST",
        url: BASE_URL + "guardarEmpleado",
        data: "data=" + JSON.stringify(datos),
        async: false,
        success: function (data) {
            console.log(data);
            $("#nombreEmp").val("");
            $("#apellidosEmp").val("");
            $("#dniEmp").val("");
            $("#turno").val("");
            $("#cargo").val("");
            $("#fechaContrato").val("");
            $("#codAgencia").val("");
        }
    });

    $("#nombreEmp").val("");
    $("#apellidosEmp").val("");
    $("#dniEmp").val("");
    $("#turno").val("");
    $("#cargo").val("");
    $("#fechaContrato").val("");
    $("#codAgencia").val("");
});

$(document).on("click", "#btnSaveIncidencia", function () {
    var datos = {     
        
        dniCliente: $("#dniCliente").val(),
        fechaOcurrencia: $("#fechaOcurrencia").val(),
        tipoOcurrencia: $("#tipoOcurrencia").val(),
        nroCamara: $("#nroCamara").val(),
        obs: $("#obs").val(),
        dniEmp: $("#dniEmp").val(),
        bombero:$("#bombero").is(":checked"),
        comisaria:$("#comisaria").is(":checked")
    };    
    
    console.log(datos);

    $.ajax({
        type: "POST",
        url: BASE_URL + "guardarIncidencia",
        data: "data=" + JSON.stringify(datos),
        async: false,
        success: function (data) {
            console.log(data);
            $("#dniCliente").val("");
            $("#fechaOcurrencia").val("");                       
            $("#tipoOcurrencia").val("");
            $("#nroCamara").val("");
            $("#observacion").val("");
            $("#dniVigilante").val("");
            $("input:checkbox").removeAttr("checked"); //supuestamente los resetea
        }
    });

});

//$(document).on("click", "#addIncidencia", function () {
//    console.log("entro al evento agregar");
//    
//    var addFilas = "<tr>" +
//                        "<td><input type='text' class='form-control' id='tipoOcurrencia'></td>" +
//                        "<td><input type='text' class='form-control' id='nroCamara'></td>" +
//                        "<td><input type='text' class='form-control' id='obsevacion'></td>" +                       
//              "</tr>";
//    
//    $("#cuerpo").append(addFilas);  
//    
//});