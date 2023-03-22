/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede 
*/

const team = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name:'Angela',
        surname:'Caroll',
        role:'Chief Editor',
        image:'angela-caroll-chief-editor.jpg'
    },
    {
        name:'Walter',
        surname:'Gordon',
        role:'Office Manager',
        image:'walter-gordon-office-manager.jpg'
    },
    {
        name:'Angela',
        surname:'Lopez',
        role:'Social Media Manager',
        image:'angela-lopez-social-media-manager.jpg'
    },
    {
        name:'Scott',
        surname:'Estrada',
        role:'Developer',
        image:'scott-estrada-developer.jpg'
    },
    {
        name:'Barbara',
        surname:'Ramos',
        role:'Graphic Designer',
        image:'barbara-ramos-graphic-designer.jpg'
    },
];

const row = document.querySelector('.row');
let content = '';

for(let i = 0; i < team.length; i++){
    console.log(team[i]);
    console.log('nome: ' + team[i].name);
    console.log('cognome: ' + team[i].surname);
    console.log('ruolo: ' + team[i].role);
    console.log('image: ' + team[i].image);

    const member = team[i];
    const cards = `
    <div class="col-4">
        <div class="card CPM-max-widht mt-5">
            <img class="crd-img-top" src="./img/${member.image}" alt="">
            <div class="card-body text-center">
                <div><h5 class="CPM-text-grey">${member.name} ${member.surname}</h5></div>
                <div><p class="CPM-text-grey">${member.role}</p></div>
            </div>
        </div> 
    </div>
    `;

    content += cards;
}

row.innerHTML = content;