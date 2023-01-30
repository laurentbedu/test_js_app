import { CategoryController } from "./controllers/CategoryController";
import { HomeController } from "./controllers/HomeController";
import { NotFoundController } from "./controllers/NotFoundController";
import { ProductController } from "./controllers/ProductController";

export class App{

    static controllers = {
        "home" :  HomeController,
        "product" : ProductController,
        "category" : CategoryController
    }

    static start = () => {
        window.onload = async () => { 
            const route = location.pathname;
            const routeItems = route.replace(/^\//, "").replace(/\/$/, "").split('/');
            console.log(routeItems);
            const controllerName = routeItems?.shift() || "home";
            console.log(controllerName);
            let ContollerClass = App.controllers[controllerName];
            if(!ContollerClass){
                ContollerClass = NotFoundController;
            }
            const controller = new ContollerClass(routeItems);
            console.log(controller);
            const vm = await controller.execute();
            document.getElementById("root").innerHTML = vm;
        }
    }

    
    

}