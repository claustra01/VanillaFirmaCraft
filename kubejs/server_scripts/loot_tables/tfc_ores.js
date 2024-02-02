console.info('Tweak TFC ore drops...');

LootJS.modifiers((event) => {
  // custom tfc-style ores
  global.tfcOreType.forEach((ore) => {
    global.vanillaEnableRockType.forEach((rock) => {
      if (ore.type === 'metal') {
        event
          .addBlockLootModifier(`kubejs:ore/${ore.name}/${rock.name}`)
          .replaceLoot(
            `kubejs:ore/${ore.name}/${rock.name}`,
            `${ore.modId}:ore/normal_${ore.name}`
          );
      } else {
        event
          .addBlockLootModifier(`kubejs:ore/${ore.name}/${rock.name}`)
          .replaceLoot(
            `kubejs:ore/${ore.name}/${rock.name}`,
            `${ore.modId}:ore/${ore.name}`
          );
      }
    });
  });
});
