function ujElem(){
    let hely = document.getElementById('output');
    let bevitel = document.getElementById('szoveg');
    let elem = document.createElement('div');
    //elem.textContent = "Ez egy uj elem!";
    elem.textContent = bevitel.value;
    hely.appendChild(elem);

}
let cim = document.createElement('h1');
cim.textContent='Javascript pelda';
document.body.insertBefore(cim, document.getElementById('gomb'));

let gomb = document.createElement('button');
gomb.textContent="Dinamikus gomb"
gomb.addEventListener('click',ujElem);
document.body.appendChild(gomb);