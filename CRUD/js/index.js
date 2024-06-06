/*------------------------------------------- */
// 1- Write a program that allow to user enter number then print it

// var num = +window.prompt("enter a number");
// console.log(`entered number is: ${num}`);

/*------------------------------------------- */

/*------------------------------------------- */
/* 2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no */

// var num = +window.prompt("enter a number to check if it can be divided by 3 & 4 or not");

// if (num % 3 === 0 && num % 4 === 0) {
//     console.log("yes");
// } else {
//     console.log("No");
// }

/*------------------------------------------- */

/*------------------------------------------- */
// 3- Write a program that allows the user to insert 2 integers then print the max

// var num1 = +window.prompt("enter a number1")
// var num2 = +window.prompt("enter a number2")

// var max;
// if (num1 > num2) {
//     max = num1;
// } else {
//     max = num2;
// }
// console.log(`the max number is: ${max}`);

/*------------------------------------------- */

/*------------------------------------------- */
/* 4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.*/

// var num = +window.prompt("enter a number to check it positive or negative:");
// if (num > 0) {
//     console.log(`Number ${num} is positive`);
// } else if (num < 0) {
//     console.log(`Number ${num} is negative`);
// } else {
//     console.log(`You entered a 000`)
// }

/*------------------------------------------- */

/*------------------------------------------- */
/* 5- Write a program that take 3 integers from user then print the max element
and the min element. */

// var num1 = +window.prompt("enter 1st number");
// var num2 = +window.prompt("enter 2nd number");
// var num3 = +window.prompt("enter 3rd number");

// var max;
// if (num1 >= num2 && num1 >= num3) {
//     max = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//     max = num2;
// } else {
//     max = num3;
// }

// var min;
// if (num1 <= num2 && num1 <= num3) {
//     min = num1;
// } else if (num2 <= num1 && num2 <= num3) {
//     min = num2;
// } else {
//     min = num3;
// }
// console.log(`the max number is: ${max}`);
// console.log(`the min number is: ${min}`);

/*------------------------------------------- */

/*------------------------------------------- */
/* 6- Write a program that allows the user to insert integer number then
check If a number is even or odd */

// var num = +window.prompt("enter a number to check it if it's Even or Odd:");

// if (num % 2 === 0) {
//     console.log(`Number ${num} is even `);
// } else {
//     console.log(`Number ${num} is odd `);
// }

/*------------------------------------------- */

/*------------------------------------------- */
/* 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant */

// var char = window.prompt("enter a character : ");

// function isVowel(pram) {
//     if (pram === "a" || pram === "e" || pram === "l" || pram === "o" || pram === "u") {
//         console.log("vowel");
//     } else {
//         console.log("consonant");
//     }
// }

// isVowel(char);

/*------------------------------------------- */

/*------------------------------------------- */
/* 8- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
that’s number */

// var userNum = +window.prompt("enter a number ");

// for (var i = 0; i <= userNum; i++) {
//     console.log(i);5
// }

/*------------------------------------------- */

/*------------------------------------------- */
/* 9- Write a program that allows userto insert integerthen print a multiplication table up to 12.*/

// var num = +window.prompt("enter a number :");

// function multiplication(number) {
//     for (var i = 1; i <= 12; i++) {
//         console.log(number * i);
//     }
// }
// var number = num;
// multiplication(number);
/*------------------------------------------- */

/*------------------------------------------- */
/* 10- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
between 1 to this number*/

// var num = +window.prompt("enter a number");

// for (var i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

/*------------------------------------------- */

/*------------------------------------------- */
/* 11- Write a program that take two integers then print the power*/

// var num1 = +window.prompt("enter a number1");
// var num2 = +window.prompt("enter a number2");

// function printPower(num1, num2) {
//     return num1 ** num2;
// }

// var res = printPower(num1, num2);

// console.log(res);

/*------------------------------------------- */

/*------------------------------------------- */
/* 12- Write a program to enter marks of five subjects and calculate total, average and
percentage.*/

// var subj1 = +window.prompt("enter mark for subject 1");
// var subj2 = +window.prompt("enter mark for subject 2");
// var subj3 = +window.prompt("enter mark for subject 3");
// var subj4 = +window.prompt("enter mark for subject 4");
// var subj5 = +window.prompt("enter mark for subject 5");

// function calcResult(sub1, sub2, sub3, sub4, sub5) {
//     var total = sub1 + sub2 + sub3 + sub4 + sub5;

//     var avrg = total / 5;

//     var percnt = (total / 500) * 100;

//     console.log(`Total Marks: ${total}`);
//     console.log(`average Marks: ${avrg}`);
//     console.log(`percentage : ${percnt}%`);
// }

// calcResult(subj1, subj2, subj3, subj4, subj5);

/*------------------------------------------- */

/*------------------------------------------- */
/* 13- Write a program to input month number and print number of days in that
month. */

// var monthNum = +window.prompt("enter a month number from 1 to 12");

// function getMonthDays(month) {
//     var days;
//     if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {

//         console.log(`Days in Month: 31`);
//     } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//         console.log(`Days in Month: 30`);
//     } else if (month === 2) {
//         console.log(`Days in Month: 28`);
//     } else {
//         console.log("Invalid Month number")
//     }
//     return days;
// }

// getMonthDays(monthNum);

/*------------------------------------------- */

/*------------------------------------------- */
/* 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer,
  Find percentage and grade*/

// var physics = +window.prompt("enter mark for physics");
// var Chemistry = +window.prompt("enter mark for Chemistry");
// var Bio = +window.prompt("enter mark for Bio");
// var math = +window.prompt("enter mark for math");
// var Computer = +window.prompt("enter mark for Computer");

// function calcResult(sub1, sub2, sub3, sub4, sub5) {
//     var total = sub1 + sub2 + sub3 + sub4 + sub5;
//     var percnt = (total / 500) * 100;

//     console.log(`percentage : ${percnt}%`);
//     if (percnt >= 90) {
//         console.log("Grad A");
//     } else if (percnt >= 80) {
//         console.log("Grad B");
//     } else if (percnt >= 70) {
//         console.log("Grad C");
//     } else if (percnt >= 60) {
//         console.log("Grad D");
//     } else if (percnt >= 40) {
//         console.log("Grad E");
//     } else {
//         console.log("Grad F");
//     }
// }

// calcResult(physics, Chemistry, Bio, math, Computer);

/*------------------------------------------- */

/*-------------------Using Switch Case--------------------- */

/*------------------------------------------- */
/* 15- Write a program to print total number of days in month*/

// var monthNum = +window.prompt("enter a month number from 1 to 12");

// var days;
// switch (monthNum) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         days = 31;
//         console.log(`Days in month: ${days}`);
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         days = 30;
//         console.log(`Days in month: ${days}`);
//         break;
//     case 2:
//         days = 28;
//         console.log(`Days in month: ${days}`);
//         break;
//     default:
//         console.log(`Invalid Month Number`);
//         break;
// }

/*------------------------------------------- */

/*------------------------------------------- */
/* 16- Write a program to check whether an alphabet is vowel or consonant*/

// var char = window.prompt("enter a character : ");

// switch (char) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log(`${char} is a vowel`);
//         break;
//     default:
//         console.log(`${char} is a consonant`);
//         break;
// }
/*------------------------------------------- */

/*------------------------------------------- */
/* 17- Write a program to find maximum between two numbers*/

// var num1 = +window.prompt("enter a number1");
// var num2 = +window.prompt("enter a number2");

// function getMaxNum(num1, num2) {
//     var max;

//     if (num1 > num2) {
//         comparison = "higher";
//     } else if (num1 < num2) {
//         comparison = "less";
//     } else {
//         comparison = "equal";
//     }
//     switch (comparison) {
//         case "higher":
//             console.log(`Max num is ${num1}`);
//             break;
//         case "less":
//             console.log(`Max num is ${num2}`);
//             break;
//         default:
//             console.log("numbers are equal");
//             break;
//     }
//     return max;
// }
// getMaxNum(num1, num2);
/*------------------------------------------- */

/*------------------------------------------- */
/* 18- Write a program to check whether a number is even or odd*/

// var num = +window.prompt("enter a number");

// function checkEvenOrOdd(number) {
//     var cond = number % 2 === 0
//     switch (cond) {
//         case true:
//             console.log(`${number} is Even`)
//             break;
//         case false:
//             console.log(`${number} is Odd`)
//             break;
//         default:
//             console.log("Invalid input")
//             break;
//     }
// }

// checkEvenOrOdd(num);

/*------------------------------------------- */

/*------------------------------------------- */
/* 19- Write a program to check whether a number is positive or negative or zero*/

// var num = +window.prompt("enter a number");

// if (num > 0) {
//     comparison = "positive";
// } else if (num < 0) {
//     comparison = "negative";
// } else {
//     comparison = "equal";
// }
// switch (comparison) {
//     case "positive":
//         console.log(`number ${num} is positive`);
//         break;
//     case "negative":
//         console.log(`number ${num} is negative`);
//         break;
//     case "equal":
//         console.log(`number ${num} is zero`);
//         break;
//     default:
//         console.log("Invalid Input");
//         break;
// }

/*------------------------------------------- */

/*------------------------------------------- */
/* 20- Write a program to create Simple Calculator */

// var num1 = +window.prompt("enter a number1 ");
// var operator = window.prompt("enter a operator (+ , - , * , / ) : ");
// var num2 = +window.prompt("enter a number2 ");

// var res;

// switch (operator) {
//     case "+":
//         res = num1 + num2;
//         break;
//     case "-":
//         res = num1 - num2;
//         break;
//     case "*":
//         res = num1 * num2;
//         break;
//     case "/":
//         if (num2 !== 0) {
//             res = num1 / num2;
//         } else {
//             res = "Error Division by 0 not allowed"
//         }
//         break;

//     default:
//         res = "Error: Invalid operator.";
//         break;
// }

// console.log(`Result: ${res}`);
/*------------------------------------------- */

// var instractors = [
//   {
//     fName: "sahar",
//     lName: "kassem",
//     age: 30,
//     isOnline: true,
//     isOffline: false,
//     courseName: ["Angular", "React"]
//   },
//   {
//     fName: "ahmed",
//     lName: "essam",
//     age: 23,
//     isOnline: true,
//     isOffline: false,
//     courseName: ["JS", "Vue"]
//   },
//   {
//     fName: "Ali",
//     lName: "kassem",
//     age: 29,
//     isOnline: true,
//     isOffline: false,
//     courseName: ["NodeJs", "React"]
//   },
//   {
//     fName: "Mohamed",
//     lName: "Hashim",
//     age: 35,
//     isOnline: true,
//     isOffline: false,
//     courseName: ["Php", "Laravel"]
//   }
// ]

// for (let i = 0; i < instructors.length; i++) {
//   console.log(instructors[i].courseName);

// }

/*===================================================================*/

const productTitleInput = document.getElementById("productTitle");
const productPriceInput = document.getElementById("productPrice");
const productCategoryInput = document.getElementById("productCategory");
const productImageInput = document.getElementById("productImage");
const productDescriptionInput = document.getElementById("productDescription");
const productSearchInput = document.getElementById("productSearch");

const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");

const productLocalKey = "allProducts";
let productList = [];
let updatedIndex;

if (JSON.parse(localStorage.getItem(productLocalKey))) {
  productList = JSON.parse(localStorage.getItem(productLocalKey));
  displayProduct(productList);
}

function addToLocalStorage() {
  localStorage.setItem(productLocalKey, JSON.stringify(productList));
}



function addProduct() {
  if (
    validateProductInput(productTitleInput) &&
    validateProductInput(productPriceInput) &&
    validateProductInput(productCategoryInput) &&
    validateProductInput(productDescriptionInput)
  ) {
    const product = {
      title: productTitleInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      image: `../images/${productImageInput.files[0]?.name}`,
      desc: productDescriptionInput.value,
    };
    productList.push(product);
    addToLocalStorage();

    displayProduct(productList);
    fillFormValues();
    clearForm();
  }
}

function clearForm() {
  productTitleInput.value = '';
  productPriceInput.value = '';
  productCategoryInput.value = '';
  productImageInput.value = '';
  productDescriptionInput.value = '';
}


function fillFormValues(product) {
  productTitleInput.value = product ? product.title : '';
  productPriceInput.value = product ? product.price : '';
  productCategoryInput.value = product ? product.category : '';
  productImageInput.value = product && product.image ? product.image : ''; // استخدم productImageInput.src بدلاً من productImageInput.value
  productDescriptionInput.value = product ? product.desc : '';
}

function displayProduct(arr, keyword = "") {

  const productsRow = document.getElementById("productsRow");

  productsRow.innerHTML = arr.map((product, i) => {
    const highlightedTitle = keyword
      ? product.title.replace(new RegExp(`(${keyword})`, "gi"), `<span class="text-danger">$1</span>`)
      : product.title;

    return `
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="product bg-light rounded-3 p-3">
          <img src="${product.image}" class="img-fluid mb-3" alt="Product Image">
          <h3>${highlightedTitle}</h3>
          <div class="d-flex justify-content-between py-4">
            <span>${product.category}</span>
            <span>${product.price}</span>
          </div>
          <p>${product.desc}</p>
          <div class="d-flex justify-content-between p-3">
            <button class="btn btn-outline-success" onclick="editProduct(${i}, ${product.originalIndex !== undefined ? product.originalIndex : i})">Edit</button>
            <button class="btn btn-outline-danger" onclick="deleteProduct(${product.originalIndex !== undefined ? product.originalIndex : i})">Delete</button>
          </div>
        </div>
      </div>`;
  }).join('');
}


function editProduct(displayIndex, originalIndex) {
  addBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");

  updatedIndex = originalIndex;
  const editedProduct = productList[originalIndex];

  productDescriptionInput.value = editedProduct.desc;

  fillFormValues(editedProduct);
}

function updateProduct() {
  addBtn.classList.remove("d-none");
  updateBtn.classList.add("d-none");

  const updatedProduct = {
    title: productTitleInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    image: productImageInput.files[0] ? URL.createObjectURL(productImageInput.files[0]) : productList[updatedIndex].image,
    desc: productDescriptionInput.value,
  };
  if (!productImageInput.files[0]) {
    updatedProduct.image = productList[updatedIndex].image;
  }

  productList[updatedIndex] = updatedProduct;
  addToLocalStorage();
  displayProduct(productList);
  clearForm();

  console.log(productImageInput.value);
}

function deleteProduct(deletedIndex) {
  productList.splice(deletedIndex, 1);
  addToLocalStorage();
  displayProduct(productList);
}


function searchProduct() {
  const keyword = productSearchInput.value.toLowerCase();
  const matchedItems = productList.map((product, index) => {
    if (product.title.toLowerCase().includes(keyword)) {
      return { ...product, originalIndex: index };
    }
    return null;
  }).filter(product => product !== null);

  displayProduct(matchedItems, keyword);
}




function validateProductInput(ele) {
  var regex = {
    productTitle: /^[A-Z][a-z]{2,10}$/,
    productPrice: /^([1-9][0-9]{2,5}|99){1,1}$/,
    productCategory: /^(Tv|Mobile|PC|Laptop|Console)$/,
    productDescription: /^\w{5,250}$/,
  };

  var isValid = regex[ele.id].test(ele.value);
  if (isValid) {
    if (ele.classList.contains("is-valid")) {
      ele.classList.replace("is-invalid", "is-valid");
    } else {
      ele.classList.add("is-valid");
    }
    ele.nextElementSibling.classList.replace("d-block", "d-none");
  } else {
    if (ele.classList.contains("is-invalid")) {
      ele.classList.replace("is-valid", "is-invalid");
    } else {
      ele.classList.add("is-invalid");
    }
    ele.nextElementSibling.classList.replace("d-none", "d-block");
  }
  return isValid;
}

productSearchInput.addEventListener('input', searchProduct);

// searchProduct("w")

/*==============================================*/

// var bullets = document.querySelectorAll(".bullets img");
// var mainImg = document.querySelector(" .main-img");

// for (var i = 0; i < bullets.length; i++) {
//   bullets[i].addEventListener('click', function (e) {
//     mainImg.setAttribute("src", e.target.getAttribute("src"));
//   })
// }



// matchedItem = [];
// var keyword = productSearchInput.value;

// for (var i = 0; i < productList.length; i++) {
//   if (productList[i].title.toLowerCase().includes(keyword.toLowerCase())) {
//     productList[i].newTitle = productList[i].title
//       .toLowerCase()
//       .replace(keyword, `<span class ='text-danger'>${keyword}</span>`);
//     matchedItem.push(productList[i]);
//     displayProduct(matchedItem);
//   }
// }