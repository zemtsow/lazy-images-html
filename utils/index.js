

/**
 * @typedef {Object} ShowModalWindowParams
 * @property {string} message
 * @property {boolean} debug
 */

/**
 * @param {ShowModalWindowParams} HTMLElement
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

export {
  showModalWindow
}