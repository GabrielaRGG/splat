/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
        index: function(req,res) {
        Usuarios.find().exec(function (err, UsuariosController) {
          return res.view({usuarios:UsuariosController});
   //    return res.redirect('/usuarios/index');
        });
    },
      indexadmin: function(req,res) {
        Usuarios.find().exec(function (err, UsuariosController) {
           return res.view({usuarios:UsuariosController});
            //return res.redirect('/');
        });
    },
    login: function(req, res){
       
        Usuarios.find().exec(function (err, UsuariosController) {
           return res.view({usuarios:UsuariosController});
            //return res.redirect('/');
        });
},
  loginadmin: function(req, res){
       
        Usuarios.find().exec(function (err, UsuariosController) {
           return res.view({usuarios:UsuariosController});
            //return res.redirect('/');
        });
},
 createadmin: function (req,res) {
        var body=req.body;
        
        if(body!= undefined){
            
Usuarios.create(body.Usuarios).exec(function (err, users) {

    return res.redirect('/');
});
        }else{
            return res.view();
        }

    },
 create: function (req,res) {
        var body=req.body;
        
        if(body!= undefined){
            
Usuarios.create(body.Usuarios).exec(function (err, users) {

    return res.redirect('/');
});
        }else{
            return res.view();
        }

    },
    salir:function(req,res){

 return res.redirect('/');
},
vista:function (req, res) {
  

    Usuarios.find().exec(function (err, UsuariosController) {
           
           return res.view({usuarios: UsuariosController});
  
    });
  },
//uploadFile.upload({saveAs : fileName, dirname : directoryName},function onUploadComplete(err, files) { });
valida:function (req,res) {

    var name=req.param("name");
    var password=req.param("password");
    
   req.session.user={nombre:name, contrasena:password};
   console.log(req.session.user.nombre);
   if(name!=undefined & password!=undefined){
      
Usuarios.find().exec(function (err, users) {
    var nu=users.length;
    console.log(users.length);
   for(var i=0; i<=nu-1;i++){
console.log(name+"  "+users[i].name+"  "+ users[i].contrasena+"  "+ users[i].status+"  "+users[i].tipo);
if(name==users[i].name & password==users[i].contrasena & users[i].status=="1" & users[i].tipo=="1"){
    console.log("Hola si entra");
return res.redirect('/usuarios/index');
}else if(name==users[i].name & password==users[i].contrasena & users[i].status=="1" & users[i].tipo=="2"){
    console.log("Hola si entra2");
return res.redirect('/usuarios/indexadmin');
}

   }
 

   });
   }
  
  //  console.log(req.sessions.user.[1]); 
   /*  
Usuarios.find(id).exec(function (err, users) {
                 console.log("Este es el que escribes "+ users[0].name+" hola");
        //       return res.redirect('/');  
                  return res.view({usuarios:users});
            });

  /*  Personas.find(id).exec(function (err, PersonasController) {
               console.log( PersonasController[0].name);
           return res.view({personas: PersonasController});

    });*/
/* var body=req.body;
         var name=req.params.name;
        
         
    */
}
};

