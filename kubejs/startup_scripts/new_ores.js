console.info('Register new ore blocks...');

StartupEvents.registry('block', (event) => {
  // custom tfc-style ores
  global.vanillaEnableRockType.forEach((rock) => {
    global.tfcOreType.forEach((ore) => {
      if (rock.replace) {
        return;
      }
      // register block
      event
        .create(`ore/${ore.name}/${rock.name}`)
        .material('stone')
        .hardness(rock.hardness)
        .resistance(rock.resistance)
        .tagBoth('forge:ores')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock(`${ore.miningLevel === 'black_steel' ? 'tfc' : 'minecraft'}:needs_${ore.miningLevel}_tool`)
        .tagBlock('tfc:rock/ores')
        .tagBlock('tfc:prospectable');
    });
  });
});
