const btnTrocaCor = document.getElementById("trocaCor");
let caixaTexto = document.getElementById('caixa');
 
btnTrocaCor.addEventListener("click", () => {
 
let caixaTexto = document.getElementById('caixa');
 
if( caixaTexto.className === "azul" ){
    caixaTexto.classList.add('vermelho');
    caixaTexto.classList.remove('azul');
}else{
    caixaTexto.classList.add('azul');
    caixaTexto.classList.remove('vermelho');
}
    console.log(caixaTexto.className);
})
 
const  btntrocaTexto = document.getElementById("trocaTexto");
btntrocaTexto.addEventListener("click", () => {
    if (caixaTexto.innerText == "Macaco"){
        document.getElementById("caixa").innerHTML = "Gorila";
    }else{
        document.getElementById("caixa").innerHTML = "Macaco";
    }
});

const btnSoma = document.getElementById("somar");
    btnSoma.addEventListener("click", () => {
        let numero1 = document.getElementById("numero1").value;
        let numero2 = document.getElementById("numero2").value;
        let soma = parseInt (numero1) + parseInt(numero2);
        console.log(soma);
});

const btnBolinhas = document.getElementById ("addBolinhas");
    let total = 0; 
    let bolinhas = "";
    let bola = '<div class="bolinha"></div>';

btnBolinhas.addEventListener("click", () => {
    total = total +1; 
    bolinhas = "";
    for (let index = 0; index < total; index++) {
        bolinhas = bolinhas+bola;
    }
    document.getElementById("agrupaBolinhas").innerHTML = bolinhas;
});

const btnLocalizar = document.getElementById ("localiza");
    btnLocalizar.addEventListener ("click", () => {
        function showPosition(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            console.log( "Latitud: " + latitude + "Longitude: " + longitude);
        }
        let coordenadas = navigator.geolocation.getCurrentPosition(showPosition);   
    })