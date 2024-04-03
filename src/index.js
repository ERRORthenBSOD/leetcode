// Promise.resolve("foo")
//   .then(() => Promise.resolve("bar"))
//   .then(function (result) {
//     console.log(result);
//   });

// /**
//  * @param {Object|Array} obj
//  * @return {Object|Array}
//  */
// var compactObject = function (obj) {
//   if (Array.isArray(obj)) {
//     return obj.filter(Boolean).map(compactObject);
//   } else {
//     if (Object.keys(obj).length) {
//       for (const key in obj) {
//         if (
//           Array.isArray(obj[key]) ||
//           (obj[key] && typeof obj[key] === "object")
//         ) {
//           obj[key] = compactObject(obj[key]);
//         } else {
//           if (!obj[key]) {
//             delete obj[key];
//           }
//         }
//       }
//     }
//   }
//   return obj;
// };

// console.log(compactObject({ a: null, b: [false, 1] }));
// console.log(compactObject([null, 0, 5, [0], [false, 16]]));
