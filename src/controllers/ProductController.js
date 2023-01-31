export class ProductController{

    constructor(params){
        this.id = params.pop();
    }

    async execute(){
        //Models
        const resp = await fetch("../src/data/product.json");
        const products = await resp.json();
        const product = products.find(p => p.id == this.id);
        //View
        const {ProductView} = await import('../views/ProductView.js');
        const view = new ProductView(product);
        const content = view.render();
        return content;
    }
}