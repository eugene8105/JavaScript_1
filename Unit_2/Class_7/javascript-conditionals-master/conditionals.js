$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickCounter").submit(countClick);

    var clickCount = 0;
    // passing event
    function countClick(event) {
        // making event preventDefault stoping from flashing the page.
        event.preventDefault();
        // Increment a variable that tracks the
        // number of button clicks
        clickCount++;

        // Print the current number of clicks to the
        // <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(clickCount);
        // When the count gets to 10, reset it to 0
        if (clickCount == 10) {
            clickCount = 0;
        }

    }

    $("#birthYearButton").click(checkAge);
    function checkAge() {
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var birthYear = parseFloat($("#birthYear").val());

        // var yearNow = currentTime.getFullYear();
        var yearNow = new Date().getFullYear();
        // If they are currently under 18, print "Child"
        if ((yearNow - birthYear) < 18) {
            // to the <p> with ID of "birthYearOutput"
            $("#birthYearOutput").text("Child");
        } else {
            // If they are 18 or over, print "Adult" instead
            // to the <p> with ID of "birthYearOutput"
            $("#birthYearOutput").text("Adult");
        }

        return false;
    }

    $("#salesTax").submit(calcSalesTax);
    function calcSalesTax(event) {

        event.preventDefault();

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var purchaseAmount = parseFloat($("#purchaseAmount").val());
        // Get the state from the text box with ID "state"
        var state = $("#state").val();
        state = state.toUpperCase();
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        if (state === "WI") {
            taxAmount = .05; // 5
            $("#salesTaxOutput").text(purchaseAmount * .05);
        } else if (state === "IL") {
            taxAmount = .08; // 8
            $("#salesTaxOutput").text(purchaseAmount * .08);
        } else if (state === "MN") {
            taxAmount = .075; // 7.5
            $("#salesTaxOutput").text(purchaseAmount * .075);
        } else if (state === "MI") {
            taxAmount = .055; // 5.5
            $("#salesTaxOutput").text(purchaseAmount * .055);
        } else {
            $("#salesTaxOutput").text("Error");
        }
        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"

        // If the user enters a state not listed above,
        // print "Error" instead


    }

    $("#catFood").submit(recommendFood);

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with
        // ID of "catAge"
        var catAge = parseFloat($("#catAge").val());
        // Cats under 2 get "kitten chow", between 2 and 10
        if (catAge < 2) {
            $("#catAgeOutput").text("kitten chow");
        } else if (catAge > 2 && catAge < 10) {
            // get "adult chow", and over 10 get "senior chow"
            $("#catAgeOutput").text("adult chow");
        } else if (catAge > 10) {
            $("#catAgeOutput").text("senior chow");
        }
    }

    $("#randomCard").submit(drawCard);
    function drawCard(event) {
        event.preventDefault();
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;
        var suitDescription;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if (faceValue == 2) {
            faceValue = "Ace";
        } else if (faceValue == 11) {
            faceValue = "Jack";
        } else if (faceValue == 12) {
            faceValue = "Queen";
        } else if (faceValue == 13) {
            faceValue = "King";
        }

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if (suit == 1) {
            suitDescription = "Clubs";
        } else if (suit == 2) {
            suitDescription = "Spades";
        } else if (suit == 3) {
            suitDescription = "Hearts";
        } else if (suit == 4) {
            suitDescription = "Diamonds";
        }

        description = faceValue + " of " + suitDescription;
        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(description);

    }
});