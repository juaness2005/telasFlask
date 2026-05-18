const botaoAlimentacao = document.getElementById("alimentacao");
const opcoes = document.getElementById("opcoes-alimentacao");

const botaoRefeicao = document.getElementById("refeicao");
const opcoes2 = document.getElementById("opcoes-refeicao");

const botoesFechar = document.querySelectorAll(".fechar");
const checkbox = document.querySelector("#botao-tema");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});


const cartao = document.querySelector("#cartao");

cartao.addEventListener("input", () => {

    let valor = cartao.value;

    valor = valor.replace(/\D/g, "");
    valor = valor.substring(0, 16);

    valor = valor.replace(/(\d{4})(?=\d)/g, "$1 ");
    cartao.value = valor;
});

const validade = document.querySelector("#validade");

validade.addEventListener("input", () => {

    let valor = validade.value;
    valor = valor.replace(/\D/g, "");
    if(valor.length > 2){
        valor = valor.replace(/(\d{2})(\d)/, "$1/$2");
    }

    validade.value = valor;
});

// Mostrar alimentação
botaoAlimentacao.addEventListener("click", () => {
    opcoes.classList.remove("hidden");
});

// Mostrar refeição
botaoRefeicao.addEventListener("click", () => {
    opcoes2.classList.remove("hidden");
});

// Fechar ambos
botoesFechar.forEach(btn => {
    btn.addEventListener("click", () => {
        opcoes.classList.add("hidden");
        opcoes2.classList.add("hidden");
    });
});