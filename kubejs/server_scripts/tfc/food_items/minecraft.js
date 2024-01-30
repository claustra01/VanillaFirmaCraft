console.info('Add TFC food parameters...');

TFCEvents.data((event) => {
  // apple
  event.foodItem('minecraft:apple', (food) => {
    food.hunger(4);
    food.saturation(0.5);
    food.decayModifier(1.7);
    food.fruit(1);
  });

  // sweet_berries
  event.foodItem('minecraft:sweet_berries', (food) => {
    food.hunger(4);
    food.saturation(0.2);
    food.water(5);
    food.decayModifier(4.9);
    food.fruit(1);
  });

  // glow_berries
  event.foodItem('minecraft:glow_berries', (food) => {
    food.hunger(4);
    food.saturation(0.5);
    food.water(5);
    food.decayModifier(4.9);
    food.fruit(0.75);
  });

  // carrot
  event.foodItem('minecraft:carrot', (food) => {
    food.hunger(4);
    food.saturation(2);
    food.decayModifier(0.7);
    food.vegetables(1);
  });

  // potato
  event.foodItem('minecraft:potato', (food) => {
    food.hunger(4);
    food.saturation(2);
    food.decayModifier(0.666);
    food.vegetables(1.5);
  });

  // beet
  event.foodItem('minecraft:beetroot', (food) => {
    food.hunger(4);
    food.saturation(2);
    food.decayModifier(0.7);
    food.vegetables(1);
  });

  // no nutrition foods
  event.foodItem('minecraft:wheat', (food) => {
    food.decayModifier(2);
  });
  event.foodItem('minecraft:poisonous_potato', (food) => {
    food.decayModifier(0.666);
  });
  event.foodItem('minecraft:chorus_fruit', (food) => {
    food.decayModifier(4.9);
  });
});
