const products = []
 productList =
document.querySelector("#product-list");
const productName = document.querySelector("#product-name");
const productCurrency =
document.getElementById("currencySelect");
const productPrice = document.querySelector
("#product-price");
const productBrand =
document.querySelector("#product-brand");
const productCategory = document.querySelector("#product-category");

const addProductButton = document.querySelector("#add-product");

addProductButton.addEventListener("click", function() {

const newProduct = {
name: productName.value,
currency: productCurrency.value,
price: Number(productPrice.value),
brand: productBrand.value,
category: productCategory.value
};

products.push(newProduct);

products.forEach(function(product) {

productList.innerHTML += `<p class="product-card"><strong>${product.name}</strong><br><span class="product-price">Price: ${product.currency}${product.price.toLocaleString()}</span><br>Brand: ${product.brand}<br><span class="product-category">
Category: ${product.category}</span></p>`;

});
});
