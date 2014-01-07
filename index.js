window.onload = function(){

    // Submit contact form
    if (document.querySelector("form#contact") !== null){
        document.querySelector("form#contact").onsubmit = function(event){
            alert("Thanks for your input " + event.target.name.value + "!");
            return false;
        };
    };

}
