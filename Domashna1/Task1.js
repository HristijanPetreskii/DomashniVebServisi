const studentsData = [
    {
    ime: "John",
    fakultet: "FINKI",
    prosek: 8.2,
    grad: "Skopje"
    },
    {
    ime: "Jane",
    fakultet: "FIKT",
    prosek: 9.3,
    grad: "Bitola"
    },
    {
    ime: "Mile",
    fakultet: "Goce Delcev",
    prosek: 7.6,
    grad: "Stip"
    },
    {
    ime: "Oliver",
    fakultet: "FIKT",
    prosek: 8.9,
    grad: "Skopje"
    },
    {
    ime: "Timco",
    fakultet: "American College",
    prosek: 9.9,
    grad: "Struga"
    },
    {
    ime: "Trpe",
    fakultet: "FINKI",
    prosek: 10,
    grad: "Ohrid"
    },
    {
    ime: "Marija",
    fakultet: "FINKI",
    prosek: 9.2,
    grad: "Resen"
    },
    {
    ime: "Ana",
    fakultet: "FINKI",
    prosek: 7.2,
    grad: "Skopje"
    },
    {
    ime: "Elena",
    fakultet: "FIKT",
    prosek: 6.0,
    grad: "Bitola"
    },
    ]
    
//    Task 1: Find all students from SKopje and print their names
//    Task 2: Get all students ascending by prosek
//    Task 3: Find best student (one) from FINKI
//    Task 4: Find worst student (one) from Bitola
//    Task 5: Podredete gi gradovite spored nivnite proseci, opagacki

//1
const skAll=studentsData.filter(sk=>sk.grad === "Skopje")
skAll.forEach(el=>{
   console.log(el.ime);
});

//2
const AllStudents=studentsData.sort((a,b)=>a.prosek-b.prosek);
console.log(AllStudents);

//3
const finki=studentsData.filter(student=>student.fakultet === "FINKI");
var max=0;
var index=null;
finki.forEach(student=>{
    if(student.prosek > max){
         max=student.prosek;
        index=student;
         
    }
})
console.log(index);

//4
const worst=studentsData.filter(student=>student.grad === "Bitola");

var min=11;
var indeks=null;
worst.forEach(student=>{
    if(student.prosek < min){
         min=student.prosek;
        indeks=student;
         
    }
})
console.log(indeks);

//5
const AllStudenti=studentsData.sort((a,b)=>b.prosek-a.prosek);
console.log(AllStudenti);