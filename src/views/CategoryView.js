export class CategoryView {
    
    constructor(categoryName){
        this.categoryName = categoryName;
    }
    
    render = () => {
      return `Categorie ${this.categoryName}`;
    }
}