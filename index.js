window.onload = function(){

    // Submit contact form
    if (document.querySelector("form#contact") !== null){
        document.querySelector("form#contact").onsubmit = function(event){
            alert("Thanks for your input " + event.target.name.value + "!");
            return false;
        };
    };

}

var order = function(item) {
    confirm("Do you want to order " + item.innerText + " for $" + (Math.random() * 100).toFixed(2) + "?");
};

