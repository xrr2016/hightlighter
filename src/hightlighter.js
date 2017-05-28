const body = document.body || document.documentElement.body

const defaultOpts = {
  container: body,
  backgroundColor: '#59b9c6',
  color: '#ffffff'
}

class HightLighter {
  constructor(opts = {}) {
    this.opts = opts
    for (let key in defaultOpts) {
      if (defaultOpts.hasOwnProperty(key) && this.opts[key] === 'undefined') {
        this.opts[key] = defaultOpts[key]
      }
    }
    this.bindEvent(this.opts.container)
  }

  getSelection() {
    if (window.getSelection) {
      const selection = window.getSelection().toString()
      return selection
    }
  }

  markText(opts) {
    const mainContent = opts.container.innerHTML
    const selectedText = this.getSelectedText()
    const markText = `<span style="background-color: ${opts.backgroundColor};                     color: ${opts.color};">${selectedText}</span>`
    opts.container.innerHTML = mainContent.replace(selectedText, markText)
  }

  bindEvent(container) {
    container.addEventListener('mouseup', this.markText)
  }

}

const hightlight = (opts) => {
  return new HightLighter(opts)
}

export default hightlight