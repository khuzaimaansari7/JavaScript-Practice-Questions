const body = document.body;
// // body.append("Hello World")

// const div = document.createElement('div');

// // div.innerText = "Hello World";

// body.append(div)

const div = document.querySelector('div')

console.log(div.textContent);
console.log(div.innerText);

console.log(div.setAttribute("id", "div-1"))

document.getElementById('Hello').addEventListener('click', function() {
    alert('Button clicked!');
});