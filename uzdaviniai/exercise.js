console.clear();
const skaicius = 256;
const daliklis = 10;
const liekana3 = skaicius % daliklis;
console.log(liekana3);

const sveikaDalis = (skaicius-liekana3) / daliklis;
console.log(sveikaDalis);
console.log(sveikaDalis * daliklis + liekana3);



function greet() {
    return "hello world!";
  }

function kvdt(x) {
    return x ** 2;
}
console.log(kvdt(3));

function getMax2() { 
    return  {
      name: 'Max Headroom'
    }
  }
console.log(getMax2());

function areYouPlayingBanjo(name) {
    if (name[0] === 'R' || name[0] === 'r') {
      return `${name} plays banjo`;    
    }  else {
      return `${name} does not plays banjo`;    
    }
  }
  console.log(areYouPlayingBanjo('Rokas'));
  console.log(areYouPlayingBanjo('Jonas'));