export class ProductController{

    async execute(){
        const resp = await fetch('http://app-js.loc/src/views/ProductView.html');
        const view = await resp.text();
        return view;
    }
}