
function showModal(str,registro)
{

if (str=="")
  {
  document.getElementById("modal-contenido").innerHTML="";
  return;
  }
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
    document.getElementById("modal-contenido").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","/forma/"+str+"/"+registro,true);
xmlhttp.send();
}
   

function showForma(sub,str,registro)
{
if (str=="")
  {
  document.getElementById("modal-contenido").innerHTML="";
  return;
  }
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
    document.getElementById("modal-contenido").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","/formas/"+str+"/"+registro,true);
xmlhttp.send();
}
   

function showGetPassword(str,registro)
{

if (str=="")
  {
  document.getElementById("modal-contenido").innerHTML="";
  return;
  }
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
    document.getElementById("modal-contenido").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","/forma/"+str+"/"+registro,true);
xmlhttp.send();
}

function redirect(url,target){
  alert (url);

  window.top.location.href = "http://example.com";

}

function gotoURL(url) {
    location.href = url;
}


function searchZip(str,colonia_id) {
  
  // if(event.keyCode == 13) 
  // {
    
    if (str.length==5)
      {
        
        // alert(str);
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
          document.getElementById("zipcode").innerHTML=xmlhttp.responseText;
          }
        }
      xmlhttp.open("GET","/forma/codigo_postal/"+str+"/"+colonia_id,true);
      xmlhttp.send();
    
   }
}

function login(user_name,remember){


// if (user_name.length==5)
  {
    
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
        document.getElementById("loginzone").innerHTML=xmlhttp.responseText;
      }
    }
  xmlhttp.open("POST","/login/"+user_name+"/"+remember,true);
  xmlhttp.send();

  }
}


function xRespaldo(str,db){
  // alert (str+" "+db);
  if (db) db="/"+db;
  // if (user_name.length==5)
    {
      
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
          document.getElementById("modal-contenido").innerHTML=xmlhttp.responseText;
        }
      }
    xmlhttp.open("GET","/formas/"+str+"/"+db,true);
    xmlhttp.send();
  
  }
  
}
