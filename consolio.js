let my_name = 'evan'
let my_hobbies = ['roads', 'walk', 'west']

const greeting = `hi there, my name is ${my_name}`;
const hobbies_list = `my hobbies are ${
    my_hobbies.reduce((accum, hobby) => {return accum + ', ' + hobby})
  }`
const some_markdown = `*first*
      __second__
    ~~third~~`;
const end = 'thank you for visiting my portfolio';

function draw_portfolio() {
  console.md(greeting);
  console.md(hobbies_list);
  console.md(some_markdown);
  console.md(end)
}

draw_portfolio()



//  learningful unexpected behavior
// console.log(`my hobbies are ${my_hobbies.map(
//       (hobby) => {console.log(hobby + ', ')}
//     )}`);
//  or with reduce