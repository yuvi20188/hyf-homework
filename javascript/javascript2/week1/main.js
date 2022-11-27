const products = getAvailableProducts();

function renderProducts(products) {
  // your code here
  let listResults = document.querySelector("#foundItems");
  for (let i = 0; i < products.length; i++) {
    // console.log(products[i].name, products[i].price, products[i].rating);
    const productLi = document.createElement("li");
    const prodyctName = document.createElement("span");
    const prodyctPrice = document.createElement("span");
    const prodyctRaiting = document.createElement("span");
    prodyctName.style = "font-weight: 700";
    prodyctName.innerHTML = `${products[i].name} <br/>`;
    prodyctPrice.innerHTML = `Price: ${products[i].price} <br/>`;
    prodyctRaiting.innerHTML = `Rating: ${products[i].rating} <br/>`;
    productLi.appendChild(prodyctName);
    productLi.appendChild(prodyctPrice);
    productLi.appendChild(prodyctRaiting);
    listResults.appendChild(productLi);
  }
}

renderProducts(products);
