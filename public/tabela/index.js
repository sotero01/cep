
let products = [];
function addProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    if (productName && !isNaN(productPrice)) {
        const product = { name: productName, price: productPrice };
        products.push(product);
        updateTable();
        clearForm();
    }
}
function deleteProduct(index) {
    products.splice(index, 1);
    updateTable();
}

function editProduct(index) {
    const newName = prompt('Novo nome do produto:');
    const newPrice = parseFloat(prompt('Novo preço do produto:'));

    if (newName && !isNaN(newPrice)) {
        products[index].name = newName;
        products[index].price = newPrice;
        updateTable();
    }
}

function clearForm() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
}

function updateTable() {
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = '';

    products.forEach((product, index) => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = product.name;
        cell2.textContent = product.price.toFixed(2);
        cell3.innerHTML = `
            <button onclick="editProduct(${index})">Editar</button>
            <button onclick="deleteProduct(${index})">Deletar</button>
        `;
    });
}

updateTable();
