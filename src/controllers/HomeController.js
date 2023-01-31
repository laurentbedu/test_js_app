export class HomeController{

    async execute(){
        //Models
        const resp = await fetch("../src/data/category.json");
        const categories = await resp.json();
        //view
        const {HomeView} = await import('../views/HomeView.js');
        const view = new HomeView(categories);
        const content = view.render();
        return content;
        
    }
}