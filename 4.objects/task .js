function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
        console.log("Student is excluded");
        return;
    }
    if (marks[0] != 0 /*&& this.hasOwnProperty('excluded') == false*/) {
        this.marks.push(...marks);
    } 
}

Student.prototype.getAverage = function () {
  //return this.marks.reduce((acc, mark, index, arr) => acc + mark / arr.length, 0);
  if (!this.marks) {
       return 0;
   } else {
       return this.marks.reduce((acc, mark, index, arr) => acc + mark / arr.length, 0); 
   }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason; 
}
