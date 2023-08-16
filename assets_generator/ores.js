const fs = require('fs')
const Jimp = require('jimp')

const newOreType = [
  // tfc graded ores
  // vein: [rarity, maxY, minY, maxSize, minSize]
  {
    "name": "native_copper",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [120, 72, 0, 1000, 700]
    }
  }
]

const newRockType = [
  // overworld
  {
    "name": "stone",
    "hardness": 1.5,
    "resistance": 6,
    "dimension": "minecraft:overworld",
    "origin": "minecraft:stone"
  },
  {
    "name": "deepslate",
    "hardness": 3,
    "resistance": 6,
    "dimension": "minecraft:overworld",
    "origin": "minecraft:deepslate"
  },
  {
    "name": "granite",
    "hardness": 1.5,
    "resistance": 6,
    "dimension": "minecraft:overworld",
    "origin": "minecraft:granite"
  },
  {
    "name": "diorite",
    "hardness": 1.5,
    "resistance": 6,
    "dimension": "minecraft:overworld",
    "origin": "minecraft:diorite"
  },
  {
    "name": "andesite",
    "hardness": 1.5,
    "resistance": 6,
    "dimension": "minecraft:overworld",
    "origin": "minecraft:andesite"
  },
  // nether
  {
    "name": "netherrack",
    "hardness": 0.4,
    "resistance": 0.4,
    "dimension": "minecraft:the_nether",
    "origin": "minecraft:netherrack"
  },
  {
    "name": "basalt",
    "hardness": 1.25,
    "resistance": 4.2,
    "dimension": "minecraft:the_nether",
    "origin": "minecraft:basalt"
  },
  {
    "name": "blackstone",
    "hardness": 1.5,
    "resistance": 6,
    "dimension": "minecraft:the_nether",
    "origin": "minecraft:blackstone"
  },
  // the end
  {
    "name": "endstone",
    "hardness": 3,
    "resistance": 9,
    "dimension": "minecraft:the_end",
    "origin": "minecraft:end_stone"
  }
]

// generate texture
newOreType.forEach(ore => {
  newRockType.forEach(async rock => {

    let oreImage = ore.isGraded ? `./base/ores/normal_${ore.name}.png` : `./base/ores/${ore.name}.png`
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
newOreType.forEach(ore => {
  newRockType.forEach(async rock => {
    let filePath = `../config/adlods/Deposits/_${ore.name}_${rock.name}.cfg`
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
              kubejs:ore/${ore.name}/${rock.name}
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
                  tfc:ore/small_${ore.name}, 3
                  tfc:ore/small_${ore.name}, 9
                  tfc:ore/small_${ore.name}, 15
              >
              S:continuity=20.0
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
