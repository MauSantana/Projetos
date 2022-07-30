/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sysight;

import org.apache.commons.dbcp2.BasicDataSource;

/**
 *
 * @author natanista
 */
public class ConexaoMySql {
    

 private BasicDataSource datasource;

public ConexaoMySql() {
        this.datasource = new BasicDataSource();
        datasource.setDriverClassName("com.mysql.jdbc.Driver");
        datasource.setUrl("jdbc:mysql://localhost:3306/banco1");
        datasource.setUsername("root");
        datasource.setPassword("urubu100");

    } 
 

 public BasicDataSource getDatasource() {
  return datasource;
 }

}
