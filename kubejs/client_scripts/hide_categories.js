console.info('Hide JEI Categories...');

JEIEvents.removeCategories((event) => {
  event.remove('minecraft:blasting');
  event.remove('minecraft:campfire');
  event.remove('minecraft:compostable');
  event.remove('minecraft:fuel');
  event.remove('minecraft:furnace');
  event.remove('minecraft:smithing');
  event.remove('minecraft:smoking');
  event.remove('minecraft:stonecutting');
});
