let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

// studentRecords.map((item,index)=>{
//     console.log(`${item}`);
// })
//1-

studentRecords.map((item)=>{
    console.log(item.name.toUpperCase());
})

//2-
studentRecords.map((item)=>{
    if(item.marks>50){
        console.log(item);
    }
})

//3-
let student=studentRecords.filter(item =>
     item.marks>50 && item.id>120);

console.log(student);


//4-
let totalmarks=studentRecords.reduce((total,student)=>
     total+student.marks ,0);
     console.log(totalmarks)

//5-
let names = studentRecords
  .filter(student => student.marks > 50)
  .map(student => student.name);

console.log(names);


//6-
let sumOfMarks = studentRecords
  .filter(student => student.id > 120)
  .reduce((sum, student) => sum + student.marks, 0);

console.log(sumOfMarks);


//7-
let totalMarks = studentRecords
  .map(student => ({
    name: student.name,
    id: student.id,
    marks: student.marks < 50 ? student.marks + 15 : student.marks
  }))
  .filter(student => student.marks > 50)
  .reduce((sum, student) => sum + student.marks, 0);

console.log(totalMarks);


//8-
let student1 = { name: 'shubhi', class: '12th', rollNo: '1001' };
let student2 = { name: 'Nishu', class: '9th', rollNo: '2002' };
let student3 = { name: 'Mayank', class: '5th', rollNo: '3003' };
let student4 = { name: 'Saumya', class: '11th', rollNo: '4004' };
let student5 = { name: 'Deeksha', class: '8th', rollNo: '5005' };
let student6 = { name: 'vipul', class: '10th', rollNo: '6006' };

// Store the objects in an array
let studentofArray = [student1, student2, student3, student4, student5, student6];

console.log(studentofArray);
