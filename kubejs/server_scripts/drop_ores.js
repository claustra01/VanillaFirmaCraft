// priority: 0

console.info('Ore drop setting...')

onEvent('lootjs', event => {
	// tfc-style ores
	global.newOreType.forEach(ore => {
		global.newRockType.forEach(rock => {
			if (ore.isGraded) {
        event.addBlockLootModifier(`kubejs:ore/${ore.name}/${rock.name}`)
          .replaceLoot(`kubejs:ore/${ore.name}/${rock.name}`, `${ore.modId}:ore/normal_${ore.name}`);
      } else {
        event.addBlockLootModifier(`kubejs:ore/${ore.name}/${rock.name}`)
          .replaceLoot(`kubejs:ore/${ore.name}/${rock.name}`, `${ore.modId}:ore/${ore.name}`);
      }
		})
	})
})