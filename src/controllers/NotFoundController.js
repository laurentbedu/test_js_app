export class NotFoundController{

    async execute(){
        const resp = await fetch('http://app-js.loc/src/views/NotFoundView.html');
        const view = await resp.text();
        return view;
    }
}