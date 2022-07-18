/*NOME                  RUOLO                        IMMAGINE
Wayne Barnett	      Founder & CEO	               wayne-barnett-founder-ceo.jpg
Angela Caroll	      Chief Editor	               angela-caroll-chief-editor.jpg
Walter Gordon	      Office Manager	           walter-gordon-office-manager.jpg
Angela Lopez	      Social Media Manager	       angela-lopez-social-media-manager.jpg
Scott Estrada	      Developer	                   scott-estrada-developer.jpg
Barbara Ramos	      Graphic Designer	           barbara-ramos-graphic-designer.jpg */

const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        pic: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg'
    }
]

for (let key in ourTeam){
    console.log(key);
    console.log(ourTeam[key]);
}

for (let i=0; i < 6 ;i++){
    document.getElementById("container").innerHTML += "name: " + ourTeam[i].name + "role: "+ ourTeam[i].age +"pic:" + ourTeam[i].pic; 
}