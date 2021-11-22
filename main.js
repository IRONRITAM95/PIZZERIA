var pizzas= ["CHEESY", "FARMHOUSE", "DELUXE VEGGIE", "PANEER & ONION", "VEG EXTRAVAGANZA"];
function getmenu(){
    var h ;
    h="<ol class='menulist'>"
    pizzas.sort();
    for(var i=0;i<pizzas.length;i++){
        h=h+ '<li>' + pizzas[i] +'</li>'
    }
    h=h+"</ol>";
    document.getElementById("display_menu").innerHTML=h ;
}
function add_item(){
    var n =document.getElementById("add_item").value ;
    pizzas.push(n) ; 
    var p ;
    p="<section class='cards'>"
    pizzas.sort() ;
    for(var i=0;i<pizzas.length;i++){
       p=p+'<div class="card">' + '<img src="images/pizzaImg.png">' + pizzas[i] + '</div>'
    }
    p=p+"</section>";
    document.getElementById("display_addedmenu").innerHTML=p ;
}