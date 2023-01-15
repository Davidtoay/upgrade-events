/*
1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click
*/

function handleClick (event) {
    console.log(event);
    console.log(event.target.innerHTML);
    //alert("click");
}
document.getElementById("btnToClick").addEventListener("click", handleClick);


/*
1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
*/
const inputs = document.querySelectorAll("input");
for ( let input of inputs){
    input.addEventListener("focus", ejecutar)

}
function ejecutar(event){
    event.target.style.color = "blue";
    console.log(event);
}