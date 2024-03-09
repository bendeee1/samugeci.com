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

// Az IPv4 cím lekérdezése és megjelenítése
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ipv4 = data.ip;
        // Az IPv4 cím megjelenítése a HTML oldalon
        document.getElementById('output').textContent = ipv4;
    })
    .catch(error => console.error('Hiba történt:', error));

// Az új elem létrehozása gombra kattintva
function ujElem() {
    const szoveg = document.getElementById('szoveg').value;
    const ujElem = document.createElement('p');
    ujElem.textContent = szoveg;
    document.getElementById('output').appendChild(ujElem);
}
