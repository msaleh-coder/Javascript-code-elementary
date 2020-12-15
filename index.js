
var name = "alamin hossain";
var age ="25";
var cgpa ="5.00";
var lang =["bangla", "english", "hindi"];


// console.log(age);



var student1 = {
    name : "alamin hossain",
    age  : 35,
    cgpa : 5.00,
    lang : ["bangal","english","hindi",]
}

var student2 = {
    name : "kamal uddin",
    age  : 25,
    cgpa : 2.00,
    lang : ["bangal","english","hindi",]
}

var student3 = {
    name : "hasan jamil",
    age  : 26,
    cgpa : 3.00,
    lang : ["bangal","english","hindi",]
}
console.log(studen2.cgpa);


function Student(name,age,cgpa,lang);
   this.name = name;
   this.age = age;
   this.cgpa = cgpa;
   this. lang= ["bangla","hindi","asmia",]


   var studen1 = new Student("alamin hossin", 31,4.00,["bangal","english","hindi",]);
   var studen1 = new Student("jamal hossin", 35,3.00,["bangal","english","hindi",]);
   var studen1 = new Student("kamal hossin", 25,3.22,["bangal","english","hindi",]);
   var studen1 = new Student("jahangir alalm", 30,2.00,["bangal","english","hindi",]);



   this.display = function (){
       console.log(this.name);
       console.log(this.age);
       console.log(this.cgpa);
       console.log(this.lang);

   }

  student1.display();
  
