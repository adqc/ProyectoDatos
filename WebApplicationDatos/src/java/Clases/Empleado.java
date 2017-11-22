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
public class Empleado {
   protected int idEmpleado;
   protected int dni;
   protected int sueldo;
   protected Date fechaContrato;
   protected String correo;
   protected String nombre;

    public Empleado(int idEmpleado, int dni, int sueldo, Date fechaContrato, String correo, String nombre) {
        this.idEmpleado = idEmpleado;
        this.dni = dni;
        this.sueldo = sueldo;
        this.fechaContrato = fechaContrato;
        this.correo = correo;
        this.nombre = nombre;
    }

    public int getIdEmpleado() {
        return idEmpleado;
    }

    public int getDni() {
        return dni;
    }

    public int getSueldo() {
        return sueldo;
    }

    public Date getFechaContrato() {
        return fechaContrato;
    }

    public String getCorreo() {
        return correo;
    }

    public String getNombre() {
        return nombre;
    }
   
}
