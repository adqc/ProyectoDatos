/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servletDatos;

import Clases.Cliente;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;
import oracleconnection.Conexion;

/**
 *
 * @author ALVAR
 */
@WebServlet(name = "controller", urlPatterns = {"/controller"})
public class controller extends HttpServlet {

    
    

    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
 
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        
       String emailC=request.getParameter("emailC");
            
     
            System.out.println("emailRERE "+ emailC);
            Conexion cone = new Conexion();
            Connection con = cone.conectarse();
            Cliente cli=new Cliente(12,emailC);
            cone.registrarCliente(con, cli);
            cone.desconectarse(con);
            System.out.println("salió del metodo exitosamente ");
        response.sendRedirect("index.html");
    }

    
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
