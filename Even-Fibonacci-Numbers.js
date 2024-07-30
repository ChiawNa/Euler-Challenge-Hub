// https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-2-even-fibonacci-numbers

function fiboEvenSum(n) {

    let a=1;
    let b=2;
    let sum = 0;
  
    while(a<=n){
      if (a%2 == 0){
        sum += a;
      }
  
      let temp = a;
      a=b;
      b=temp+b;
    }
  
    return sum;
  }
  
  console.log(fiboEvenSum(8))