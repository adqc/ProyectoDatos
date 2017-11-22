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
public class Cliente_Individual extends Cliente {
    
    private int idClienteIndividual;
    private String nombre;
    private String apellido;
    private String dni;

    public Cliente_Individual(int idClienteIndividual, String nombre, String apellido, String dni, int idCliente, String email) {
        super(idCliente, email);
        this.idClienteIndividual = idClienteIndividual;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    public int getIdClienteIndividual() {
        return idClienteIndividual;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getDni() {
        return dni;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public String getEmail() {
        return email;
    }
   
    
}
