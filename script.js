
function proximaTela(numero) {
    // Esconde todas as telas
    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    // Mostra a próxima tela
    const proxima = document.getElementById("tela" + numero);

    proxima.classList.add("ativa");

    // Volta para o topo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Solta alguns corações
    criarCoracoes();
}


function mostrarSurpresa() {
    const surpresa = document.getElementById("surpresa");

    surpresa.style.display = "block";

    criarCoracoes();

    // Mais corações depois de um pequeno tempo
    setTimeout(function() {
        criarCoracoes();
    }, 800);
}


function criarCoracoes() {

    for (let i = 0; i < 15; i++) {

        const coracao = document.createElement("div");

        coracao.innerHTML = "❤️";

        coracao.style.position = "fixed";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.top = "-30px";

        coracao.style.fontSize =
            (15 + Math.random() * 20) + "px";

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
                    transform:
                        "translateY(110vh) rotate(360deg)",
                    opacity: 0
                }
            ],
            {
                duration: duracao * 1000,
                easing: "linear"
            }
        );

        setTimeout(function() {
            coracao.remove();
        }, duracao * 1000);
    }
}
