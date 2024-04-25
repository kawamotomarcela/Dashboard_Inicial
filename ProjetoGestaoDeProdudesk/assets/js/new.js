function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    document.getElementById('fileInput').value = '';
    document.getElementById('fileName').textContent = '';
    document.getElementById('successMessage').style.display = 'none';
}

function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0 || fileInput.files[0] === undefined) {
        alert("Por favor, selecione um arquivo para enviar.");
        return;
    }

    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
}

function chooseFile() {
    document.getElementById('fileInput').click();
}

function showAddProductPopup() {
    var addProductPopup = document.getElementById("addProductPopup");
    addProductPopup.style.display = "block";
}

function closeAddProductPopup() {
    var addProductPopup = document.getElementById("addProductPopup");
    addProductPopup.style.display = "none";

    document.getElementById("productForm").reset();
}

document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault();


    var productName = document.getElementById("productName").value.trim();
    var productSupplier = document.getElementById("productSupplier").value.trim();
    var productStock = document.getElementById("productStock").value.trim();
    var productValue = document.getElementById("productValue").value.trim();
    var productOther = document.getElementById("productOther").value.trim();


    if (!productName || !productSupplier || !productStock || !productValue) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }


    alert("Produto adicionado com sucesso!");


    document.getElementById("productForm").reset();

    closeAddProductPopup();
});


function showRemovePopup() {
    var removePopup = document.getElementById("removePopup");
    removePopup.style.display = "block";
}

function closeRemovePopup() {
    var removePopup = document.getElementById("removePopup");
    removePopup.style.display = "none";
}

document.getElementById('fileInput').addEventListener('change', function () {
        var fileInput = document.getElementById('fileInput');
        var fileNameSpan = document.getElementById('fileName');
        var uploadBtn = document.getElementById('uploadBtn');
        if (fileInput.files.length > 0) {
            fileNameSpan.textContent = fileInput.files[0].name;
        } else {
            fileNameSpan.textContent = '';
        }
        uploadBtn.style.display = 'block';
    }

);