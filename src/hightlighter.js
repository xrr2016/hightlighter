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

  markText() {
    const selectedText = window.getSelection().toString()
    const mainContent = this.opts.container.innerHTML
    const markText = `<span style="background-color:${this.opts.backgroundColor};color: ${this.opts.color};">${selectedText}</span>`
    
    this.opts.container.innerHTML = mainContent.replace(selectedText, markText)
  }

  bindEvent(container) {
    container.addEventListener('mouseup', this.markText.bind(this))
  }

}

const hightlight = (opts) => {
  return new HightLighter(opts)
}

window.hightlight = hightlight

// export default hightlight