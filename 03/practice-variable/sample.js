// // varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)
// //再宣言可能


// // letによる再宣言
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)
// //再宣言不可能


// // constによる再宣言
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)
// //再宣言不可能


// // varによる再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)
// // 再代入可能


// // letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)
// // 再代入可能


// // constによる再代入
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)
// // 再代入不可能


// varのスコープ
// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)
// エラー発生


// letのスコープ
// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()
// エラー発生

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log(i)
// ブロック外からの参照でエラー


// 巻き上げ
// var str = "webcamp"

// function foo() {
//   console.log(str)
//   var str = "dmm webcamp"
//   console.log(str)
// }

// foo()


// 変数宣言の使い分け
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// varは基本使用しない
// letは再代入の必要がある場合使用
// constは再代入の必要がない場合使用