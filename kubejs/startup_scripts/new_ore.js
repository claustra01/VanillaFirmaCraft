StartupEvents.registry("block", (event) => {

	// tfc-style ores
	global.tfcOreType.forEach(ore => {
		global.vanillaEnableRockTypes.forEach(rock => {
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