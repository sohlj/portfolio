console.log("Portfolio loaded");

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(){

        console.log(this.href);

    });

});
