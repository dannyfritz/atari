import loadCartridge from "../build/cartridge.js"
import Atari from "../build/atari.js"
async function () {
  const atari = new Atari()
  const cartridge = await loadCartridge(`/rom/Pac-Man (1982) (Atari, Tod Frye - Sears) (CX2646 - 49-75185).bin`)
  atari.loadCartridge(cartridge)
  atari.powerOn()
  //atari.blackAndwhite()
  //atari.color()
}
