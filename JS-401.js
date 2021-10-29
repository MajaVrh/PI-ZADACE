let studenti=[
    {
    ime: 'Janko',
    prezime: 'Marić',
    upisan: false
    },
    
    {
    ime: 'Ana',
    prezime: 'Horvat',
    upisan: true
    },


    {
    ime: 'Ivan',
    prezime: 'Matić',
    upisan: true
    },

    {
    ime: 'Luka',
    prezime: 'Lukić',
    upisan: true
    },

    {
    ime: 'Hana',
    prezime: 'Anić',
    upisan: true
    },

    {
    ime: 'Lea',
    prezime: 'Horvat',
    upisan: false
    },  
    
    {
    ime: 'Saša',
    prezime: 'Kovač',
    upisan: true
    },
    
    {
    ime: 'Ivana',
    prezime: 'Paris',
    upisan: true
    },

    {
    ime: 'Eva',
    prezime: 'Bulić',
    upisan: false
    },

    {
    ime: 'Anton',
    prezime: 'Vivoda',
    upisan: true
    },
]

let provjera=(lista,pojam) => {for(let i=0; i <lista.length; i++)
                                   {
                                     if(lista[i].ime==pojam && lista[i].upisan==true || lista[i].prezime==pojam  && lista[i].upisan==true) return true;
                                    }
                                      return false;
                              }

console.log(provjera(studenti, 'Eva'));
console.log(provjera(studenti, 'Vivoda'));