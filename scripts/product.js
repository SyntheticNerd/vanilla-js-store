class Product {
  constructor(id, name, description, price, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.quantity = 1;
    this.previewElement;
  }
  //Method
  calculateTotal() {
    let total = this.price * this.quantity;
    console.log(this.price);
    console.log(this.quantity);
    return total;
  }
  //Getter
  get total() {
    console.log("testing this too")
    return this.calculateTotal();
  }

  addOne() {
    this.quantity++;
  }
  removeOne() {
    this.quantity--;
  }
  setQuantity(value) {
    this.quantity = value;
    console.log(this.quantity);
  }
  generateProductPreview() {
    const listItem = document.createElement("li");
    listItem.classList.add("best-seller-product");

    const productName = document.createElement("h1");
    productName.innerHTML = this.name;

    const price = document.createElement("b");
    price.innerHTML = this.price;

    const description = document.createElement("p");
    const productImage = document.createElement("img");
    productImage.classList.add("best-seller-product-img");
    productImage.src = this.image;
    productImage.alt = this.name;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.innerHTML = "Add to Cart";
    addToCartBtn.addEventListener("click", () => {
      currentUserCart.addCartItem(this);
    });

    const cartImg = document.createElement("img");
    cartImg.src = "../images/cart.svg";
    cartImg.alt = "Cart";

    addToCartBtn.appendChild(cartImg);
    listItem.appendChild(productImage);
    listItem.appendChild(productName);
    listItem.appendChild(price);
    listItem.appendChild(addToCartBtn);

    this.previewElement = listItem;
  }
  get productPreviewElement() {
    this.generateProductPreview();
    return this.previewElement;
  }
}

// const myTestProduct = new Product("name", "description", 345, "./image");
