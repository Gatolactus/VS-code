powersOfTwo(1);

function powersOfTwo(n:number):number[]{
  const newAr = [];

  for (let i=0; i <= n; i++) {
  newAr.push(Math.pow(2,2));
}

  console.log(newAr);
  return newAr;
}