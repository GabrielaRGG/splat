
function load(str)
{
var xmlhttp;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("problema").innerHTML=xmlhttp.responseText;
    }
  }
var cat= str;
if(cat=="Agua"){
  document.getElementById("problema").options.length=0;
    document.getElementById("problema").options[1]=new Option("Escasez", "Escasez");
    document.getElementById("problema").options[2]=new Option("Agua sucia", "Agua sucia");
    document.getElementById("problema").options[3]=new Option("Fuga de agua", "Fuga de agua");
}else if(cat=="Luz"){
   document.getElementById("problema").options.length=0;
    document.getElementById("problema").options[1]=new Option("Problemas de factura", "Problemas de factura");
    document.getElementById("problema").options[2]=new Option("Calidad de servicio", "Calidad de servicio");
    document.getElementById("problema").options[3]=new Option("Servidumbres (postes en terrenos de particulares)", "Servidumbres (postes en terrenos de particulares)");
}else
 document.getElementById("problema").options.length=0;
    document.getElementById("problema").options[0]=new Option("Selecciona una opción", "0");
}

