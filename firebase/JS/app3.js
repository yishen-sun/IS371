let nums = [10, -5, 15, 25];
nums.forEach((num) => {
  console.log(num);
})
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
function printArr(value, index, array) {
  //console.log(`${value} is loaced at index ${index}`);
}
// use forEach, call back function, pass three paras
nums.forEach(printArr);

nums.forEach((value, index) => {
  //console.log(`${value} is loaced at index ${index}`);
});

// find the sum of
let total = 0;
nums.forEach((val, index) => {
  total += val;
});
//console.log(`total is ${total}`);

// nums.indexOf()

//-  ------
let person = {
  name: "john",
  age: 25,
  married: false,
  friends: ["alice", "jackie", "sally", "peter"],
  books_read: [
    {
      title: "title1",
      ISBN: 1111,
      pages: 2000,
    },
    {
      title: "title2",
      ISBN: 2222,
      pages: 300,
    },
    {
      title: "title3",
      ISBN: 3333,
      pages: 500,
    },
  ],
};

console.log(`${person.name} has ${person.friends.length} friends`);

person.friends.forEach((name) => {
  console.log(name);
});
let total_pages = 0;
person.books_read.forEach((obj) => {
  total_pages += obj.pages;
});
console.log(total_pages);

// create sarah
let sarah = {
  name: "sarah",
  age: 25,
  loaction: "WI",
  parents: ["Robert", "Mary"],
};

person.wife = sarah;
person.married = true;
console.log(person);
