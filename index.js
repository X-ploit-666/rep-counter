// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count




let total = 0;
let count = 0;
let totalEl = document.getElementById('total-el')
let saveEl = document.getElementById('save-el');
let increment = document.getElementById('increment-btn');
let destination = document.getElementById('count-el');

let counterParam = Number(
    (new URLSearchParams(window.location.search)).get('continueFrom')
);

if (counterParam) {
    total = counterParam;
    saveEl.style.display = "block";
    saveEl.textContent += ` ${counterParam} - `
    totalEl.innerText = total;
    
}


increment.addEventListener('click', (e) => {
    count += 1;
    destination.textContent = count;
});



function save() {
    saveEl.style.display = "block";
    saveEl.textContent += ` ${count} - `
    total += count
    totalEl.innerText = `Total: ${total}`;
    count = 0
    destination.textContent = count
    

}


function clear() {
    saveEl.textContent = "REP HISTORY:"
}

document.getElementById("save-btn").addEventListener("click", save);
document.getElementById("clear-btn").addEventListener("click",clear);

