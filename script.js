function proximaTela(numero) {
    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    const tela = document.getElementById("tela" + numero);

    if (tela) {
        tela.classList.add("ativa");
    }

    window.scrollTo(0, 0);

    criarCoracoes();
}


function mostrarSurpresa() {
    const surpresa = document.getElementById("surpresa");

    if (surpresa) {
        surpresa.style.display = "block";
    }

    criarCoracoes();
}


function criarCoracoes() {

    for (let i = 0; i < 12; i++) {

        const coracao = document.createElement("div");

        coracao.textContent = "❤️";

        coracao.style.position = "fixed";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.top = "-40px";
        coracao.style.fontSize =
            18 + Math.random() * 20 + "px";

        coracao.style.zIndex = "9999";
        coracao.style.pointerEvents = "none";

        document.body.appendChild(coracao);

        const duracao = 3000 + Math.random() * 3000;

        const animacao = coracao.animate(
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
                duration: duracao,
                easing: "linear"
            }
        );

        animacao.onfinish = function() {
            coracao.remove();
        };
    }
}
