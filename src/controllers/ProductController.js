export class ProductController{

    constructor(params){
        this.id = params.pop();
    }

    async execute(){

        const {ProductView} = await import('../views/ProductView.js');
        const resp = await fetch("../src/data/product.json");
        const products = await resp.json();
        const product = products.find(p => p.id == this.id);
        const view = new ProductView(product);
        const content = view.render();
        return content;
    }
}