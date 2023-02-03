export class HomeView {


  constructor(categories) {
    this.categories = categories;
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  render = () => {
    const categoriesCards = this.categories
      .map((category) => {
        return `
        <div class="col-12 col-md-6 col-lg-4 pb-3">
            <div class="card" onclick="location.href='/category/${category.title.replace(
              " ",
              "-"
            )}'">
                <img src="${category.image}" class="card-img-top" alt="${
          category.title
        }">
                <div class="card-body">
                    <h5 class="card-title">${category.title}</h5>
                    <p class="card-text">${category.description}</p>
                </div>
            </div>
        </div>
        `;
      })
      .join("");

    const content = `
    <link rel="stylesheet" href="/assets/css/HomeView.css">
    <div id="HomeView">
        <h1>Page d'Accueil - Liste des catégories</h1>
        <div class="row">
            ${categoriesCards}
        </div>
    </div>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input name="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input name="check" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br/><br/><br/>
    `;

    const view = document.createElement('div');
    view.innerHTML = content;
    view.querySelector("form").onsubmit = (event) => { this.formSubmit(event) }
    return view;
  };
}
