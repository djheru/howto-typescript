function Greeter(greeting: string) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
};

let greeter = new Greeter("Ohai!");

let button = document.createElement("button");
button.textContent = "say ohai";
button.onclick = function () {
    alert(greeter.greet());
}

document.body.appendChild(button)