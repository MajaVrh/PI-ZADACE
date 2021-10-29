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

let provjera=(lista,pojam, status) => {for(let i=0; i <lista.length; i++)
                                     {
                                       if(lista[i].upisan==status){
                                            if( lista[i].ime.includes(pojam) || lista[i].prezime.includes(pojam) ) return true;
                                            }
                                    }
                                      return false;
                              }

console.log(provjera(studenti, 'Eva',true));
console.log(provjera(studenti, 'Vivoda', true));