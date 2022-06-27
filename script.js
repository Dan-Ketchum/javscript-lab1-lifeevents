const myInformation = {
  myName: "Dan Ketchum",
  age: 32,
  birthday: "November 24th",
  pineapplePizza: true,
  lifeEvents: [
    "I lived in Denver for 6 years.",
    "I have two children.",
    "I have two cats.",
    "I have one dog.",
  ],
};
myInformation.test = [1, 2, 3];

console.log(myInformation);

if (myInformation.pineapplePizza === true) {
  console.log(
    `My name is ${myInformation.myName} and I like pineapples on pizza. I am currently ${myInformation.age} years old and my birthday is on ${myInformation.birthday}`
  );
} else {
  console.log(
    `My name is ${myInformation.myName} and I'm not into pineapples on pizza. I am currently ${myInformation.age} years old and my birthday is on ${myInformation.birthday}`
  );
}
for (let i = 0; i < myInformation.lifeEvents.length; i++)
  console.log(myInformation.lifeEvents[i]);

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber != 5) {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number)`
    );
    break;
  }
}
