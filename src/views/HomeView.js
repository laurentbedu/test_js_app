export class HomeView {

    constructor(categories){
        this.categories = categories;
    }

    //TODO categories

  render = () => {

    const categoriesCards = this.categories.map(category => {
        return `
        <div class="col-12 col-md-6 col-lg-4 pb-3">
            <div class="card" onclick="location.href='/category/${category.title.replace(' ','-')}'">
                <img src="${category.image}" class="card-img-top" alt="${category.title}">
                <div class="card-body">
                    <h5 class="card-title">${category.title}</h5>
                    <p class="card-text">${category.description}</p>
                </div>
            </div>
        </div>
        `;
    }).join('');

    return `
    <link rel="stylesheet" href="/assets/css/HomeView.css">
    <div id="HomeView">
        <h1>Page d'Accueil - Liste des catégories</h1>
        <div class="row">
            ${categoriesCards}
        </div>
    </div>
    `;
    
  };
}
