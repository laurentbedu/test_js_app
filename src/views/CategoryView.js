export class CategoryView {
  
  constructor(models) {
    this.models = models;
  }

  render = () => {
    const { category, products } = this.models;

    const productsCards = products.map(product => {
        return `
        <div class="col-12 col-md-6 col-lg-4 pb-3">
            <div class="card" onclick="location.href='/product/${product.id}'">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <h6>${product.price}€</h6>
                    <p class="card-text">${product.description}</p>
                </div>
            </div>
        </div>
        `;
    }).join('');
    

    return `
        <div id="CategoryDetailView">
            <h1>La catégorie ${category.title}</h1>
            <div class="row">
                ${productsCards}
            </div>
        </div>

        `;
  };
}
