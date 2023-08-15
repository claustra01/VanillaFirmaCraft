// priority: 0

console.info('JEI item hiding...')

onEvent('jei.hide.items', event => {
	// tfc-style ores
	global.tfcStyleOreList.forEach(ore => {
		global.disableTfcRockList.forEach(rock => {
			// tfc ore blocks
			if (ore.isGraded) {
				event.hide(`${ore.modId}:ore/poor_${ore.name}/${rock}`)
				event.hide(`${ore.modId}:ore/normal_${ore.name}/${rock}`)
				event.hide(`${ore.modId}:ore/rich_${ore.name}/${rock}`)
				event.hide(`${ore.modId}:ore/poor_${ore.name}`)
				event.hide(`${ore.modId}:ore/rich_${ore.name}`)
				event.hide(`${ore.modId}:deposit/${ore.name}/${rock}`)
			} else {
				event.hide(`${ore.modId}:ore/${ore.name}/${rock}`)
			}
		})
	})
	// tfc stone blocks
	global.disableTfcRockList.forEach(rock => {
		global.disableTfcStoneBlockList.forEach(type => {
			let item = `tfc:rock/${type}/${rock}`
			let isIgnored = false
			global.disableIgnoreList.forEach(ignore => {
				if (item == ignore) isIgnored = true
			})
			if (!isIgnored) event.hide(item)
			event.hide(`tfc:rock/${type}/${rock}_slab`)
			event.hide(`tfc:rock/${type}/${rock}_stairs`)
			event.hide(`tfc:rock/${type}/${rock}_wall`)
		})
	})
})