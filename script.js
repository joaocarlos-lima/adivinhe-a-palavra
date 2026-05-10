let palavra;
let vidas = 6
addEventListener("DOMContentLoaded", () => {
    construirPalavra();


})
addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        verificar();
    }
});


function construirPalavra() {
    const palavrasTecnologia = [
        "computador",
        "internet",
        "programacao",
        "algoritmo",
        "hardware",
        "software",
        "processador",
        "memoria",
        "teclado",
        "monitor",
        "mouse",
        "impressora",
        "servidor",
        "bancodeDados",
        "javascript",
        "python",
        "java",
        "android",
        "windows",
        "linux",
        "aplicativo",
        "navegador",
        "firewall",
        "criptografia",
        "inteligenciaartificial",
        "robotica",
        "automacao",
        "ciberseguranca",
        "bluetooth",
        "wifi",
        "satélite",
        "drone",
        "scanner",
        "notebook",
        "smartphone",
        "tablet",
        "microchip",
        "cloudComputing",
        "rede",
        "servidor",
        "backup",
        "codigo",
        "debug",
        "compilador",
        "interface",
        "desenvolvimento",
        "eletronica",
        "streaming",
        "virtualizacao",
        "metaverso"
    ];
    let x = Math.floor(Math.random() * 50);
    palavra = palavrasTecnologia[x];


    const container = document.querySelector(".conteinerPalavra");
    for (let i = 0; i < palavra.length; i++) {
        let campo = document.createElement("div");
        campo.classList.add("campoLetra")
        campo.id = i;
        container.appendChild(campo);
    }

}

let contador = 0;

function verificar() {
    let letra = document.querySelector(".inputLetra").value;
    document.querySelector(".inputLetra").value = "";
    document.querySelector(".aviso").textContent = "";
    if (letra == "") {
        document.querySelector(".aviso").textContent = "O campo está vazio";

    } else {
        if (/^[a-zA-Z]+$/.test(letra)) {
            if (palavra.includes(letra)) {
                for (let i = 0; i <= palavra.length; i++) {
                    if (letra === palavra[i]) {
                        if (document.getElementById(i).textContent == "") {
                            document.getElementById(i).textContent = letra;
                            document.getElementById(i).style.width = "5rem"
                            document.getElementById(i).style.height = "5rem"
                            document.getElementById(i).style.backgroundColor = "#e66b2d"

                            contador++;
                        }
                    }

                    if (contador >= palavra.length) {
                        popup("Você acertou a palavra :)");
                        document.querySelector(".mensagem").style.fontSize = "3rem";
                    }
                }
            } else {
                if (document.querySelector(".letrasConteiner").textContent.includes(letra) != true) {
                    vidas = vidas - 1
                    let porcentagem = ((vidas / 6) * 100);
                    document.querySelector(".letrasConteiner").textContent = document.querySelector(".letrasConteiner").textContent + letra + " "
                    if (vidas > 0) {
                        document.querySelector(".vidas").style.width = porcentagem + "%";
                    } else {
                        popup("Você perdeu :(");
                    }
                } else {
                    document.querySelector(".aviso").textContent = "A letra já foi digitada";
                }
            }
        }
        else {
            document.querySelector(".aviso").textContent = "O caractere digitado não é uma letra";
        }

    }
}
function popup(men) {
    document.querySelector(".vidas").style.width = 0 + "%";
    let popup = document.querySelector(".popup");
    popup.style.display = "flex";
    let mensagem = document.querySelector(".mensagem");
    mensagem.textContent = men;
    if (men === "Você perdeu :(") {
        document.querySelector(".revelar").textContent = "A palavra era: " + palavra;
    }
}
function fechartutorial(){

    document.querySelector(".popupTutorial").style.opacity = "0"
    document.querySelector(".popupTutorial").style.visibility = "hidden"
    document.querySelector(".popupTutorial").style.pointerEvents = "none"
}
function abrirtutorial(){
        document.querySelector(".popupTutorial").style.opacity = "1"
    document.querySelector(".popupTutorial").style.visibility = "visible"
    document.querySelector(".popupTutorial").style.pointerEvents = "all"
}