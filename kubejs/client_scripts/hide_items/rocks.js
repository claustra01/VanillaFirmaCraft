console.info('Hide rocks items...');

JEIEvents.hideItems((event) => {
  // splitters
  const splitterType = [
    'cobblestone',
    'granite',
    'diorite',
    'andesite',
    'sandstone',
    'red_sandstone',
    'gravel',
    'end_stone',
    'netherrack',
    'soul_soil',
  ];
  splitterType.forEach((type) => {
    event.hide(`rocks:${type}_rock`);
    event.hide(`rocks:${type}_splitter`);
  });
  event.hide('rocks:rock');
  event.hide('rocks:sand_rock');
  event.hide('rocks:red_sand_rock');
});
