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
public class Cliente {
    protected int idCliente;
    protected String email;

    public Cliente(int idCliente, String email) {
        this.idCliente = idCliente;
        this.email = email;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public String getEmail() {
        return email;
    }
    
    
}
