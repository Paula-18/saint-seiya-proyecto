const Name = document.getElementById("nombre");
const Constellation = document.getElementById("constelacion");
const Age = document.getElementById("edad");
const Birthday = document.getElementById("cumpleaños");
const Info = document.getElementById("info");
const Abilitie = document.getElementById("habilidad-1");

const ApiUrl = 'https://localhost:5001'; 

let getSaintSeiyaData = async ()=> {
    const response = await fetch(`${ApiUrl}/SaintSeiya/Character/0`);
    const saint = await response.json();
    console.log(saint);
    const {name,constellation, age, birthDate, description, abilities} = saint;

    Name.innerText = name;
    Constellation.innerText = constellation;
    Age.innerText = age;
    Birthday.innerText = birthDate;
    Info.innerText = description;
    Abilitie.innerText = abilities;

};

getSaintSeiyaData();

const Name2 = document.getElementById("nombre2");
const Constellation2 = document.getElementById("constelacion2");
const Age2 = document.getElementById("edad2");
const Birthday2 = document.getElementById("cumpleaños2");
const Info2 = document.getElementById("info2");
const Abilitie2 = document.getElementById("habilidad2-1");

let getSaintSeiyaData2 = async ()=> {
    const response2 = await fetch(`${ApiUrl}/SaintSeiya/Character/1`);
    const saint2 = await response2.json();
    console.log(saint2);
    const {name,constellation, age, birthDate, description, abilities} = saint2;

    Name2.innerText = name;
    Constellation2.innerText = constellation;
    Age2.innerText = age;
    Birthday2.innerText = birthDate;
    Info2.innerText = description;
    Abilitie2.innerText = abilities;

};

getSaintSeiyaData2();

const Name3 = document.getElementById("nombre3");
const Constellation3 = document.getElementById("constelacion3");
const Age3 = document.getElementById("edad3");
const Birthday3 = document.getElementById("cumpleaños3");
const Info3 = document.getElementById("info3");
const Abilitie3 = document.getElementById("habilidad3-1");

let getSaintSeiyaData3 = async ()=> {
    const response3 = await fetch(`${ApiUrl}/SaintSeiya/Character/2`);
    const saint3 = await response3.json();
    console.log(saint3);
    const {name,constellation, age, birthDate, description, abilities} = saint3;

    Name3.innerText = name;
    Constellation3.innerText = constellation;
    Age3.innerText = age;
    Birthday3.innerText = birthDate;
    Info3.innerText = description;
    Abilitie3.innerText = abilities;

};

getSaintSeiyaData3();

const Name4 = document.getElementById("nombre4");
const Constellation4 = document.getElementById("constelacion4");
const Age4 = document.getElementById("edad4");
const Birthday4 = document.getElementById("cumpleaños4");
const Info4 = document.getElementById("info4");
const Abilitie4 = document.getElementById("habilidad4-1");

let getSaintSeiyaData4 = async ()=> {
    const response4 = await fetch(`${ApiUrl}/SaintSeiya/Character/3`);
    const saint4 = await response4.json();
    console.log(saint4);
    const {name,constellation, age, birthDate, description, abilities} = saint4;

    Name4.innerText = name;
    Constellation4.innerText = constellation;
    Age4.innerText = age;
    Birthday4.innerText = birthDate;
    Info4.innerText = description;
    Abilitie4.innerText = abilities;

};

getSaintSeiyaData4();

const Name5 = document.getElementById("nombre5");
const Constellation5 = document.getElementById("constelacion5");
const Age5 = document.getElementById("edad5");
const Birthday5 = document.getElementById("cumpleaños5");
const Info5 = document.getElementById("info5");
const Abilitie5 = document.getElementById("habilidad5-1");

let getSaintSeiyaData5 = async ()=> {
    const response5 = await fetch(`${ApiUrl}/SaintSeiya/Character/4`);
    const saint5 = await response5.json();
    console.log(saint5);
    const {name,constellation, age, birthDate, description, abilities} = saint5;

    Name5.innerText = name;
    Constellation5.innerText = constellation;
    Age5.innerText = age;
    Birthday5.innerText = birthDate;
    Info5.innerText = description;
    Abilitie5.innerText = abilities;

};

getSaintSeiyaData5();