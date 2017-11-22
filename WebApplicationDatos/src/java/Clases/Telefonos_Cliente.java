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
public class Telefonos_Cliente {
    private String number;
    private int idCliente;

    public Telefonos_Cliente(String number, int idCliente) {
        this.number = number;
        this.idCliente = idCliente;
    }

    public String getNumber() {
        return number;
    }

    public int getIdCliente() {
        return idCliente;
    }
    
    
}
