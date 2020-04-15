function toOrderPage(){
    var phNo = (document.getElementById('mobNum').value);
    if(phNo.length===10 && phNo-1===phNo-1){
        window.location.href="./Cart.html";
    }
    else{
        document.write('The Phone Number That You Have Entered Is Invalid!! ');
        document.write(' Refresh to go back to the login page!!');

    }
}