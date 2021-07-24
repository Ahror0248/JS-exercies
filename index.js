
let salom ="O`zbekistonning 2021-yildagi qarzi jaqmi $25 mlrd ga yetdi "
let dala=/\d+/g;
let abbos=salom.match(dala)

sum=0;

for(i=0;i<abbos.length;i++){

    sum=sum+parseInt(abbos[i]) 

}
console.log(  "matn ichidagi jami raqamlar yig`indis==" ,   sum,    ' ga teng   ');