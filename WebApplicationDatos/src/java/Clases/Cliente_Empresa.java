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
public class Cliente_Empresa extends Cliente {
    private int idClienteEmpresa;

    private String ruc;
    private String razonSocial;
    private String ObjetoSocial;

    public Cliente_Empresa(String ruc, String razonSocial, int idCliente, String ObjetoSocial, String email) {
        super(idCliente, email);
        this.ruc = ruc;
        this.razonSocial = razonSocial;
        this.ObjetoSocial = ObjetoSocial;
    }

    public String getRuc() {
        return ruc;
    }

    public String getRazonSocial() {
        return razonSocial;
    }

    public String getObjetoSocial() {
        return ObjetoSocial;
    }

    public String getEmail() {
        return email;
    }
    
    public int getIdClienteEmpresa() {
        return idClienteEmpresa;
    }

    public int getIdCliente() {
        return idCliente;
    }
    
    
    
    
    
}
