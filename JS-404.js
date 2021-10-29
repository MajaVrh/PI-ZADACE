let studenti = [
  {
    ime: "Marko",
    prezime: "Marković",
    grad: "Pula",
  },
  {
    ime: "Iva",
    prezime: "Ivić",
    grad: "Našice",
  },
  {
    ime: "Lucija",
    prezime: "Lucić",
    grad: "Zagreb",
  },
  {
    ime: "Nikola",
    prezime: "Nikolić",
    grad: "Rijeka",
  },
];

let napredna_pretraga = (lista, pojam) => {
  let razdvojeno = pojam.split(" ");

  for (let i = 0; i < lista.length; i++) {
    let zadovoljava = false;
    for (let j = 0; j < razdvojeno.length; j++) {
      let kombinacija =
        lista[i].ime.toLowerCase() +
        lista[i].prezime.toLowerCase() +
        lista[i].grad.toLowerCase();
      if (
        lista[i].ime.toLowerCase().includes(razdvojeno[j]) ||
        lista[i].prezime.toLowerCase().includes(razdvojeno[j]) ||
        lista[i].grad.toLowerCase().includes(razdvojeno[j]) ||
        kombinacija.includes(razdvojeno[j])
      ) {
        zadovoljava = true;
      } else zadovoljava = false;
    }
    if (zadovoljava) return i;
  }
};

console.assert(napredna_pretraga(studenti, "ma ić") == 0); // → prvi student
console.assert(napredna_pretraga(studenti, "ko lić ri") == 3); // → zadnji student
console.assert(napredna_pretraga(studenti, "ić za") == 2); // → treći student
console.assert(napredna_pretraga(studenti, "ić ko la ri") == 3); // → zadnji student

