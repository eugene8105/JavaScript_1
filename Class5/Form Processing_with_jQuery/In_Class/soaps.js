$(document).ready(function () {
    $("input[name=soap]").change(updateButton);
    $("form").submit(placeOrder);

    function placeOrder(event) {
        event.preventDefault();
        // find all the checked 
        var subtotal = 0;

        checkedBoxes.each(function () {
            subtotal += $(this).data("price");
        })

        $("#soapOutput").text(subtotal.toFixed(2));
    }

    function updateButton() {
        var checkedBoxes = $("input[name=soap]:checked");

        var numSelections = checkedBoxes.length;

        $("#quantity").text(numSelections);

    }
})