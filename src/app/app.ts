export class App {

    public start() {
        const element = document.createElement('h1');

        element.innerText = "Hello, world!";

        document.body.appendChild(element);
    }

}