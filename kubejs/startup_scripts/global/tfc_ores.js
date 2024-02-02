// vein: [rarity, maxY, minY, maxSize, minSize]
global.tfcOreType = [
  // tfc graded ores
  {
    name: 'native_copper',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [400, 75, -30, 1000, 700],
    },
  },
  {
    name: 'native_gold',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [700, 60, -30, 700, 400],
    },
  },
  {
    name: 'hematite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [600, 75, -30, 1000, 700],
    },
  },
  {
    name: 'native_silver',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [600, 75, -30, 1000, 700],
    },
  },
  {
    name: 'cassiterite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [400, 75, -30, 1000, 700],
    },
  },
  {
    name: 'bismuthinite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [400, 75, -30, 1000, 700],
    },
  },
  {
    name: 'garnierite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [700, 60, -30, 700, 400],
    },
  },
  {
    name: 'malachite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [600, 75, -30, 1000, 700],
    },
  },
  {
    name: 'magnetite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [600, 75, -30, 1000, 700],
    },
  },
  {
    name: 'limonite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [600, 75, -30, 1000, 700],
    },
  },
  {
    name: 'sphalerite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [400, 75, -30, 1000, 700],
    },
  },
  {
    name: 'tetrahedrite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [400, 75, -30, 1000, 700],
    },
  },
  // firmalife graded ores
  {
    name: 'chromite',
    modId: 'firmalife',
    miningLevel: 'stone',
    isGraded: true,
    veinData: {
      'minecraft:overworld': [700, 60, -30, 700, 400],
    },
  },
  // tfc non-graded ores
  {
    name: 'bituminous_coal',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [900, 210, 0, 300, 200],
    },
  },
  {
    name: 'lignite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [900, 90, -45, 300, 200],
    },
  },
  {
    name: 'gypsum',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [1200, 90, 30, 1000, 700],
    },
  },
  {
    name: 'graphite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [900, 90, -45, 300, 200],
    },
  },
  {
    name: 'sulfur',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [900, 210, 0, 300, 200],
    },
  },
  {
    name: 'cinnabar',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [900, 90, -45, 300, 200],
    },
  },
  {
    name: 'cryolite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [900, 90, -45, 300, 200],
    },
  },
  {
    name: 'saltpeter',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [900, 210, 0, 300, 200],
    },
  },
  {
    name: 'sylvite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [900, 90, -45, 300, 200],
    },
  },
  {
    name: 'borax',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [900, 210, 0, 300, 200],
    },
  },
  {
    name: 'halite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [1200, 90, 30, 1800, 1500],
    },
  },
  // tfc gems
  {
    name: 'amethyst',
    modId: 'tfc',
    miningLevel: 'diamond',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'diamond',
    modId: 'tfc',
    miningLevel: 'black_iron',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'emerald',
    modId: 'tfc',
    miningLevel: 'diamond',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'lapis_lazuli',
    modId: 'tfc',
    miningLevel: 'iron',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'opal',
    modId: 'tfc',
    miningLevel: 'iron',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'pyrite',
    modId: 'tfc',
    miningLevel: 'stone',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'ruby',
    modId: 'tfc',
    miningLevel: 'black_steel',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'sapphire',
    modId: 'tfc',
    miningLevel: 'black_steel',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'topaz',
    modId: 'tfc',
    miningLevel: 'diamond',
    isGraded: false,
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
];
