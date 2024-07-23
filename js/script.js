var plusButton = Array.from(document.getElementsByClassName("fa-plus-circle"));


for(let i=0; i<plusButton.length; i++) {
    plusButton[i].addEventListener('click', function(){
        plusButton[i].nextElementSibling.innerHTML++
        calculerTotal ();
    })

}
var minusButton = Array.from(document.getElementsByClassName("fas fa-minus-circle"));
for (let i = 0; i < minusButton.length; i++) {
    minusButton[i].addEventListener('click', function() {
        if (minusButton[i].previousElementSibling.innerHTML > 0) {
            minusButton[i].previousElementSibling.innerHTML--;
        }
        calculerTotal ();
    });
}
var deleteButton = Array.from(document.getElementsByClassName("fas fa-trash-alt"));
var card = Array.from(document.getElementsByClassName("card"))
for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', function() {
        // deleteButton[i].parentNode.remove();
        card[i].parentNode.remove();
        calculerTotal ();
    });
}
var heartButton = Array.from(document.getElementsByClassName("fas fa-heart"));
for (let i = 0; i < heartButton.length; i++) {
    heartButton[i].addEventListener('click', function() {
        if (heartButton[i].classList.contains('liked')) {
            heartButton[i].classList.remove('liked');
        } else {
            heartButton[i].classList.add('liked');
        }
    });
}
function calculerTotal (){
    var tot=0;
    var unitPrice = Array.from(document.getElementsByClassName("here"));
    var totalPrice = document.getElementById("tot");
    var quantity = Array.from(document.getElementsByClassName("quantity"));
   for (let i=0 ; i<unitPrice.length ; i++){
        tot += Number(unitPrice[i].innerHTML) * Number(quantity[i].innerHTML);
        console.log(tot)
    }
    totalPrice.innerHTML = tot;
    }