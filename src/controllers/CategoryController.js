export class CategoryController{

    constructor(params){
        this.categoryName = params?.pop()?.replace('-', ' ');
    }

    async execute(){
        //Models
        let resp = await fetch("../src/data/category.json");
        const categories = await resp.json();
        const category = categories.find(c => c.title == this.categoryName);
        resp = await fetch("../src/data/product.json");
        let products = await resp.json();
        products = products.filter(p => p.category_id == category.id);
        //View
        const {CategoryView} = await import('../views/CategoryView.js');
        const view = new CategoryView({category, products});
        const content = view.render();
        return content;
    }
}