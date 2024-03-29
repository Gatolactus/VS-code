/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
Examples:

n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

Note that 121 has twice the digit 1.
*/

class G964 {
    public static nbDig(n: number, d: number): number {
      let ar:number[] = [];
      let k:number;
  
      for (k = 0; k <= n; k++){
        ar.push(Array.from(String(k*k)).filter(num => Number(num) === d).length);
      }
  
      return ar.reduce((a:number, b:number):number => a + b);
    }
  }
  
console.log(G964.nbDig(11, 1));