const Jimp = require("jimp")

const oreType = [
  // tfc graded ores
  {
    "name": "native_copper",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "native_gold",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "hematite",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "native_silver",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "cassiterite",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "bismuthinite",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "garnierite",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "malachite",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "magnetite",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "limonite",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "sphalerite",
    "modId": "tfc",
    "isGraded": true
  },
  {
    "name": "tetrahedrite",
    "modId": "tfc",
    "isGraded": true
  },
  // tfc-metallum graded ores
  {
    "name": "bauxite",
    "modId": "tfc_metallum",
    "isGraded": true
  },  {
    "name": "bertrandite",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "cobaltite",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "kernite",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "galena",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "monazite",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "native_osmium",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "native_iridium",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "native_platinum",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "rutile",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "stibnite",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "uraninite",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  {
    "name": "wolframite",
    "modId": "tfc_metallum",
    "isGraded": true
  },
  // tfc non-graded ores
  {
    "name": "bituminous_coal",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "lignite",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "gypsum",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "graphite",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "sulfur",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "cinnabar",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "cryolite",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "saltpeter",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "sylvite",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "borax",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "halite",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "amethyst",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "diamond",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "emerald",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "lapis_lazuli",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "opal",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "pyrite",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "ruby",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "sapphire",
    "modId": "tfc",
    "isGraded": false
  },
  {
    "name": "topaz",
    "modId": "tfc",
    "isGraded": false
  },
  // tfc-metallum non-graded ores
  {
    "name": "certus_quartz",
    "modId": "tfc_metallum",
    "isGraded": false
  },
  // firmalife graded ores
  {
    "name": "chromite",
    "modId": "firmalife",
    "isGraded": true
  }
]

const rockType = [
  // overworld
  {
    "name": "stone",
    "hardness": 1.5,
    "resistance": 6
  },
  {
    "name": "deepslate",
    "hardness": 3,
    "resistance": 6
  },
  {
    "name": "granite",
    "hardness": 1.5,
    "resistance": 6
  },
  {
    "name": "diorite",
    "hardness": 1.5,
    "resistance": 6
  },
  {
    "name": "andesite",
    "hardness": 1.5,
    "resistance": 6
  },
  // nether
  {
    "name": "netherrack",
    "hardness": 0.4,
    "resistance": 0.4
  },
  {
    "name": "basalt",
    "hardness": 1.25,
    "resistance": 4.2
  },
  {
    "name": "blackstone",
    "hardness": 1.5,
    "resistance": 6
  },
  // the end
  {
    "name": "endstone",
    "hardness": 3,
    "resistance": 9
  }
]

oreType.forEach(ore => {
  rockType.forEach(async rock => {

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

    const outpueImage = `../kubejs/assets/kubejs/textures/block/ore/${ore.name}/${rock.name}.png`
    base.write(outpueImage, (err) => {
      if (err) throw err
      console.log("Image composition successful. Output saved at", outpueImage)
    })
    
  })
})