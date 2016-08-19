/**
 * ReporteController
 *
 * @description :: Server-side logic for managing reportes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
/** add: function(req, res){
        var employee = {categoria: 'Agua',usuario : 'Armando',problema : 'Fugas',colonia:'centro',latitud:'397955',longitud:'084348',fecha:'2016-08-11',detalles:'fuga de agua grande',status:'0'};
        Reporte.create(employee).exec(function(err, result){
            if (err) {
                sails.log.debug('Some error occured ' + err);
                return res.json(500, { error: 'Some error occured' });
            }
            sails.log.debug('Success', JSON.stringify(result));
            return res.json(200, { success: 'Success' });
        });
    }
    **/
    
        report: function (req, res){
        var body = req.body;
        if(body != undefined){
            //console.log(body.Users);
            Reporte.create(body.Reporte).exec(function (err, ReporteController){
                //return res.view({ users: PersonasController});
                return res.redirect('/usuarios/index');
            });
        }else{
            return res.view();
        }
    },
};
