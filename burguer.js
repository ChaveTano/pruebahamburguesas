function balancedBurgerScore(ingredientsList) {
  console.log(ingredientsList);
  let score = 0;
  let countVeg = 0;
  let countSauce = 0;
  let countProteins = 0;
  const options = {
    vegetables: [
      "tomato",
      "onion",
      "lettuce",
      "eggplant",
      "mushrooms",
      "bellpeper",
    ],
    sauces: [
      "mayonnaise",
      "ketchup",
      "mustard",
      "barbecue",
      "chipotle",
      "hotsauce",
    ],
    proteins: ["beef", "chicken", "pork", "lentils", "chickpeas"],
    cheeses: ["cheddar", "gouda", "parmesan", "mozzarella"],
    breads: ["potato bread", "sesame bread"],
  };

  if ((ingredientsList.length = 0)) {
    return "A list of ingredients is required";
  }

  if (ingredientsList[0] == ("potato bread" || "sesame bread")) {
    if (
      ingredientsList[ingredientsList.length] ==
      ("potato bread" || "sesame bread")
    ) {
      score = score++;
    }
  }

  for (let i = 0; i < ingredientsList.length; i++) {
    for (let y = 0; y < options.vegetables.length; y++) {
      if (ingredientsList[i] == options.vegetables[y]) {
        countVeg = countVeg++;
      }
    }
    for (let y = 0; y < options.sauces.length; y++) {
      if (ingredientsList[i] == options.sauces[y]) {
        countSauce = countSauce++;
      }
    }
    for (let y = 0; y < options.proteins.length; y++) {
      if (ingredientsList[i] == options.proteins[y]) {
        countProteins = countProteins++;
      }
    }
  }

  if (countVeg >= 2) {
    score = score++;
  }

  if ((countSauce = 1)) {
    score = score++;
  }

  if (countProteins <= 2) {
    score = score++;
  }

  return score;
}

console.log(balancedBurgerScore(["potato bread", "potato bread"]));
