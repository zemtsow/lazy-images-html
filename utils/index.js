const lazy = document.querySelectorAll('#lazy')
const images = document.querySelectorAll('img')

/**
 * @property {NodeListOf<HTMLImageElement>} entities
 */

/**
 * @param {LazyLoadAlgorithm} options - Function for detect lazy tags
 */

const lazyLoadAlgorithm = ({ entities }) => {
  for (let i = 0; i < entities.length; i++) {
    entities[i].classList.add("blur__image")
    const loadData = setInterval(() => {
      if (entities[i].loading) {
        console.log("loading",);
      }
      if (entities[i].complete) {
        entities[i].classList.remove("blur__image")
        console.log("loaded",);
        clearInterval(loadData)
      }
    }, 100)
  }
};


/**
 * @typedef {Object} ShowModalWindowParams
 * @property {string} message
 * @property {boolean} debug
 */

/**
 * @param {ShowModalWindowParams} options - For showing modal on debug
 */

const showModalWindow = ({ message, debug }) => {
  if (debug) {
    const rootElement = document.getElementById('root');
    if (rootElement !== null) {
      rootElement.innerHTML += `
      <div id="modal" class="modal__view">
        <span>${message}</span>
      </div>
    `;
      return setTimeout(() => {
        const modal = document.getElementById('modal')
        modal.classList.add("modal__hide")
        setTimeout(() => rootElement.removeChild(modal), 3000)
      }, 5000)

    }
  }
  return
};

/**
 * @typedef {Object} DetectLazyTags
 * @property {boolean} debug
 */

/**
 * @param {DetectLazyTags} options - Function for detect lazy tags
 */

const detectLazyTags = ({ debug }) => {
  if (lazy.length !== 0) {
    showModalWindow({
      message: `Yay we detected ${lazy.length} lazy :)`,
      debug: debug
    })
    return lazyLoadAlgorithm({ entities: images })
  } else {
    return showModalWindow({
      message: `Lazy Images: Please enter some 1 lazy`,
      debug: debug
    })
  }
}

export {
  showModalWindow,
  detectLazyTags
}