function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "jane", lastName: "user" };
document.body.innerHTML = greeter(user);
