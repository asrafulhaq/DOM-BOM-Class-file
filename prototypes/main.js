function Result(student, marks) {
  this.name = student.name;
  this.roll = student.roll;

  this.ban = marks.ban;
  this.eng = marks.eng;
  this.math = marks.math;
  this.s = marks.s;
  this.ss = marks.ss;
  this.reli = marks.reli;

  this.getGpa = function (sub) {
    let gpa;
    let grade;

    if (this[sub] >= 0 && this[sub] < 33) {
      gpa = 0;
      grade = "F";
    } else if (this[sub] >= 33 && this[sub] < 40) {
      gpa = 1;
      grade = "D";
    } else if (this[sub] >= 40 && this[sub] < 50) {
      gpa = 2;
      grade = "C";
    } else if (this[sub] >= 50 && this[sub] < 60) {
      gpa = 3;
      grade = "B";
    } else if (this[sub] >= 60 && this[sub] < 70) {
      gpa = 3.5;
      grade = "A-";
    } else if (this[sub] >= 70 && this[sub] < 80) {
      gpa = 4;
      grade = "A";
    } else if (this[sub] >= 80 && this[sub] <= 100) {
      gpa = 5;
      grade = "A+";
    }

    return {
      gpa: gpa,
      grade: grade,
    };
  };

  this.cgpa = function () {
    if (
      this.ban >= 33 &&
      this.eng >= 33 &&
      this.math >= 33 &&
      this.s >= 33 &&
      this.ss >= 33 &&
      this.reli >= 33
    ) {
      const totalGpa =
        this.getGpa("ban").gpa +
        this.getGpa("eng").gpa +
        this.getGpa("math").gpa +
        this.getGpa("s").gpa +
        this.getGpa("ss").gpa +
        this.getGpa("reli").gpa;

      const cgpa = totalGpa / 6;

      return cgpa.toFixed(2);
    } else {
      return 0;
    }
  };

  this.finalGrade = function () {
    if (
      this.ban >= 33 &&
      this.eng >= 33 &&
      this.math >= 33 &&
      this.s >= 33 &&
      this.ss >= 33 &&
      this.reli >= 33
    ) {
      if (this.cgpa() >= 0 && this.cgpa() < 1) return "F";
      if (this.cgpa() >= 1 && this.cgpa() < 2) return "D";
      if (this.cgpa() >= 2 && this.cgpa() < 3) return "C";
      if (this.cgpa() >= 3 && this.cgpa() < 3.5) return "B";
      if (this.cgpa() >= 3.5 && this.cgpa() < 4) return "A-";
      if (this.cgpa() >= 4 && this.cgpa() < 5) return "A";
      if (this.cgpa() >= 5) return "A+";
    } else {
      return "F";
    }
  };

  this.finalResult = function () {
    if (
      this.ban >= 33 &&
      this.eng >= 33 &&
      this.math >= 33 &&
      this.s >= 33 &&
      this.ss >= 33 &&
      this.reli >= 33
    ) {
      return "Passed";
    } else {
      return "Failed";
    }
  };
}

const student1 = new Result(
  { name: "Ripon", roll: 1 },
  { ban: 88, eng: 55, math: 16, s: 77, ss: 88, reli: 99 }
);

const student2 = new Result(
  { name: "Asik", roll: 2 },
  { ban: 65, eng: 78, math: 95, s: 40, ss: 33, reli: 60 }
);

console.log(student2.finalGrade());
