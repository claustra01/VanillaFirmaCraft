// priority: 0

console.info('JEI item hiding...')

onEvent('jei.hide.items', event => {
	console.log("minecraft:stone")
	// tfc-style ores
	global.tfcStyleOreList.forEach(ore => {
		global.tfcDisableRockList.forEach(rock => {
			// tfc ore blocks
			if (ore.isGraded) {
				event.hide(`${ore.modId}:ore/poor_${ore.name}/${rock}`)
				event.hide(`${ore.modId}:ore/normal_${ore.name}/${rock}`)
				event.hide(`${ore.modId}:ore/rich_${ore.name}/${rock}`)
				event.hide(`${ore.modId}:ore/poor_${ore.name}`)
				event.hide(`${ore.modId}:ore/rich_${ore.name}`)
			} else {
				event.hide(`${ore.modId}:ore/${ore.name}/${rock}`)
			}
		})
	})
})