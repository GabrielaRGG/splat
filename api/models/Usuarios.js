/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
       autoCreatedAt: false,
    autoUpdatedAt: false,
    connection: 'mysql',
    tableName : 'usuarios',
//connection: 'mysql',
    attributes: {
        name: {
             type: 'string',
            primaryKey: true
        },
       apellido: {
            type: 'string'
        },
        alias: {
            type: 'string'
        }
        ,
        contrasena: {
            type: 'string'
        }
        ,
        status: {
            type: 'string'
        }
        ,
        tipo: {
            type: 'string'
        }
    
    }
};

