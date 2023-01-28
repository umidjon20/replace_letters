// First way

let str = 'Lorem ipsum, dolor sit amet consectetir adipisicing elit.'

function checkstring(str){
   let res = str.replace(/[i]/gi,'*')
   let res2 = res.replace(/[o]/gi,'*')
   let res3 = res2.replace(/[e]/gi,'*')
   let res4 = res3.replace(/[a]/gi,'*')
    console.log(res4)
}

checkstring(str)


// L*r*m *psum, d*l*r s*t *m*t c*ns*ct*t*r *d*p*s*c*ng *l*t.

// Second way

function replaceLetters(str){
     let a = str.replace(/i|o|e|a/gi, '*')
     console.log(a)
}

replaceLetters(str)

// L*r*m *psum, d*l*r s*t *m*t c*ns*ct*t*r *d*p*s*c*ng *l*t.




















// let str = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
// let res = ' * '
// function checkstring(str){
//     for(let i = 0; i < str.length; i++){
//         if(!str[i].includes('i')){
//             res += str[i].replace(str,'*')
//         }
//     }
//     console.log(res)
// }
// checkstring(str)











// let b = str.replace(/[i]/gi,'*')
// console.log(b)
// let res
// let res2