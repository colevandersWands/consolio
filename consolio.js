let my_name = 'evan'
let my_hobbies = ['biking', 'teaching', 'going to movies']

function draw_portfolio() {
  console.md(`hi there, my name is ${my_name}`);
  //  learningful unexpected behavior
  // console.log(`my hobbies are ${my_hobbies.map(
  //       (hobby) => {console.log(hobby + ', ')}
  //     )}`);
  //  or with reduce
  console.md(`my hobbies are ${my_hobbies.reduce(
        (accum, hobby) => {return accum + ', ' + hobby}
      )}`);
  console.md(`*first*
      __second__
    ~~third~~`);
  console.md('thank you for visiting my portfolio')
}

draw_portfolio()