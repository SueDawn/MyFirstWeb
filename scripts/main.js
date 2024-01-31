// let myHeading = document.querySelector("h1");  // 获取标题的引用
// myHeading.textContent = "Hello, world!" // 把 myHeading 变量的属性 textContent （标题内容）修改为“Hello world!”

// 将 JavaScript 代码放在 HTML 页面的底部附近通常是最好的策略。
// let icecream = "chocolate";
// if (icecream === "chocolate"){
//     alert("My favorite icecream.")
// }

// document.querySelector("html").addEventListener("click", function() {
//     alert("别戳我, 我怕疼。"); });

// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我, 我怕疼。"); });


// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/programmer-woman.jpg") {
    myImage.setAttribute("src", "images/images2.jpg");
  } else {
    myImage.setAttribute("src", "images/programmer-woman.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "mozailla 酷毙了," + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "mozailla 酷毙了," + storedName;
}

myBotton.onclick = function() {
  setUserName();
}