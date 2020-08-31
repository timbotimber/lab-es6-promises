// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

let steakIt = (steak) => {
  addFood(steak[0], "#steak", () => {
    // ... your code here
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  const image = document.createElement("img");
                  image.src = "public/images/steak.jpg";
                  document.querySelector("#table").appendChild(image);
                });
              });
            });
          });
        });
      });
    });
  });
};

let mashIt = (mashPotatoes) => {
  addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            const image = document.createElement("img");
            image.src = "public/images/mashPotatoes.jpg";
            document.querySelector("#table").appendChild(image);
          });
        });
      });
    });
  });
};

let sproutsIt = async (sprouts) => {
  for (let i = 0; i < sprouts.length; i++) {
    await addFood(sprouts[i], "#brusselSprouts");
  }
  const image = document.createElement("img");
  image.src = "public/images/brusselSprouts.jpg";
  document.querySelector("#table").appendChild(image);
};

let dinerIsServed = () => {
  Promise.all([
    sproutsIt(brusselSprouts),
    steakIt(steak),
    mashIt(mashPotatoes),
  ]).then((values) => {
    console.log("eat up martha");
  });
};

dinerIsServed();
