// side navbar 

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// SEARCH FUNCTIONALITY
 var productscontainer = document.getElementById("productscontainer")
 var search = document.getElementById("search")
 var productslist = productscontainer.querySelectorAll("div")

 search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productslist.length;count=count+1)
    {
        var productname = productslist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productslist[count].style.display="none"
        }
        else{
            productslist[count].style.display="block"
        }
    }
 })