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
		global.disableTfcRockBlockList.forEach(type => {
			let item = `tfc:rock/${type}/${rock}`
			let isIgnored = false
			global.disableIgnoreRockBlockList.forEach(ignore => {
				if (item == ignore) isIgnored = true
			})
			if (!isIgnored) event.hide(item)
			event.hide(`tfc:rock/${type}/${rock}_slab`)
			event.hide(`tfc:rock/${type}/${rock}_stairs`)
			event.hide(`tfc:rock/${type}/${rock}_wall`)
			event.hide(`tfc:brick/${rock}`)
		})
	})

	// tfc stone tools
	global.disableTfcStoneList.forEach(stone => {
		global.disableStoneToolList.forEach(type => {
			event.hide(`tfc:stone/${type}/${stone}`)
		})
	})

	// tfc wood items
	global.disableTfcWoodList.forEach(wood => {
		global.disableTfcWoodItemList.forEach(type => {
			event.hide(`tfc:wood/${type}/${wood}`)
		})
		global.disableTfcWoodPlankList.forEach(type => {
			event.hide(`tfc:wood/planks/${wood}_${type}`)
		})
		global.disableFirmalifeWoodItemList.forEach(type => {
			event.hide(`firmalife:wood/${type}/${wood}`)
		})
	})

	// tfc dirt blocks
	global.disableTfcDirtList.forEach(dirt => {
		global.disableTfcDirtBlockList.forEach(type => {
			event.hide(`tfc:${type}/${dirt}`)
			event.hide(`tfc:${type}/${dirt}_slab`)
			event.hide(`tfc:${type}/${dirt}_stairs`)
			event.hide(`tfc:${type}/${dirt}_wall`)
		})
	})

	// tfc sand blocks
	global.disableTfcSandList.forEach(sand => {
		global.disableTfcSandBlockList.forEach(type => {
			event.hide(`tfc:${type}/${sand}`)
			event.hide(`tfc:${type}/${sand}_slab`)
			event.hide(`tfc:${type}/${sand}_stairs`)
			event.hide(`tfc:${type}/${sand}_wall`)
		})
	})
	
})
