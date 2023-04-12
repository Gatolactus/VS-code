/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  classPoints.push(yourPoints); // adding yourPoints to array classPoints
  let array_length = classPoints.length; // elements in array
  let sum1 = classPoints.reduce((a,b) => a+b, 0); //sum array
  return sum1 / array_length <= yourPoints;
}