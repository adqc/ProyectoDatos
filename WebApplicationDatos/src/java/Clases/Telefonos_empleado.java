/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases;

/**
 *
 * @author Anwera97
 */
public class Telefonos_empleado {
    private String number;
    private int idEmpleado;

    public Telefonos_empleado(String number, int idEmpleado) {
        this.number = number;
        this.idEmpleado = idEmpleado;
    }

    public String getNumber() {
        return number;
    }

    public int getIdEmpleado() {
        return idEmpleado;
    }
    
    
}
