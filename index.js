const person1 = {
    name : "Pal",
    age : 20,
    role : "ML Engineer",
    salary : 60000
}

const person2 = {
    name : "Tanya",
    age : 22,
    role : "Ethical Hacker",
}

const {name , age , role , salary=70000} = person1;

console.log(name);
console.log(age);
console.log(role);
console.log(salary);