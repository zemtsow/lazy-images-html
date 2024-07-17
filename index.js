const images = document.querySelectorAll('img')
const lazy = document.querySelectorAll('#lazy')
import { showModalWindow } from './utils/index.js';

/**
 * @typedef {boolean} 
 */

/**
 * @param {ShowModalWindowParams} boolean
 * @example 
 * if you wanna use debugger switch to true of false
 */

let DEBUG_MODE = true;

const lazyAlghorith = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("blur__image")
    const loadData = setInterval(() => {
      if (images[i].loading) {
        console.log("loading",);
      }
      if (images[i].complete) {
        images[i].classList.remove("blur__image")
        console.log("loaded",);
        clearInterval(loadData)
      }
    }, 100)
  }
};


const detectLazyTags = () => {
  if (lazy.length !== 0) {
    showModalWindow({
      message: `Yay we detected ${images.length} lazy :)`,
      debug: DEBUG_MODE
    })
    return lazyAlghorith()
  } else {
    return showModalWindow({
      message: `Lazy Images: Please enter some 1 lazy`,
      debug: DEBUG_MODE
    })
  }
}

detectLazyTags()