// Masyvas tai duomenų kolekcija panašaus tipo reikšmėms laikyti.
// Masyvo elementai yra numeruojami nuo 0, pvz.:
let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
// indeksai:    0  1  2   3  4  5  6  7  8  9
let nouns = [
  "apple",
  "sister",
  "hammer",
  "sun",
  "table",
  "sky",
  "lake",
  "number",
  "John",
  "favorite",
];
// indeksai:    0       1         2        3       4        5       6
let helpers = ["in", "with", "on", "my", "is", "a", "the", " ", "from"];
// indeksai:    0       1     2      3     4    5     6     7
let verbs = ["picking", "working", "traveling"];
// ---- ---- ---- MASYVO REIKŠMIŲ NAUDOJIMAS
// Masyvo reikšmės yra pasiekiamas naudojant atitinkamą indeksą:
// console.log(numbers[3]); // 78
// console.log(nouns[2]); // hammer
// console.log(helpers[0]); // in
// Masyvo reikšmes galime nustatyti tokiu būdu:
// nouns[2] = "saw"; // reikšmė 'hammer' pasikeitė į 'saw'
numbers[3] += 6; // Prie esamos reikšmės indeksu 3 pridedama dar 6. 78 + 6 = 84;

// !!! Rašant SUDĖTINGUS algoritmus, masyvo indeksai gali būti skaičiuojami !!!
// Pvz.:
// arr.length - masyve esančių elementų skaičius
//  Jeigu masyve yra 6 elementai, o elementai yra numeruojami nuo 0,
// tuomet paskutinio elemento indeksas visada bus vienu mažesnis nei masyvo elementų skaičius. Iš to seka, kad:
numbers[numbers.length - 2]; // Prieš paskutinis masyvo elementas:
numbers[Math.floor(numbers.length / 2)]; // Vidurinis masyvo elementas elementas
let i = 3,
  j = 4;
numbers[(i % 2) + j++]; // Sudėtinė indekso skaičiavimo logika.

// Užduotis: Sudarykite šiuos sakinius ir išsaugokite kitamuosiuose:
//    sentence1, sentence2, ... , sentenceN;  N - natūralieji skaičiai.
// 1. my sister is in the lake
let sentence1 =
  helpers[3] +
  helpers[7] +
  nouns[1] +
  helpers[7] +
  helpers[4] +
  helpers[7] +
  helpers[0] +
  helpers[7] +
  helpers[6] +
  helpers[7] +
  nouns[6];
//                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'
console.log(sentence1);
// 2. hammer is on the table
// 3. sun is in the sky
// 4. apple is with my sister
// 5. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.

// 2 uzduotis
const sentence2 =
  nouns[2] +
  helpers[7] +
  helpers[4] +
  helpers[7] +
  helpers[2] +
  helpers[7] +
  helpers[6] +
  helpers[7] +
  nouns[4];
console.log(sentence2);

// 3 uzduotis
const sentence3 =
  nouns[3] +
  helpers[7] +
  helpers[4] +
  helpers[7] +
  helpers[0] +
  helpers[7] +
  helpers[6] +
  helpers[7] +
  nouns[5];
console.log(sentence3);

// 4 uzduotis
const sentence4 =
  nouns[0] +
  helpers[7] +
  helpers[4] +
  helpers[7] +
  helpers[1] +
  helpers[7] +
  helpers[3] +
  helpers[7] +
  nouns[1];
console.log(sentence4);

// 5 uzduotis
// 1
const sentence5 =
  nouns[nouns.length - 2] +
  helpers[7] +
  helpers[4] +
  helpers[7] +
  verbs[1] +
  helpers[7] +
  helpers[1] +
  helpers[7] +
  helpers[3] +
  helpers[7] +
  nouns[1];
console.log(sentence5);

// 5 uzduotis
// 2
const sentence6 =
  numbers[1] +
  helpers[7] +
  helpers[4] +
  helpers[7] +
  helpers[3] +
  helpers[7] +
  nouns[nouns.length - 1] +
  helpers[7] +
  nouns[7];
console.log(sentence6);

// 5 uzduotis
// 3
const sentence7 =
  nouns[nouns.length - 2] +
  helpers[7] +
  helpers[4] +
  helpers[7] +
  verbs[0] +
  helpers[7] +
  nouns[0] +
  helpers[7] +
  helpers[helpers.length - 1] +
  helpers[7] +
  helpers[6] +
  helpers[7] +
  nouns[4];
console.log(sentence7);
