function iLivro(qlf, est, prc, frt, idd, prz) {
    return 1000 * (qlf + 10 * est) / (prc + frt + idd + prz);
}

/*const livros = [
    {
        titulo: "Numerical Recipes in C",
        vendedor: "Recriar Shop",
        qualificacao: 97,
        estado: 2,
        preco: 178,
        frete: 24.29,
        idade: 30,
        prazo: 13,
        indice: iLivro(97, 2, 178, 24.29, 30, 13)
    },
    {
        titulo: "Numerical Recipes in C",
        vendedor: "Sebo e Lojão",
        qualificacao: 100,
        estado: 2,
        preco: 180,
        frete: 24.29,
        idade: 30,
        prazo: 13,
        indice: iLivro(100, 2, 180, 24.29, 30, 13)
    },
    {
        titulo: "Numerical Recipes in C",
        vendedor: "Cidade dos Versos",
        qualificacao: 100,
        estado: 2,
        preco: 186.49,
        frete: 0,
        idade: 29,
        prazo: 12,
        indice: iLivro(100, 2, 186.49, 0, 29, 12)
    },
    {
        titulo: "Numerical Recipes in C",
        vendedor: "GF Books",
        qualificacao: 94,
        estado: 3,
        preco: 192.46,
        frete: 0,
        idade: 30,
        prazo: 28,
        indice: iLivro(94, 3, 192.46, 0, 30, 28)
    },
    {
        titulo: "Numerical Recipes in C",
        vendedor: "Ergodebooks",
        qualificacao: 91,
        estado: 2,
        preco: 60.12,
        frete: 163.20,
        idade: 30,
        prazo: 40,
        indice: iLivro(91, 2, 60.12, 163.20, 30, 40)
    },
    {
        titulo: "Numerical Recipes in C",
        vendedor: "GF Books",
        qualificacao: 95,
        estado: 2,
        preco: 393.61,
        frete: 0,
        idade: 30,
        prazo: 28,
        indice: iLivro(95, 2, 396.61, 0, 30, 28)
    },
    {
        titulo: "Numerical Recipes in C",
        vendedor: "Recriar Shop",
        qualificacao: 77,
        estado: 2,
        preco: 178,
        frete: 20.44,
        idade: 30,
        prazo: 13,
        indice: iLivro(77, 2, 178, 20.44, 30, 13)
    },
    {
        titulo: "Numerical Recipes in C",
        vendedor: "Livrarias Universitárias Boston",
        qualificacao: 73,
        estado: 4,
        preco: 3182,
        frete: 0,
        idade: 30,
        prazo: 49,
        indice: iLivro(73, 4, 3182, 0, 30, 49)
    }
];*/

const livros = [
    {
        titulo: "The C Programming Language",
        vendedor: "the_book_community",
        qualificacao: 93,
        estado: 4,
        preco: 450.99,
        frete: 0,
        idade: 10,
        prazo: 28,
        indice: iLivro(93, 4, 450.99, 0, 10, 28)
    },
    {
        titulo: "The C Programming Language",
        vendedor: "the_book_community",
        qualificacao: 93,
        estado: 2,
        preco: 346.97,
        frete: 0,
        idade: 10,
        prazo: 28,
        indice: iLivro(93, 2, 346.97, 0, 10, 28)
    },
    {
        titulo: "The C Programming Language",
        vendedor: "Books Unplugged",
        qualificacao: 95,
        estado: 2,
        preco: 346.98,
        frete: 0,
        idade: 10,
        prazo: 32,
        indice: iLivro(95, 2, 346.98, 0, 10, 32)
    },
    {
        titulo: "The C Programming Language",
        vendedor: "Ergodebooks",
        qualificacao: 91,
        estado: 2,
        preco: 274.17,
        frete: 100.95,
        idade: 10,
        prazo: 43,
        indice: iLivro(91, 2, 346.98, 0, 10, 32)
    },
    {
        titulo: "The C Programming Language",
        vendedor: "Blue Ocean Lighthouse",
        qualificacao: 0,
        estado: 4,
        preco: 430,
        frete: 11,
        idade: 10,
        prazo: 11,
        indice: iLivro(0, 4, 430, 11, 10, 11)
    },
    {
        titulo: "The C Programming Language",
        vendedor: "Amazon",
        qualificacao: 93,
        estado: 4,
        preco: 281,
        frete: 0,
        idade: 10,
        prazo: 11,
        indice: iLivro(93, 4, 281, 0, 10, 11)
    }
]