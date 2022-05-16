//get all buttons
let sum = 0;
const buttonElements = document.getElementsByClassName('item');
//make for each possible
let buttonCollection = Array.from(buttonElements);

const sumElement = document.getElementById('sum-value');
const outputElement = document.getElementById('output');

//iterate over collection
buttonCollection.forEach(element => {
    element.addEventListener('click', (e)=>{
        //this works on the buttons
        e.currentTarget.style.border = 'solid 1px #FFF';
        e.currentTarget.disabled = 'true';
        let valueOfBtn = parseValue(e.currentTarget.textContent, 1);

        //create the div
        let divElement = document.createElement('div');
        divElement.textContent = parseValue(e.currentTarget.textContent, 0);
        divElement.classList.add('output-item');
        
        //create the button to remove div (stretch goal)
        //let removeButton = document.createElement('button');
        //removeButton.textContent = 'Remove';
        //removeButton.classList.add('remove-button');

        //removeButton.addEventListener('click', (e)=>{
            //e.currentTarget.parentElement.remove();
            
        //})
        //divElement.append(removeButton);
        
        //append whole construct to output
        outputElement.append(divElement);

        //calculate sum
        calculateSum(valueOfBtn);
        
    })
});

function parseValue(val, position){
    //position argument can be changed to get either the text or the numebr value. This can be done way easily with regex also. 
    let parsedValue = val.split(': $')[position];
    return parsedValue;
}
function calculateSum(val){
    sumElement.textContent = `$${sum+= Number(val)}`;
}
function attachItemToOutput(e){
    let divElement = document.createElement('div');
    divElement.textContent = parseValue(e.currentTarget.textContent, 0);
    divElement.classList.add('output-item');
    outputElement.append(divElement);
}
function attachRemoveButton(e){
    let btnElement = document.createElement('button');
    btnElement.textContent = 'Remove task';
    btnElement.addEventListener('click', removeTask)
    e.currentTarget.append(btnElement);
}
function createElement(tag, requiredText){
    let element = document.createElement(tag);
    element.textContent = requiredText;
}


