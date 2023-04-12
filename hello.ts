function powersOfTwo(n: number): number[] {
    let acc: number[] = [];
  
    for (let i = 0; i <= n; i++) {
      acc.push(Math.pow(2, i));
    }
    console.log(acc)
    return acc;
  }