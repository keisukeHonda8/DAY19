"use strict";
// 1行目に記載している 'use strict' は削除しないでください

// TEST-code
// test(sumArray([1, 2, 3, 4]),10);

// JSON-block
/**
 * @param {Array<number>} arrNums 数値型の要素を持つ配列
 * @returns {number} sumResalt 与えられた配列のすべての数字の合計
 * 関数sumArrayは数値型の要素を持つ配列を1個取り、
 *                          与えられた配列のすべての数字の合計を数値型データで返す
 */

// テスト用関数
// function test(actual, expected) {
//   if (_.isEqual(actual, expected)) {
//     console.log("Yay! Test PASSED.");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.log("-----------------------------");
//   } else {
//     console.error("Test FAILED. Keep trying");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.log("-----------------------------");
//   }
// }

/* from here */
/*1. コードを追加して、テストをパスしましょう。 */
/**
 * @param　{Array<number>} arrayNums 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の５以下の要素の２乗
 * @signature 関数doTheThing は引数に数値型の配列をとり、５以下　の要素をそれぞれ　２乗　した配列を返す
 */
function doTheThing(arrayNums) {
  let result = 1;
  for (const Nums of arrayNums) {
    if (Nums < 6) {
      result = result ** 2;
    }
  }
  return result.push;
  // return arrayNums.map(function());
}

function smallThanSix(element) {
  return element < 6;
}

function multipleByTwo(element) {
  return element * element;
}

test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

/* 2. コードを追加して、テストをパスしましょう。*/
// ここにコードを書きましょう

test(getItemsInRefrigerator(), []);

putItemInRefrigerator("milk");
test(getItemsInRefrigerator(), ["milk"]);

putItemInRefrigerator("juice");
test(getItemsInRefrigerator(), ["milk", "juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);
