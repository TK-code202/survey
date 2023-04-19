//User Interface Logic
$(document).ready(function() {
    $("#formOne").submit(function (event){

        const firstNameInput = $("input#first-name").val();
        const lastNameInput = $("input#last-name").val();
        const emailInput = $("input#email").val();
        const planeUseInput = $("select#plane-use").val();
        const planeServiceInput = $("select#plane-service").val();
        const colorInput = $("input#color").val();
        const genderInput = $("input:radio[name=Gender]:checked").val();
        const nextUseInput = $("input:radio[name=next-use]:checked").val();
        
        //Insert input values into summary
        $(".name1").text(firstNameInput);
        $(".name2").text(lastNameInput);
        $(".email").text(emailInput);
        $(".gender").text(genderInput);
        $(".fColor").text(colorInput);
        $(".use-regularity").text(planeUseInput);
        $(".use-experience").text(planeServiceInput);
        $(".use-again").text(nextUseInput);

        //View Survey Summary
        $("#summary").show();
        $(".content").hide();
        
        event.preventDefault();
    });

});