// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], id);
//   console.log(mashPotatoes[i])
// }

let steakIt = (steak, id) => {
  addFood(steak[0], id, () => {
    addFood(steak[1], id, () => {
      addFood(steak[2], id, () => {
        addFood(steak[3], id, () => {
          addFood(steak[4], id, () => {
            addFood(steak[5], id, () => {
              addFood(steak[6], id, () => {
                addFood(steak[7], id, () => {
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

let mashIt = (mashPotatoes, id) => {
  addFood(mashPotatoes[0], id).then(() => {
    addFood(mashPotatoes[1], id).then(() => {
      addFood(mashPotatoes[2], id).then(() => {
        addFood(mashPotatoes[3], id).then(() => {
          addFood(mashPotatoes[4], id).then(() => {
            const image = document.createElement("img");
            image.src = "public/images/mashPotatoes.jpg";
            document.querySelector("#table").appendChild(image);
          });
        });
      });
    });
  });
};

let sproutsIt = async (sprouts, id) => {
  for (let i = 0; i < sprouts.length; i++) {
    await addFood(sprouts[i], id);
  }
  const image = document.createElement("img");
  image.src = "public/images/brusselSprouts.jpg";
  document.querySelector("#table").appendChild(image);
};

let dinerIsServed = () => {
  Promise.all([
    steakIt(steak, "#steak"),
    mashIt(mashPotatoes, "#mashPotatoes"),
    sproutsIt(brusselSprouts, "#brusselSprouts"),
  ]).then(() => {
    console.log("eat up martha");
  });
};

dinerIsServed();
