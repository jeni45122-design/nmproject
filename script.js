const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");
let products = [];

// Display products
function renderProducts() {
  productList.innerHTML = "";
  products.forEach((p, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${p.name}</strong> - ₹${p.price}<br>
        <small>${p.category}</small>
      </div>
      <div class="actions">
        <button onclick="editProduct(${index})">Edit</button>
        <button class="delete" onclick="deleteProduct(${index})">Delete</button>
      </div>
    `;
    productList.appendChild(li);
  });
}

// Add product
productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProduct = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    price: document.getElementById("price").value,
    stock: document.getElementById("stock").value,
    category: document.getElementById("category").value,
  };
  products.push(newProduct);
  productForm.reset();
  renderProducts();
});

// Delete product
function deleteProduct(index) {
  products.splice(index, 1);
  renderProducts();
}

// Edit product
function editProduct(index) {
  const p = products[index];
  document.getElementById("name").value = p.name;
  document.getElementById("description").value = p.description;
  document.getElementById("price").value = p.price;
  document.getElementById("stock").value = p.stock;
  document.getElementById("category").value = p.category;

  productForm.onsubmit = function (e) {
    e.preventDefault();
    p.name = document.getElementById("name").value;
    p.description = document.getElementById("description").value;
    p.price = document.getElementById("price").value;
    p.stock = document.getElementById("stock").value;
    p.category = document.getElementById("category").value;

    productForm.reset();
    productForm.onsubmit = defaultSubmit;
    renderProducts();
  };
}

const defaultSubmit = productForm.onsubmit;
