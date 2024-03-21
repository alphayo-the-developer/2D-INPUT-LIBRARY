import { JOYSTICK } from "./InputHandler.js";
import { BUTTON } from "./InputHandler.js";
import { INPUTHANDLER } from "/InputHandler.js";
import { SWIPE } from "/InputHandler.js";
// import { JoystickController } from "/InputHandler.js";

// var joystick1 = new JoystickController("stick1", 64, 18);

var joystick1 = new JOYSTICK();
var hitbtn = new BUTTON('btn');

const inputHandler = new INPUTHANDLER("keys");
var swipe = new SWIPE(60);

// const a = inputHandler.addkeys('a')
// const w = inputHandler.addkeys('w')

inputHandler.addkeys('w')
inputHandler.addkeys('r')

// console.log(joystick1.controller.value);
// hitbtn.pressed

setInterval(() => {
  // let w = inputHandler.keys.get('w');
  // let r = inputHandler.keys.get('r');
  let r = inputHandler.getKey('r');
  let swipeDown = swipe.swipeDown()

  // console.log(joystick1.maxDistance);
// let a = new Array()
// a.push('down3')
// a.includes('down')
// console.log(a.includes('down'))

console.log(r)

console.log(swipe.swipeDown())
  // console.log(w.get('y'));
  // console.log(inputHandler.keys);
  // console.log(inputHandler)
  // console.table(null,[6,6])
}, 200);

// console.log(joystick1);
