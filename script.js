function abrirPresente() {
    document.querySelector(".inicio").style.display = "none";
    document.querySelector(".presente").style.display = "block";

    criarCoracoes();
}

function mostrarCarta() {
    document.getElementById("carta").style.display = "block";

    criarCoracoes();
}

function criarCoracoes() {
    for (let i = 0; i < 15; i++) {
        const coracao = document.createElement("div");

        coracao.innerHTML = "❤️";

        coracao.style.position = "fixed";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.top = "-30px";
        coracao.style.fontSize = (15 + Math.random() * 25) + "px";
        coracao.style.zIndex = "9999";
        coracao.style.pointerEvents = "none";

        document.body.appendChild(coracao);

        const duracao = 3 + Math.random() * 3;

        coracao.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: "translateY(110vh) rotate(360deg)",
                    opacity: 0
                }
            ],
            {
                duration: duracao * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            coracao.remove();
        }, duracao * 1000);
    }
}
