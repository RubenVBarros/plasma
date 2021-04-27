//Variable pour le call Ajax
let ajax = new XMLHttpRequest();
let method = "GET";
let url = "localhost";
let asynchronous = true;

//Ouverture et envoie de la requete ajax pour recevoir les donnes sql
ajax.open(method,url,asynchronous);
//ajax.send();

//Si les données sont accesible print dans la console
ajax.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);
        console.log(data);//Debug
    }
}