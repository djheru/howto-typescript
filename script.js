function Greeter(greeting) {
    this.greeting = greeting;
}
Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
};
var greeter = new Greeter("Ohai!");
var button = document.createElement("button");
button.textContent = "say ohai";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
