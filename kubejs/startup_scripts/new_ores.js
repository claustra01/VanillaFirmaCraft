// priority: 0

console.info('New ores registering...')

onEvent('block.registry', event => {
	// tfc-style ores
	global.tfcStyleOreList.forEach(ore => {
		global.tfcStyleRockList.forEach(rock => {
			// register block
			event.create(`ore/${ore.name}/${rock.name}`)
				.material("stone")
				.hardness(rock.hardness)
				.resistance(rock.resistance)
				.tagBoth("forge:ores")
				.tagBlock("minecraft:mineable/pickaxe")
				.tagBlock("minecraft:needs_stone_tool")
				.tagBlock("tfc:rock/ores")
				.tagBlock("tfc:prospectable")
		})
	})
})