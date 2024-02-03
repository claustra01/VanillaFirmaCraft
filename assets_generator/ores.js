const fs = require('fs')
const Jimp = require('jimp')

const tfcOreType = [
  // tfc graded ores
  {
    name: 'native_copper',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [400, 75, -30, 1000, 700],
    },
  },
  {
    name: 'native_gold',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [700, 60, -30, 700, 400],
    },
  },
  {
    name: 'hematite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [600, 75, -30, 1000, 700],
    },
  },
  {
    name: 'native_silver',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [600, 75, -30, 1000, 700],
    },
  },
  {
    name: 'cassiterite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [400, 75, -30, 1000, 700],
    },
  },
  {
    name: 'bismuthinite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [400, 75, -30, 1000, 700],
    },
  },
  {
    name: 'garnierite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [700, 60, -30, 700, 400],
    },
  },
  {
    name: 'malachite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [600, 75, -30, 1000, 700],
    },
  },
  {
    name: 'magnetite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [600, 75, -30, 1000, 700],
    },
  },
  {
    name: 'limonite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [600, 75, -30, 1000, 700],
    },
  },
  {
    name: 'sphalerite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [400, 75, -30, 1000, 700],
    },
  },
  {
    name: 'tetrahedrite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [400, 75, -30, 1000, 700],
    },
  },
  // firmalife graded ores
  {
    name: 'chromite',
    modId: 'firmalife',
    miningLevel: 'stone',
    type: 'metal',
    veinData: {
      'minecraft:overworld': [700, 60, -30, 700, 400],
    },
  },
  // tfc non-graded ores
  {
    name: 'bituminous_coal',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/basalt',
    veinData: {
      'minecraft:overworld': [900, 210, 0, 300, 200],
    },
  },
  {
    name: 'lignite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/basalt',
    veinData: {
      'minecraft:overworld': [900, 90, -45, 300, 200],
    },
  },
  {
    name: 'gypsum',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/diorite',
    veinData: {
      'minecraft:overworld': [1200, 90, 30, 1000, 700],
    },
  },
  {
    name: 'graphite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/basalt',
    veinData: {
      'minecraft:overworld': [900, 90, -45, 300, 200],
    },
  },
  {
    name: 'sulfur',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/andesite',
    veinData: {
      'minecraft:overworld': [900, 210, 0, 300, 200],
    },
  },
  {
    name: 'cinnabar',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/granite',
    veinData: {
      'minecraft:overworld': [900, 90, -45, 300, 200],
    },
  },
  {
    name: 'cryolite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/granite',
    veinData: {
      'minecraft:overworld': [900, 90, -45, 300, 200],
    },
  },
  {
    name: 'saltpeter',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/andesite',
    veinData: {
      'minecraft:overworld': [900, 210, 0, 300, 200],
    },
  },
  {
    name: 'sylvite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/diorite',
    veinData: {
      'minecraft:overworld': [900, 90, -45, 300, 200],
    },
  },
  {
    name: 'borax',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/diorite',
    veinData: {
      'minecraft:overworld': [900, 210, 0, 300, 200],
    },
  },
  {
    name: 'halite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'mineral',
    indicator: 'tfc:rock/mossy_loose/diorite',
    veinData: {
      'minecraft:overworld': [1200, 90, 30, 1800, 1500],
    },
  },
  // tfc gems
  {
    name: 'amethyst',
    modId: 'tfc',
    miningLevel: 'diamond',
    type: 'gem',
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'diamond',
    modId: 'tfc',
    miningLevel: 'black_iron',
    type: 'gem',
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'emerald',
    modId: 'tfc',
    miningLevel: 'diamond',
    type: 'gem',
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'lapis_lazuli',
    modId: 'tfc',
    miningLevel: 'iron',
    type: 'gem',
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'opal',
    modId: 'tfc',
    miningLevel: 'iron',
    type: 'gem',
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'pyrite',
    modId: 'tfc',
    miningLevel: 'stone',
    type: 'gem',
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'ruby',
    modId: 'tfc',
    miningLevel: 'black_steel',
    type: 'gem',
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'sapphire',
    modId: 'tfc',
    miningLevel: 'black_steel',
    type: 'gem',
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
  {
    name: 'topaz',
    modId: 'tfc',
    miningLevel: 'diamond',
    type: 'gem',
    veinData: {
      'minecraft:overworld': [600, 0, -60, 60, 30],
    },
  },
];

const vanillaEnableRockType = [
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
  // nether
  {
    "name": "netherrack",
    "replace": false,
    "hardness": 0.4,
    "resistance": 0.4,
    "dimension": "minecraft:the_nether",
    "origin": "minecraft:netherrack"
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

// generate texture
tfcOreType.forEach(ore => {
  vanillaEnableRockType.forEach(async rock => {

    if (rock.replace) {
      return;
    }

    let oreImage = ore.type === 'metal' ? `./base/ores/normal_${ore.name}.png` : `./base/ores/${ore.name}.png`
    let rockImage = `./base/rocks/${rock.name}.png`

    const [base, overlay] = await Promise.all([
      Jimp.read(rockImage),
      Jimp.read(oreImage)
    ]);

    overlay.resize(base.bitmap.width, base.bitmap.height);

    await base.composite(overlay, 0, 0, {
      mode: Jimp.BLEND_SOURCE_OVER,
      opacityDest: 1,
      opacitySource: 1,
    })

    const outputImage = `../kubejs/assets/kubejs/textures/block/ore/${ore.name}/${rock.name}.png`
    base.write(outputImage, (err) => {
      if (err) throw err
      console.log("Image composition successful. Output saved at", outputImage)
    })
    
  })
})

// generate worldgen config
tfcOreType.forEach(ore => {
  vanillaEnableRockType.forEach(async rock => {
    let filePath = `../config/adlods/Deposits/_${ore.name}_${rock.name}.cfg`
    let oreBlock = rock.replace ?
      `tfc:ore/${ore.type === 'metal' ? 'normal_' : ''}${ore.name}/${rock.tfc_name}` :
      `kubejs:ore/${ore.name}/${rock.name}`
    let enabled = false
    let veinData = [256000, 0, 0, 1, 1]
    if (ore.veinData[rock.dimension]) {
      enabled = true
      veinData = ore.veinData[rock.dimension]
    }
    let configData = `
      Config {
          B:enabled=${enabled}
      }
      Deposit {
          S:customReplacements <
          >
          S:ores <
              ${oreBlock}
          >
          I:rarity=${veinData[0]}
          S:replaceableBlocks <
              ${rock.origin}
          >
          Dimensions {
              S:blackList <
              >
              S:whiteList <
                  ${rock.dimension}
              >
          }
          Biomes {
              S:blackList <
              >
              S:whiteList <
              >
          }
          Altitude {
              I:max=${veinData[1]}
              I:min=${veinData[2]}
          }
          Miscellaneous {
              B:exposed=true
              S:proportions=0.5
          }
          Size {
              I:max=${veinData[3]}
              I:min=${veinData[4]}
          }
          Indicator {
              S:circles <
                  ${ore.type === 'metal' ? `
                      tfc:ore/small_${ore.name}, 3
                      tfc:ore/small_${ore.name}, 9
                      tfc:ore/small_${ore.name}, 15
                  ` : (ore.type === 'mineral' ? `
                          ${ore.indicator}, 3
                          ${ore.indicator}, 9
                          ${ore.indicator}, 15
                      ` : '')
                  }
              >
              S:continuity=10.0
              I:distortion=1
              S:id=
          }
      }
    `
    fs.writeFile(filePath, configData, (err) => {
      if (err) throw err
      console.log("Config creation successful. Output saved at", filePath)
    })
  })
})

// export translation data
let langData = ""
const capitalize = (str) => {
  const words = str.split('_');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
tfcOreType.forEach(ore => {
  vanillaEnableRockType.forEach(rock => {
    if (rock.replace) {
      return;
    }
    langData += `"block.kubejs.ore.${ore.name}.${rock.name}": "${ore.type === 'metal' ? 'Normal ' : ''}${capitalize(rock.name)} ${ore.name === 'diamond' ? 'Kimberlite' : capitalize(ore.name)}",\n`
    langData += `"block.kubejs.ore.${ore.name}.${rock.name}.prospected": "${ore.name === 'diamond' ? 'Kimberlite' : capitalize(ore.name)}",\n`
  })
})
fs.writeFile('./export.txt', langData, (err) => {
  if (err) throw err
  console.log("Translation data creation successful. Output saved at ./export.txt")
})