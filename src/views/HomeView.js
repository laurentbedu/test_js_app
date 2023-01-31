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

    return `
    <link rel="stylesheet" href="/assets/css/HomeView.css">
    <div id="HomeView">
        <h1>Page d'Accueil - Liste des catégories</h1>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 pb-3">
                <div class="card" onclick="location.href='/category/vestibulum-ante'">
                    <img src="https://picsum.photos/id/1001/600/400" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 pb-3">
                <div class="card" onclick="location.href='/category/maecenas'">
                    <img src="https://picsum.photos/id/1002/600/400" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 pb-3">
                <div class="card" onclick="location.href='/category/justo'">
                    <img src="https://picsum.photos/id/1003/600/400" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 pb-3">
                <div class="card" onclick="location.href='/category/lorem-integer'">
                    <img src="https://picsum.photos/id/1004/600/400" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 pb-3">
                <div class="card" onclick="location.href='/category/aliquet-massa'">
                    <img src="https://picsum.photos/id/1005/600/400" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 pb-3">
                <div class="card" onclick="location.href='/category/adipiscing-lorem'">
                    <img src="https://picsum.photos/id/1006/600/400" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 pb-3">
                <div class="card" onclick="location.href='/category/pellentesque'">
                    <img src="https://picsum.photos/id/1010/600/400" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 pb-3">
                <div class="card" onclick="location.href='/category/aodio'">
                    <img src="https://picsum.photos/id/1008/600/400" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 pb-3">
                <div class="card" onclick="location.href='/category/odio-porttitor'">
                    <img src="https://picsum.photos/id/1009/600/400" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
  };
}
