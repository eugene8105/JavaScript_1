function calculateTrip() {
    /*
     GATHER INPUT FROM WEB PAGE
     */
    // Get the value from a prompt
    var milesDriven = prompt("How many miles did you drive?");

    // Convert to a number data type (including decimals)
    milesDriven = parseFloat(milesDriven);

    // Get the value from a prompt
    var milesPerGallon = prompt("What MPG does your vehicle get?");

    // Convert to a number data type (including decimals)
    milesPerGallon = parseFloat(milesPerGallon);

    // Get the value from a prompt
    var milesPerHour = prompt("What is the average speed in MPH?");

    // Convert to a number data type (truncating decimals)
    milesPerHour = parseInt(milesPerHour);

    // Get the value from a prompt
    var dollarsPerGallon = prompt("How much does gas cost per gallon?");

    // Convert to a number data type (including decimals)
    dollarsPerGallon = parseFloat(dollarsPerGallon);

    /*
    PERFORM CALCULATIONS AND DISPLAY OUTPUT
     */

    // Calculate the total hours for the trip
    var hours = milesDriven / milesPerHour;

    // Calculate the total gas used
    var totalGallonsUsed = milesDriven / milesPerGallon;

    // Calculate the cost for that many gallons
    var costOfGas = totalGallonsUsed * dollarsPerGallon;

    // Round the hours to one decimal place for display
    var hoursDisplay = hours.toFixed(1);

    // Round the cost to dollars/cents for display
    var costOfGasDisplay = costOfGas.toFixed(2);

    // Display an alert with the total hours
    alert(`Your trip will take ${hoursDisplay} hours.`);

    // Display an alert with the trip cost
    alert(`Your trip will cost $${costOfGasDisplay} for gas.`);
}