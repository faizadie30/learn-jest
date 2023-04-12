//point a
// function findMax(a, b, c) {
//   if (a > b && b > c) {
//     return a;
//   } else if (b > a && a > c) {
//     return b;
//   } else {
//     return c;
//   }
// }

//point b valid testing
// function findMax(a, b, c) {
//   return Math.max(a, b, c);
// }

//point c
// function findMax(a, b, c) {
//   if (a > b || a > c) {
//     return a;
//   } else if (b > a || b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }

//point d
// function findMax(a, b, c) {
//   if (a < b && a < c) {
//     return a;
//   } else if (b < a && b < c) {
//     return b;
//   } else {
//     return c;
//   }
// }

module.exports = {
  findMax,
};
