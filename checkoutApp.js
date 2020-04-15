var text = localStorage.getItem("orders");
var orders = JSON.parse(text);
console.log(orders);


function afterTableLoad(){
    var table = document.getElementById("table");
    console.log(table);

for(var i=1;i<=orders.length;i++){
        var row = document.getElementById("table").insertRow(i);
        row.id = ""+i;
        var c0 = row.insertCell(0);
        var c1 = row.insertCell(1);
        var c2 = row.insertCell(2);
        var c3 = row.insertCell(3);
        var c4 = row.insertCell(4);
        var c5 = row.insertCell(5);

        c0.textContent = orders[i-1].name;
        c1.textContent = orders[i-1].type;
        c2.textContent = orders[i-1].quantity;
        c3.textContent = orders[i-1].price/orders[i-1].quantity;
        c4.textContent = orders[i-1].price;
        
        var img1 = document.createElement("img");
        img1.src="./Resources/removecross.jpg";
        img1.setAttribute("id","rmv"+i);
        c5.appendChild(img1);
        document.getElementById('rmv'+i).addEventListener('click',onRemove,true);
    }
}
function onRemove(event){
 
    var x = (event.target.parentNode.parentNode.getAttribute('id'));
    var table = document.getElementById("table");
    for (var i = 0, row; row = table.rows[i]; i++) {
        if(row.getAttribute("id")===x){
            console.log(row);
            table.deleteRow(i);
            for(var j=0;j<orders.length;j++){
                if(orders[j].id === i){
                    orders.splice(j,1);
                }

            }
            console.log(table);
            
        }
     }
    //  if(document.getElementById("table").rows.length==0){
    //     document.getElementById("visib").style.visibility = "visible";
    //}
     
    
}

function onOrderButton(){
    var table = document.getElementById("table");
    console.log(table);
    // var tobepassed = [];
    // for (var i = 1, row; row = table.rows[i]; i++) {
    //     var name = (row.childNodes[0].innerText);
    //     var type = (row.childNodes[1].innerText);
    //     var quantity =  (row.childNodes[2].innerText);
    //     var price =  (row.childNodes[4].innerText);
    //     var myJsonObject = {
    //         Name: name,
    //         Type: type,
    //         Quantity: quantity,
    //         Price: price
    //     }
    //     tobepassed.push(myJsonObject);
    // }
    // console.log(tobepassed);

    // var StringifiedJSON = JSON.stringify(tobepassed);
    // localStorage.setItem("finalorders",StringifiedJSON);

     

    // window.location.href="./Confirmation.html";
    var quantity = 0;
    var price = 0;
    for (var i = 1, row; row = table.rows[i]; i++){
        
        quantity+= parseInt(row.childNodes[2].innerText);
        price+= parseInt(row.childNodes[4].innerText);
    }
    console.log(quantity+" "+price);

    var myJsonObject = {
        Total_Quantity: quantity,
        Total_Price: price
    }

    var x = [];
     
   
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST","http://localhost:9876/orders",true);
    xmlHttp.setRequestHeader("Content-Type","application/json");
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState===4 && xmlHttp.status===200){
            alert(xmlHttp.responseText);
            var xsj = JSON.stringify(x);
            localStorage.setItem("orders",xsj);

        }
    }
    xmlHttp.send(JSON.stringify({totalQuantity:quantity,totalPrice:price}));

   // window.location.href="Confirmation.html";
    

   
    


}


