/**
 * Reporte.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
   autoCreatedAt: false,
    autoUpdatedAt: false,
    connection: 'mysql',
    tableName : 'reportes',
    attributes: {
        id_reporte: {
            type: 'INTEGER',
            columnName: 'id_reporte',
            primaryKey: true,
            autoIncrement: true
        },
        categoria: 'STRING',
        usuario: 'STRING',
        problema: 'STRING',
        colonia: 'STRING',
        latitud: 'STRING',
        longitud: 'STRING',
        fecha:'DATE',
        detalles:'STRING',
        status:{
          type:'INTEGER',  
          defaultsTo:0
        },
    }

};

