export class ProductView {
    
    constructor(product){
        this.product = product;
    }
    
    render = () => {
      return this.product ?
      `
        <div id="ProductDetailView">
            <h1>Le produit avec l'id : ${this.product.id}</h1>
            <h2>${this.product.title} : ${this.product.price}<span>€</span></h2>
            <h3>description : ${this.product.title}</h3>
            <div>
                <img src="${this.product.image}" alt="${this.product.title}">
            </div>
        </div>
        `
        :
        `Ce produit n'existe pas !`;
    };
}