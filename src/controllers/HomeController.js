export class HomeController{

    async execute(){
        //Models
        const resp = await fetch("http://localhost:5000/category");
        const jsonResp = await resp.json();
        const categories = jsonResp.data;
        //view
        const {HomeView} = await import('../views/HomeView.js');
        const view = new HomeView(categories);
        const content = view.render();
        return content;
        
    }

}