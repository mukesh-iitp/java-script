// export let obj = { pname: 'Mobile', price: 10 };
let obj = { pname: 'Mobile', price: 10 };

let a = 20;
let b = 30;

// export function add(i, j) {
function add(i, j) {
    return i + j;
}


export { obj, add };
// export {a};
export default a;