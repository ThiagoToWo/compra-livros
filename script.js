const form = document.querySelector("form");
const pre = document.querySelector("#lista");

let livros = [];

function iLivro(qlf, est, prc, frt, idd, prz) {
    return 1000 * (qlf + 10 * est) / (prc + frt + idd + prz);
}

function mostrarLivros() {
    let lista = "LISTA DE VENDEDORES E ÍNDICES DOS LIVROS\n\n";

    for (const livro of livros) {
        lista = `${lista}- ${livro.vendedor} (${livro.indice.toFixed()} pontos):
    QUALIFACAÇÃO: ${livro.qualificacao}% positivas
    LIVRO: ${livro.titulo}  PREÇO: R$ ${livro.preco.toFixed(2)}
    FRETE: R$ ${livro.frete.toFixed(2)} PRAZO: ${livro.prazo} dias
    EDIÇÃO: ${new Date().getFullYear() - livro.idade}   ESTADO DO LIVRO: ${livro.estado == 1 ? "ruim" : livro.estado == 2 ? "bom" : livro.estado == 3 ? "muito bom" : "novo"}\n\n`;
    }

    pre.innerText = lista;
}

function salvar() {
    localStorage.setItem("livrosPesquisados", JSON.stringify(livros));
}

function adicionar(e) {
    e.preventDefault();

    const titulo = form.inTitulo.value;
    const vendedor = form.inVendedor.value;
    const qualificacao = Number(form.inQualificacao.value);
    const estado = Number(form.selEstado.value);
    const preco = Number(form.inPreco.value);
    const frete = Number(form.inFrete.value);
    const idade = Number(new Date().getFullYear() - form.inAno.value);
    const prazo = Number(form.inPrazo.value);

    const livro = {
        titulo,
        vendedor,
        qualificacao,
        estado,
        preco,
        frete,
        idade,
        prazo,
        indice: iLivro(
            qualificacao,
            estado,
            preco,
            frete,
            idade,
            prazo
        )
    }

    livros.push(livro);
    livros.sort((a, b) => b.indice - a.indice);
    livros.sort((a, b) => a.titulo - b.titulo);   

    salvar();
    mostrarLivros();   

    form.inVendedor.value = "";
    form.inQualificacao.value = "";
    form.selEstado.value = "2";
    form.inPreco.value = "";
    form.inFrete.value = "";
    form.inAno.value = "";
    form.inPrazo.value = "";
    form.inVendedor.focus();
}

function carregar() {
    if (localStorage.getItem("livrosPesquisados")) {        
        livros = JSON.parse(localStorage.getItem("livrosPesquisados"));
        mostrarLivros();
    }    
}

function limpar() {
    localStorage.removeItem("livrosPesquisados");
    pre.innerText = "";
    window.location.reload;
}

form.addEventListener("submit", adicionar);
form.inLimpar.addEventListener("click", limpar);
window.addEventListener("load", carregar);