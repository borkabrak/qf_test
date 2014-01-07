window.onload = function(){
    document.querySelector("form#contact").onsubmit = function(event){
        alert("Thanks for your input " + event.target.name.value + "!");
        return false;
    };
}
