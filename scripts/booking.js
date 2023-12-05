/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 20;
let numberOfDays = 0;
let total = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let days = document.getElementById("days").children

function onClick(){
    if(!this.classList.contains("clicked")){
        this.classList.add("clicked")
        numberOfDays++;
    }
    else{
        this.classList.remove("clicked")
        numberOfDays--;
    }
    calculate()
}

for (const child of days){
    child.addEventListener("click",onClick)
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button")

function clear(){
    for (const child of days){
        child.classList.remove("clicked")
    }
    numberOfDays = 0
    calculate()
}
clearButton.addEventListener("click", clear)
/********* change rate *********/

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let fullButton = document.getElementById("full")

function fullClick(){
    fullButton.classList.add("clicked")
    halfButton.classList.remove("clicked")
    costPerDay = 35;
    calculate()
}

fullButton.addEventListener("click", fullClick)

// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfButton = document.getElementById("half")

function halfClick(){
    fullButton.classList.remove("clicked")
    halfButton.classList.add("clicked")
    costPerDay = 20;
    calculate()
}

halfButton.addEventListener("click", halfClick)

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    total = numberOfDays * costPerDay
    let cost = document.getElementById("calculated-cost")
    cost.innerText = total
}
