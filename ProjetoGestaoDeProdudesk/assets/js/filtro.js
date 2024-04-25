document.addEventListener("DOMContentLoaded", function () {
    const filterForm = document.getElementById("filter-form");
    const produtos = document.querySelectorAll(".produto");

    filterForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const categoriaSelecionada = document.getElementById("category").value;
        const precoMin = parseFloat(document.getElementById("price-min").value);
        const precoMax = parseFloat(document.getElementById("price-max").value);
        const itensPorPagina = parseInt(document.getElementById("items-per-page").value);

        if (isNaN(precoMin) || isNaN(precoMax)) {
            alert("Por favor, preencha os campos de preço.");
            return;
        }

        if (categoriaSelecionada === "" || categoriaSelecionada === "Todas") {
            alert("Por favor, selecione uma categoria.");
            return;
        }

        produtos.forEach(function (produto) {
            const categoriaProduto = produto.getAttribute("data-categoria");
            const precoProduto = parseFloat(produto.getAttribute("data-preco"));

            const atendeCategoria = categoriaSelecionada === "Todas" || categoriaProduto === categoriaSelecionada;
            const atendePreco = isNaN(precoMin) || isNaN(precoMax) || (precoProduto >= precoMin && precoProduto <= precoMax);

            if (atendeCategoria && atendePreco) {
                produto.style.display = "block";
            } else {
                produto.style.display = "none";
            }
        });
    });

    const botoesAdicionarCarrinho = document.querySelectorAll(".produto button");
    botoesAdicionarCarrinho.forEach(function (botao) {
        botao.addEventListener("click", function () {
            alert("Produto adicionado ao carrinho com sucesso! =)");
        });
    });
});

