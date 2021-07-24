let salom ="O`zbekistonning 2021-yildagi qarzi jaqmi $25 mlrd ga yetdi "
let a=salom.split()
console.log(a);
let sum=0
for(let i=0; i<salom.length; i++) {
    let x=salom[i]
    let y= typeof x;
    console.log(y)
    if((typeof x)==='number'){
        sum+=x
    }
}

// console.log(sum);