function exibirImagem(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('preview-imagem').src = e.target.result;
            document.getElementById('preview-imagem').style.display = 'block';
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

document.getElementById('imagem-produto').addEventListener('change', function() {
    exibirImagem(this);
});

function validarValor(input) {
    var valor = input.value;
    if (isNaN(valor)) {
        alert("Por favor, insira apenas números para o valor do produto.");
        input.value = "";
    }
}

document.getElementById('valor-produto').addEventListener('input', function() {
    validarValor(this);
});

function validarEstoque(input) {
    var estoque = input.value;
    if (isNaN(estoque)) {
        alert("Por favor, insira apenas números para o estoque do produto.");
        input.value = "";
    }
}


document.getElementById('estoque').addEventListener('input', function() {
    validarEstoque(this);
});

function validarFormulario() {
    var nomeProduto = document.getElementById('nome-produto').value;
    var fornecedor = document.getElementById('fornecedor').value;
    var valorProduto = document.getElementById('valor-produto').value;
    var estoque = document.getElementById('estoque').value;
    var descricao = document.getElementById('descricao').value;
    var imagem = document.getElementById('imagem-produto').files[0];

    if (nomeProduto === "" || fornecedor === "" || valorProduto === "" || estoque === "" || descricao === "" || !imagem) {
        alert("Por favor, preencha todos os campos antes de salvar.");
        return false;
    } else {
        document.getElementById('mensagem-salvo').style.display = 'block';
        return true;
    }
}



