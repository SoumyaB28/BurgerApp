var orders=[];
var count=1;
function onAdd(event){
    console.log(event.target.parentNode.childNodes);
    var burgerName = (event.target.parentNode.childNodes[1].innerText);
    var numberOfBurgers = (event.target.parentNode.childNodes[9].value);
    var typeOfBurger = (event.target.parentNode.childNodes[5].value);
    var burgerPrice = 0;
    if(typeOfBurger==="egg"){
        burgerPrice = 150*numberOfBurgers;
    }
    else if(typeOfBurger==="veg"){
        burgerPrice = 100*numberOfBurgers;
    }
    else if(typeOfBurger==="chicken"){
        burgerPrice = 200*numberOfBurgers;
    }
    var burgerObject = {
        name: burgerName,
        quantity: numberOfBurgers,
        type: typeOfBurger,
        price: burgerPrice,
        id: count++
    }
    orders.push(burgerObject);
    

}
function onOrder(){
    //console.log(orders);
    myjson = JSON.stringify(orders);
    localStorage.setItem("orders",myjson);
    window.location.href = "./Checkout.html";
    
}

function onMinusButton(event){
    var num = parseInt(event.target.parentNode.childNodes[9].value);
    console.log(event.target.parentNode.childNodes);
    var id = (event.target.parentNode.childNodes[9].getAttribute("id"));
    if(num>0){
        document.getElementById(id).value = num-1;
    }
}

function onPlusButton(event){
    var num = parseInt(event.target.parentNode.childNodes[9].value);
    var id = (event.target.parentNode.childNodes[9].getAttribute("id"));
    if(num>=0){
        document.getElementById(id).value = num+1;
    }
}