let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight ="0px";
    }
}

var typed = new Typed(".loop",{
    strings : ["JavaScript Developer", "Backend Developer", "Database Engineer", "Project Manager", "Product Manager"],
    typedSpeed :150,
    backSpeed :150,
    looped : true
})