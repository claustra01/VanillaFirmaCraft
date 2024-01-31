global.vanillaWoodBlocks = [
  'log',
  'wood',
  'planks',
  'slab',
  'stairs',
  'fence',
  'sign',
  'hanging_sign',
  'button',
  'pressure_plate',
  'door',
  'trapdoor',
  'fence_gate',
  'boat',
  'chest_boat',
];

global.vanillaOres = [
  'coal',
  'iron',
  'copper',
  'gold',
  'redstone',
  'emerald',
  'lapis',
  'diamond',
]

global.vanillaCopperType = ['exposed', 'weathered', 'oxidized'];

global.vanillaTileEntities = [
  // "minecraft:crafting_table",
  'minecraft:furnace',
  'minecraft:chest',
  'minecraft:trapped_chest',
  'minecraft:chest_minecart',
  'minecraft:loom',
  'minecraft:composter',
  'minecraft:barrel',
  'minecraft:smoker',
  'minecraft:blast_furnace',
  'minecraft:cartography_table',
  'minecraft:fletching_table',
  'minecraft:grindstone',
  'minecraft:smithing_table',
  'minecraft:stonecutter',
];

global.vanillaEnableRockType = [
  // overworld
  {
    "name": "stone",
    "tfc_name": "dacite",
    "replace": true,
    "hardness": 1.5,
    "resistance": 6,
    "dimension": "minecraft:overworld",
    "origin": "minecraft:stone"
  },
  {
    "name": "deepslate",
    "replace": false,
    "hardness": 3,
    "resistance": 6,
    "dimension": "minecraft:overworld",
    "origin": "minecraft:deepslate"
  },
  {
    "name": "granite",
    "tfc_name": "granite",
    "replace": true,
    "hardness": 1.5,
    "resistance": 6,
    "dimension": "minecraft:overworld",
    "origin": "minecraft:granite"
  },
  {
    "name": "diorite",
    "tfc_name": "diorite",
    "replace": true,
    "hardness": 1.5,
    "resistance": 6,
    "dimension": "minecraft:overworld",
    "origin": "minecraft:diorite"
  },
  {
    "name": "andesite",
    "tfc_name": "andesite",
    "replace": true,
    "hardness": 1.5,
    "resistance": 6,
    "dimension": "minecraft:overworld",
    "origin": "minecraft:andesite"
  },
  // nether
  {
    "name": "netherrack",
    "replace": false,
    "hardness": 0.4,
    "resistance": 0.4,
    "dimension": "minecraft:the_nether",
    "origin": "minecraft:netherrack"
  },
  {
    "name": "basalt",
    "tfc_name": "basalt",
    "replace": true,
    "hardness": 1.25,
    "resistance": 4.2,
    "dimension": "minecraft:the_nether",
    "origin": "minecraft:basalt"
  },
  {
    "name": "blackstone",
    "replace": false,
    "hardness": 1.5,
    "resistance": 6,
    "dimension": "minecraft:the_nether",
    "origin": "minecraft:blackstone"
  },
  // the end
  {
    "name": "end_stone",
    "replace": false,
    "hardness": 3,
    "resistance": 9,
    "dimension": "minecraft:the_end",
    "origin": "minecraft:end_stone"
  }
];
