let info = '6Ayyom 45'
let form = /\d+/g;
let add = info.match(form)

sum=0
for(let i=0; i<add.length; i++) {
    sum= sum+parseInt(add[i])
}
console.log(sum);