export class HomeController{

    async execute(){
        const resp = await fetch('http://app-js.loc/src/views/HomeView.html');
        const view = await resp.text();
        return view;
    }
}