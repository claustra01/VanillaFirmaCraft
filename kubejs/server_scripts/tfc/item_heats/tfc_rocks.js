console.info('Add TFC heat parameters...');

TFCEvents.data(event => {
  global.tfcRockType.forEach(rock => {
    if (rock.replace) {
      event.itemHeat(`tfc:rock/cobble/${rock.name}`, 0.5, null, null);
    }
  });
  event.itemHeat('minecraft:cobbled_deepslate', 0.5, null, null);
});