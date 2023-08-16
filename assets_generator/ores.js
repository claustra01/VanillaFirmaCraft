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
      "minecraft:overworld": [400, 75, -30, 1000, 700]
    }
  },
  {
    "name": "native_gold",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [700, 60, -30, 700, 400]
    }
  },
  {
    "name": "hematite",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [600, 75, -30, 1000, 700]
    }
  },
  {
    "name": "native_silver",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [600, 75, -30, 1000, 700]
    }
  },
  {
    "name": "cassiterite",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [400, 75, -30, 1000, 700]
    }
  },
  {
    "name": "bismuthinite",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [400, 75, -30, 1000, 700]
    }
  },
  {
    "name": "garnierite",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [700, 60, -30, 700, 400]
    }
  },
  {
    "name": "malachite",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [600, 75, -30, 1000, 700]
    }
  },
  {
    "name": "magnetite",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [600, 75, -30, 1000, 700]
    }
  },
  {
    "name": "limonite",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [600, 75, -30, 1000, 700]
    }
  },
  {
    "name": "sphalerite",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [400, 75, -30, 1000, 700]
    }
  },
  {
    "name": "tetrahedrite",
    "modId": "tfc",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [400, 75, -30, 1000, 700]
    }
  },
  // tfc-metallum graded ores
  {
    "name": "bauxite",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "bertrandite",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "cobaltite",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "kernite",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "galena",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "monazite",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "native_osmium",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "native_iridium",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "native_platinum",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "rutile",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "stibnite",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "uraninite",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  {
    "name": "wolframite",
    "modId": "tfc_metallum",
    "isGraded": true,
    "veinData": {
    }
  },
  // firmalife graded ores
  {
    "name": "chromite",
    "modId": "firmalife",
    "isGraded": true,
    "veinData": {
      "minecraft:overworld": [700, 60, -30, 700, 400]
    }
  },
  // tfc non-graded ores
  {
    "name": "bituminous_coal",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [900, 210, 0, 300, 200]
    }
  },
  {
    "name": "lignite",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [900, 90, -45, 300, 200]
    }
  },
  {
    "name": "kaolinite",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [900, 210, 0, 300, 200]
    }
  },
  {
    "name": "gypsum",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [1200, 90, 30, 1000, 700]
    }
  },
  {
    "name": "graphite",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [900, 90, -45, 300, 200]
    }
  },
  {
    "name": "sulfur",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [900, 210, 0, 300, 200]
    }
  },
  {
    "name": "cinnabar",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [900, 90, -45, 300, 200]
    }
  },
  {
    "name": "cryolite",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [900, 90, -45, 300, 200]
    }
  },
  {
    "name": "saltpeter",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [900, 210, 0, 300, 200]
    }
  },
  {
    "name": "sylvite",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [900, 90, -45, 300, 200]
    }
  },
  {
    "name": "borax",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [900, 210, 0, 300, 200]
    }
  },
  {
    "name": "halite",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [1200, 90, 30, 1800, 1500]
    }
  },
  {
    "name": "amethyst",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [600, 0, -60, 60, 30]
    }
  },
  {
    "name": "diamond",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [600, 0, -60, 60, 30]
    }
  },
  {
    "name": "emerald",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [600, 0, -60, 60, 30]
    }
  },
  {
    "name": "lapis_lazuli",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [600, 0, -60, 60, 30]
    }
  },
  {
    "name": "opal",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [600, 0, -60, 60, 30]
    }
  },
  {
    "name": "pyrite",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [600, 0, -60, 60, 30]
    }
  },
  {
    "name": "ruby",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [600, 0, -60, 60, 30]
    }
  },
  {
    "name": "sapphire",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [600, 0, -60, 60, 30]
    }
  },
  {
    "name": "topaz",
    "modId": "tfc",
    "isGraded": false,
    "veinData": {
      "minecraft:overworld": [600, 0, -60, 60, 30]
    }
  },
  // tfc-metallum non-graded ores
  {
    "name": "certus_quartz",
    "modId": "tfc_metallum",
    "isGraded": false,
    "veinData": {
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
                  ${ore.isGraded ? `
                      tfc:ore/small_${ore.name}, 3
                      tfc:ore/small_${ore.name}, 9
                      tfc:ore/small_${ore.name}, 15
                  ` : ""}
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
