let person = {
  name: "John",
  age: 25,
  married: true,
};
person.friends = ["alice", "bob"];
for (let i = 0; i < person.friends.length; i++) {
  console.log(person.friends[i]);
}
// console.log(typeof person);
// console.log(person);

person.age = 26;
person.email = "john@test.com";

// 2a. As you learned in class, JavaScript Object Notation (JSON) uses "key: value"
// pairs to store data. Convert the below table
// into JSON format and store it in a JS variable called people. Your JSON should be precise. complete. and efficient. (2 points)
let people = [
  { id: 1, name: "John", major: "CS" },
  { id: null, name: null, major: null },
];

console.log(people);

let Sarah = {
  id: 4,
  name: "Sarah",
  major: "IS",
};

people.push(Sarah);
console.log(people);
// 2b. Sarah is a new student. She is an IS major and will be assigned the id 4. Store Sarah's information in your JSON object without hard
// I coding the data. In essence, you will through a built-in JS function add Sarah without manually changing the people variable. (3 points)

// -----
let john = {
  name: "john",
  married: false,
  friends: ["alice", "jack"],
  books: [
    {
      title: "aaa",
      isbn: "234",
    },
    {
      title: "bbb",
      isbn: "123",
    },
  ],
};
