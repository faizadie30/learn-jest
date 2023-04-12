//point a
// function findMin(a, b, c) {
//   if (a < b && a < c) {
//     return a;
//   } else if (b < a && b < c) {
//     return b;
//   } else {
//     return c;
//   }
// }

//point b
// function findMin(a, b, c) {
//   let minValue = a;

//   if (a < b) {
//     minValue = a;
//   } else {
//     minValue = b;
//   }
//   if (c < minValue) {
//     minValue = c;
//   }

//   return minValue;
// }

// point c
// function findMin(a, b, c) {
//   if (a < b) {
//     if (a < c) {
//       return a;
//     } else {
//       return c;
//     }
//   } else if (b < a) {
//     if (b < c) {
//       return b;
//     } else {
//       return c;
//     }
//   } else {
//     return c;
//   }
// }

//point d error conditional
function findMin(a, b, c) {
  let minValue = 0;

  if (a < b) {
    minValue = a;
  } else if (b < c) {
    minValue = b;
  } else {
    minValue = c;
  }

  return minValue;
}

module.exports = {
  findMin,
};
