let marks = [800,100,20,40,60];
let highestMarks = marks[0];

for( i=1; i<marks.length; i++){
    highestMarks = marks[i]>highestMarks?marks[i]:highestMarks;
}
console.log("HighestMarksStudent="+highestMarks);