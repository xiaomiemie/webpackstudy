import a from './mianshi2'
function add (a, b) {
    let arra = a.split('').reverse();
    let arrb = b.split('').reverse();
    let len = Math.max(arra.length, arrb.length);
    let newArr = [];
    let flag = 0;
    for (let i = 0; i < len; i++) {
        arra[i] = arra[i] !== undefined ? arra[i] : 0;
        arrb[i] = arrb[i] !== undefined ? arrb[i] : 0;
        let sum = Number(arra[i]) + Number(arrb[i]) + flag;
        if (sum > 10) {
            newArr.push(String(sum - 10));
            flag = 1;
        } else {
            newArr.push(String(sum));
            flag = 0;
        }
    }
    if (flag) {
        newArr.push('1');
    }
    return newArr.reverse().join('');
}
export {add};