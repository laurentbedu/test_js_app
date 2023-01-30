export class CategoryView {
  
  constructor(categoryName) {
    this.categoryName = categoryName;
  }

  render = () => {
    return `
      <div id="CategoryDetailView">
          <h1>La catégorie ${this.categoryName}</h1>
      </div>
      `;
  };
}
