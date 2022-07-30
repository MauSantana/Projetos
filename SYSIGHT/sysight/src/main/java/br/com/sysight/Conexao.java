package br.com.sysight;

import org.apache.commons.dbcp2.BasicDataSource;


public class Conexao {

 private BasicDataSource datasource;

public Conexao() {
        this.datasource = new BasicDataSource();
        datasource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        datasource.setUrl("jdbc:sqlserver://banco-de-dados-sysight.database.windows.net;" +
                    "databaseName=Sysight;");
        datasource.setUsername("Grupo5");
        datasource.setPassword("Sysight5");

    }
 

 public BasicDataSource getDatasource() {
  return datasource;
 }

}