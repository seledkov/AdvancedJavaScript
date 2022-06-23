class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, description, price, imageUrl) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  render() {
    const prodItemElement = document.createElement('li');
    prodItemElement.classList.add('product-item');
    prodItemElement.innerHTML = `
      <div>
        <img src='${this.product.imageUrl}'  title='${this.product.title}' />
        <h2>${this.product.title}</h2>
        <h3>\$${this.product.price}</h2>
        <p>${this.product.description}</p>
        <button>Add to cart</button>
      </div>
    `;

    return prodItemElement;
  }
}

class ProductList {
  products = [
    new Product(
      'Toyota',
      'japan car',
      1_000_000,
      'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ),
    new Product(
      'Renault',
      'france car',
      1_200_000,
      'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ),
  ];

  constructor() {}

  render() {
    const appRoot = document.getElementById('app');
    const prodListElement = document.createElement('ul');
    prodListElement.classList.add('product-list');

    for (const product of this.products) {
      const prodItem = new ProductItem(product);
      const prodItemElement = prodItem.render();
      prodListElement.append(prodItemElement);
    }
    appRoot.append(prodListElement);
  }
}

const productList = new ProductList();

productList.render();
