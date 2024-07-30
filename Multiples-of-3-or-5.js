// https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-1-multiples-of-3-or-5

function multiplesOf3Or5(number) {

    let sum=0;

    for(let i=0; i<number; i++){
        if(i % 3 == 0 || i % 5 == 0){

            sum = sum + i;
        }
    }

    return sum;
  }
  
console.log(multiplesOf3Or5(1000)); s