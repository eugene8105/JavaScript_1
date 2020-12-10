$(document).ready(function () {
    // Assigns handler for the start button
    $("#startClockButton").click(startClock);
    // Assigns handler for the stop button
    $("#stopClockButton").click(stopClock);


    /*
    The number of seconds the user set on the clock. This has to be global, because its
    value needs to persist and mutate as long as the page is open.
    */
    var numSeconds = 0;
    /*
    A constant to avoid "magic numbers"
    */
    var SECONDS_PER_MINUTE = 60;
    /*
    To cancel an interval, you need its ID (returned by the call to setInterval).
    This must be global also, because multiple functions must access it.
    */
    var clockInterval;

    /*
    Called when the Start button is clicked.
    */
    function startClock() {
        // The clock may already be running, so be sure to stop it before
        // starting it again
        stopClock();

        // Initializes the global variable with the value from the text box
        numSeconds = parseInt($("#seconds").val());

        // Make sure the clock doesn't go negative because of bad input
        if (numSeconds < 0) {
            numSeconds = 0;
        }

        // Begins the timer, storing the reference to the interval object in
        // the other global variable

        // setInterval is a JavaScript function
        clockInterval = setInterval(updateClock, 1000);

        // Clear out the results of any previous countdowns
        $("#result").empty().removeClass();
    }

    /*
    Draws the value of the clock on the screen.
    */
    function updateClock() {
        // The variables to build the clock string
        var clockString, minutes, seconds;

        // Translate the number of seconds into minutes and seconds

        // The minutes is the dividend
        minutes = Math.floor(numSeconds / SECONDS_PER_MINUTE);
        // The seconds is the remainder
        seconds = numSeconds % SECONDS_PER_MINUTE;

        // Concatenate the minutes and the seconds together with the ":"

        // If the number of seconds is less than 10, prepend a zero so there
        // are always two digits in the seconds portion
        clockString = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

        // Put the string into the div
        $("#clock").text(clockString);

        // Subtract one from the countdown
        numSeconds--;

        // Are we out of minutes?
        if (minutes === 0) {
            // If we are out of minutes AND out of seconds, stop the interval
            if (seconds === 0) {
                // Stops the interval and changes the time back to black text
                stopClock();

                // Runs the explode function once, 3.5 seconds later.
                // setTimeout is a JavaScript function
                setTimeout(explode, 3500);
            }
            // If we are out of minutes and ALMOST out of seconds, make the clock blink red/black
            else if (seconds < 6) {
                // .toggleClass removes a class if present, adds a class if not present

                // Toggling both red and black will remove whichever one is present,
                // and add the one that's not
                $("#clock").toggleClass("red black");
            }
        }
    }

    // Cancels the interval and makes the text black
    function stopClock() {
        // Make sure that the global variable isn't null
        if (clockInterval) {
            // Ensures that the black class is present
            $("#clock").removeClass("red").addClass("black");
            // Stops the interval (clearInterval is a JavaScript function)
            clearInterval(clockInterval);
        }
    }

    // What happens when the timer expires?
    function explode() {
        // Generate a random number between 0 and not-quite 1
        var coinFlip = Math.random();
        // Half the time...
        if (coinFlip < .5) {
            // ... we are not lucky
            $("#result").text("BOOM!").addClass("bang");
        }
        // ... and half the time
        else {
            /// ... we are
            $("#result").text("fzzzzz....").addClass("fizzle");
        }
    }

});