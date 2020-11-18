$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
    {
        firstName: {
            required: true
        },
        grade: {
            required: true,
            min: 5,
            max: 8
        }
    };

    // Object containing the error messages
    var myMessages =
    {
        firstName: {
            required: "First name"
        },
        grade: {
            required: "Insert grade",
            min: "min 5",
            max: "max 8"
        }
    };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            message: myMessages
        }
    );

    function runMyProgram() {

        var firstName = $("#firstName").val();

        var grade = parseInt($("#grade").val());
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.

        $("#message").text(`You have registered ${firstName} for grade ${grade}`);

    }



});