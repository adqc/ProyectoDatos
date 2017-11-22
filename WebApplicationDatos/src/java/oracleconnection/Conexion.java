/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package oracleconnection;

import Clases.Cliente;
import Clases.Empleado;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author ALVAR
 */
public class Conexion {

    String user;
    String url;
    String password;

    public Conexion() {
        String serverName = "DESKTOP-52SBCRG";
        String serverPort = "1521";
        String sid = "XE";
        url = "jdbc:oracle:thin:@" + serverName + ":" + serverPort + ":" + sid;
        user = "alvaro"; //el usuario hemos creado en sql command line
        password = "sistemas";
    }
    
    public Connection conectarse() {
         Connection conn = null;
        try {
            String driverName = "oracle.jdbc.driver.OracleDriver";
            Class.forName(driverName);
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Se ha conectado exitosamente a la base de datos");
        } catch (ClassNotFoundException e) {
            System.out.println("No se pudo enconrtar el driver de la base de datos" + e.getMessage());
        } catch (SQLException e) {
            System.out.println("No se pudo conectar a la base de datos" + e.getMessage());
        }
        return conn;
    }
    public void desconectarse(Connection con) {
        try {
            con.close();
        } catch (SQLException ex) {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
     public void registrarCliente(Connection con, Cliente cli){
      
        
             System.out.println("email: +  "+ cli.getEmail());
        try {
            CallableStatement ps = con.prepareCall("{call insertarCliente(?)}");
                                                  
         
            ps.setString(1, cli.getEmail());
        
            System.out.println("");
            ps.execute();
            System.out.println("insertó todo cliente");    
        } catch (SQLException ex) {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println("No insertó Cliente");
        }        
    }
}
