function _id(ident){
    return document.getElementById(ident);
}

function factorial(){
    var entradaFactorial = _id("entradaFactorial").value;
    var operaciones = "";
    var resultado = 1;
    
    if (entradaFactorial<0)alert("MAL!!")
    for(var i=entradaFactorial;i>0;i--){
        resultado = resultado *i;
        operaciones+=i;
        if(i>1){
            operaciones+="*";
        }
    }
    
    

    _id("operacionsFactorial").innerHTML= operaciones;
    _id("resultatFactorial").innerHTML=resultado;
}

function calculaIVA(){
    var valor = _id("preuAmbIVA");
    var tipus = _id("tipusIVA").value;
    var entrada = valor.value;
    var IVA = 1;
    var precioSinIVA = 1;


        
        precioSinIVA = entrada / (1+tipus/100)
        IVA = entrada - precioSinIVA;
    

    _id("preuSenseIVA").innerHTML= precioSinIVA.toFixed(2);
    _id("IVA").innerHTML= IVA.toFixed(2);


}

function canviaFons(tipus){
    var colorFondo;
    var colorTexto;
        if (tipus == "random"){
            var red = Math.floor(Math.random() * 255);
            var green = red;
            var blue = red;
            colorFondo = "rgb(" + red + "," + green + "," + blue + ")";
        }else if (tipus == "clear"){ //cambiamos el fondo a blanco
            colorFondo = "white";
            colorTexto = "black";
        } else if (red>180){
            colorTexto = "white"
        }

    _id("cos").style.backgroundColor = colorFondo;
    _id("cos").style.color = colorTexto;
}
