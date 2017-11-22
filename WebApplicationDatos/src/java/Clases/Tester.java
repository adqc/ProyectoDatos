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
public class Tester extends Empleado {
    private int idTester;

    public Tester(int idTester, int idEmpleado, int dni, int sueldo, Date fechaContrato, String correo, String nombre) {
        super(idEmpleado, dni, sueldo, fechaContrato, correo, nombre);
        this.idTester = idTester;
    }

    public int getIdTester() {
        return idTester;
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
