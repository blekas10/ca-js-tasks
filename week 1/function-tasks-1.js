console.groupCollapsed(
  "1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą."
);
{
  function returnFirstElement(myArray) {
    return myArray[0];
  }

  const numbers = [1, 2, 3];

  const res1 = returnFirstElement(numbers);
  const res2 = returnFirstElement(["a", "b", "c"]);

  console.log(res1, res2);
}
console.groupEnd();

console.groupCollapsed(
  "2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina."
);
{
  function deleteFirstElement(myArray) {
    const firstElement = myArray[0];
    delete myArray[0];

    for (let i = 1; i < myArray.length; i++) {
      myArray[i - 1] = myArray[i];
    }
    myArray.length = myArray.length - 1;

    return firstElement;
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log("numbers before removal", numbers);
  const firstElement = deleteFirstElement(numbers);
  console.log("numbers after removal", numbers);
  console.log("removed element", firstElement);
}
console.groupEnd();

console.groupCollapsed(
  "3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą."
);
{
  function deleteFirstElement(myArray) {
    lastElement = myArray[myArray.length - 1];
    return lastElement;
  }

  const numbers = [1, 2, 3];
  const res1 = deleteFirstElement(numbers);
  console.log("Last element is", res1);
}
console.groupEnd();

console.groupCollapsed(
  "4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina."
);
{
  function deleteLastElement(myArray) {
    const lastElement = myArray[myArray.length - 1];
    delete myArray[myArray.length - 1];

    for (let i = 0; i < myArray.length - 1; i++) {
      myArray[i];
    }
    myArray.length = myArray.length - 1;

    return lastElement;
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log("numbers before removal", numbers);
  const lastElement = deleteLastElement(numbers);
  console.log("numbers after removal", numbers);
  console.log(lastElement);
}
console.groupEnd();

console.groupCollapsed(
  "5. Parašykite funkciją, kuri grąžina elementų kiekį masyve"
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  "6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą"
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  "7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis"
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  "8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis"
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  "9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  "
);
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // ... sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  "10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo."
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  "11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ..."
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  "12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48"
);
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  "13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:"
);
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();
