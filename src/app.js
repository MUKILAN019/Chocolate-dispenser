var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color

function helperAddChocolate(chocolates, color, count) {
  Array.from({ length: count }).forEach(() => {
    chocolates.unshift(color);
  });
  return chocolates;
}

function addChocolates(chocolates, color, count) {
  if (count <= 0) {
    return 'Number cannot be zero/negative';
  }
  return helperAddChocolate(chocolates, color, count);
}

//Progression 2: Remove z chocolates from the top the dispenser

function helperToRemoveChocolate(chocolates, number) {
  let removedArrayOfChocolates = [];

  Array.from({ length: number }).forEach(function () {
    let removedElement = chocolates.shift();
    removedArrayOfChocolates.push(removedElement);
  });
  return removedArrayOfChocolates;
}

function removeChocolates(chocolates, number) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : number > chocolates.length
    ? 'Insufficient chocolates in the dispenser'
    : helperToRemoveChocolate(chocolates, number);
}

//Progression 3: Dispense z chocolates

function helperDispenser(chocolates, number) {
  let removedItemsFromArraystore = [];

  Array.from({ length: number }).forEach(function () {
    let eleFromChocolateArray = chocolates.pop();
    removedItemsFromArraystore.push(eleFromChocolateArray);
  });
  return removedItemsFromArraystore;
}

function dispenseChocolates(chocolates, number) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : number > chocolates.length
    ? 'Insufficient chocolates in the dispenser'
    : helperDispenser(chocolates, number);
}

//Progression 4: Dispense z chocolates of x color

function helperDispenseOfColor(chocolates, number, color) {
  let removedElements = [];

  Array.from({ length: number }).forEach(function () {
    removedElements.push(chocolates.pop());
  });
  return removedElements;
}

function dispenseChocolatesOfColor(chocolates, number, color) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : number > chocolates.length
    ? 'Insufficient chocolates in the dispenser'
    : helperDispenseOfColor(chocolates, number, color);
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
  const GiveArray = [
    'green',
    'silver',
    'blue',
    'crimson',
    'purple',
    'red',
    'pink',
  ];

  // map to iterate over each color and count its occurrences in chocolates
  return (
    GiveArray.map(
      (color) => chocolates.filter((choco) => choco === color).length
    )
      //  filter to exclude counts that are 0 (colors not present in chocolates)
      .filter((count) => count > 0)
  ); // length calculates the length of the filtered array choco, and this value is assigned to the variable count. count = chocolates.filter(choco => choco === color).length;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
  let colorsArray = [
    'silver',
    'green',
    'blue',
    'crimson',
    'purple',
    'red',
    'pink',
  ];

  chocolates.sort();

  let mapColor = {};

  for (let s = 0; s < chocolates.length; s++) {
    let color = chocolates[s];
    if (mapColor[color] == undefined) {
      mapColor[color] = 1;
    } else {
      mapColor[color] = mapColor[color] + 1;
    }
  }

  const colorSorted = Object.keys(mapColor).sort(
    (a, b) => mapColor[b] - mapColor[a]
  );

  let chocolatedSorted = [];

  colorSorted.forEach((color) => {
    for (let l = 0; l < mapColor[color]; l++) {
      chocolatedSorted.push(color);
    }
  });

  return chocolatedSorted;
}

//Progression 7: Change z chocolates of x color to y color

function changeChocolateColor(chocolates, number, color, finalColor) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : number > chocolates.length
    ? []
    : color == finalColor
    ? "Can't replace the same chocolates"
    : helperChangeColor(chocolates, number, color, finalColor);
}
function helperChangeColor(chocolates, number, color, finalColor) {
  return chocolates.map((chocolate) =>
    number > 0 && chocolate === color ? finalColor : chocolate
  );
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  return color === finalColor
    ? "Can't replace the same chocolates"
    : helperChange(chocolates, color, finalColor);
}

function helperChange(chocolates, color, finalColor) {
  const modifiedChocolates = chocolates.map((chocolate) =>
    chocolate === color ? finalColor : chocolate
  );
  const countOfChangedColor = modifiedChocolates.filter(
    (chocolate) => chocolate === finalColor
  ).length;

  return [countOfChangedColor, modifiedChocolates];
}

//Challenge 1: Remove one chocolate of x color from the top

function removeChocolateOfColorX(chocolates, Color) {
  let indeXofColor = chocolates.indexOf(Color);

  if (indeXofColor >= 0) {
    chocolates.splice(indeXofColor, 1);
  }
  return chocolates;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed

function dispense1rainbowforevery3rainbow(chocolates, number) {
  let objStore = {};

  for (let i = 0; i < chocolates.length; i++) {
    if (objStore[chocolates[i]] === undefined) {
      objStore[chocolates[i]] = 1;
    } else {
      objStore[chocolates[i]] = objStore[chocolates[i]] + 1;
    }
  }

  let valuesOfObjInArray = Object.values(objStore);

  console.log(valuesOfObjInArray);

  let countRainBowDispensed = 0;
  for (let i = 0; i < valuesOfObjInArray.length; i++) {
    if (valuesOfObjInArray[i] % 3 == 0) {
      countRainBowDispensed = countRainBowDispensed + valuesOfObjInArray[i] / 3;
    }
  }

  return Math.floor(countRainBowDispensed);
}
dispense1rainbowforevery3rainbow(chocolates, 3);