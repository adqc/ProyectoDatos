/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases;

import java.util.Date;

/**
 *
 * @author Anwera97
 */
public class Proyecto {

    private int idCliente;
    private int codigoProyecto;
    private String tipoPlataforma;
    private Date fechaFin;
    private Date fechaInic;
    private String nombreProyecto;
    private int presupuesto;
    private int idJefe;

    public Proyecto(int idCliente, int codigoProyecto, String tipoPlataforma, Date fechaFin, Date fechaInic, String nombreProyecto, int presupuesto, int idJefe) {
        this.idCliente = idCliente;
        this.codigoProyecto = codigoProyecto;
        this.tipoPlataforma = tipoPlataforma;
        this.fechaFin = fechaFin;
        this.fechaInic = fechaInic;
        this.nombreProyecto = nombreProyecto;
        this.presupuesto = presupuesto;
        this.idJefe = idJefe;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public int getCodigoProyecto() {
        return codigoProyecto;
    }

    public String getTipoPlataforma() {
        return tipoPlataforma;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public Date getFechaInic() {
        return fechaInic;
    }

    public String getNombreProyecto() {
        return nombreProyecto;
    }

    public int getPresupuesto() {
        return presupuesto;
    }

    public int getIdJefe() {
        return idJefe;
    }

}
