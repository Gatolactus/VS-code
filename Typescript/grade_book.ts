/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'
*/

function getGrade(a: number, b: number, c: number): string {
    let d: number = (a + b + c) / 3;

    if (d >= 90) return "A";
    if (d >= 80) return "B";
    if (d >= 70) return "C";
    if (d >= 60) return "D";
  
    return "F";
}