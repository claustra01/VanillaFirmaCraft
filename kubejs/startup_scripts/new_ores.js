console.info('Register new ore blocks...');

StartupEvents.registry('block', (event) => {
  // custom tfc-style ores
  global.vanillaEnableRockType.forEach((rock) => {
    global.tfcOreType.forEach((ore) => {
      // register block
      event
        .create(`ore/${ore.name}/${rock.name}`)
        .material('stone')
        .hardness(rock.hardness)
        .resistance(rock.resistance)
        .tagBoth('forge:ores')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .tagBlock('tfc:rock/ores')
        .tagBlock('tfc:prospectable');
    });
  });
});
