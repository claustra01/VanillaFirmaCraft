// priority: 0

console.info('New rocks registering...')

onEvent('item.registry', event => {
	// brick
	event.create(`brick/stone`)
	event.create(`brick/deepslate`)
})