

let initialValueElement = document.getElementById('value-select');

initialValueElement.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter' && e.currentTarget.value >=1){
        let lengthRow = document.getElementById('length-value');
        let volumeRow = document.getElementById('volume-value');
        let massRow = document.getElementById('mass-value');

        //calculate feet and meters
        lengthRow.textContent = `${e.currentTarget.value} meters = ${(e.currentTarget.value * 3.2808).toFixed(3)} feet | ${e.currentTarget.value} feet = ${(e.currentTarget.value / 3.2808).toFixed(3)} meters`;

        //calculate liters and gallons
        volumeRow.textContent = `${e.currentTarget.value} liters = ${(e.currentTarget.value * 0.264172).toFixed(3)} gallons | ${e.currentTarget.value} gallons = ${(e.currentTarget.value * 3.785412).toFixed(3)} liters`;

        //calculate kilograms and pounds
        massRow.textContent = `${e.currentTarget.value} kilograms = ${(e.currentTarget.value * 2.2).toFixed(3)} pounds | ${e.currentTarget.value} pounds = ${(e.currentTarget.value / 2.2).toFixed(3)} kilograms`;

        //empty input field
        e.currentTarget.value = '';
    }
})
