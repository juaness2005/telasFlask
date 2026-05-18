document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // TEMA DARK
    // =========================

    const checkbox = document.querySelector("#botao-tema");

    const qr = document.querySelector("#qrCode");

    function gerarQR(isDark) {
        if (!qr) return;

        const corQR = isDark ? "FFFFFF" : "000000";
        const bg = isDark ? "000000" : "FFFFFF";

        qr.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent("https://meusite.com")}&size=200x200&color=${corQR}&bgcolor=${bg}`;
    }

    if (checkbox) {
        checkbox.addEventListener("change", () => {

            document.body.classList.toggle("dark");

            const isDark = document.body.classList.contains("dark");

            gerarQR(isDark);
        });
    }

    // inicializa QR
    gerarQR(false);


    // =========================
    // VA / VR MODAIS
    // =========================

    const botaoAlimentacao = document.getElementById("alimentacao");
    const opcoesAlimentacao = document.getElementById("opcoes-alimentacao");

    const botaoRefeicao = document.getElementById("refeicao");
    const opcoesRefeicao = document.getElementById("opcoes-refeicao");

    const botoesFechar = document.querySelectorAll(".fechar button");


    if (botaoAlimentacao && opcoesAlimentacao) {

        botaoAlimentacao.addEventListener("click", (e) => {
            e.preventDefault();

            opcoesAlimentacao.classList.remove("hidden");
            opcoesRefeicao?.classList.add("hidden");
        });
    }

    if (botaoRefeicao && opcoesRefeicao) {

        botaoRefeicao.addEventListener("click", (e) => {
            e.preventDefault();

            opcoesRefeicao.classList.remove("hidden");
            opcoesAlimentacao?.classList.add("hidden");
        });
    }

    botoesFechar.forEach(botao => {
        botao.addEventListener("click", () => {
            opcoesAlimentacao?.classList.add("hidden");
            opcoesRefeicao?.classList.add("hidden");
        });
    });


    // =========================
    // CARTÃO
    // =========================

    const cartao = document.querySelector("#cartao");

    if (cartao) {
        cartao.addEventListener("input", () => {

            let valor = cartao.value;

            valor = valor.replace(/\D/g, "");
            valor = valor.substring(0, 16);
            valor = valor.replace(/(\d{4})(?=\d)/g, "$1 ");

            cartao.value = valor;
        });
    }


    // =========================
    // VALIDADE
    // =========================

    const validade = document.querySelector("#validade");

    if (validade) {
        validade.addEventListener("input", () => {

            let valor = validade.value;

            valor = valor.replace(/\D/g, "");
            valor = valor.substring(0, 4);

            if (valor.length > 2) {
                valor = valor.replace(/(\d{2})(\d+)/, "$1/$2");
            }

            validade.value = valor;
        });
    }

});