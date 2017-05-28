const body = document.body || document.documentElement.body

const defaultOpts = {
  container: body,
  backgroundColor: '#59b9c6',
  color: '#ffffff',
  idLength: 10,
}

class HightLighter {
  constructor(opts = {}) {
    this.opts = opts
    this.elements = []
    for (let key in defaultOpts) {
      if (defaultOpts.hasOwnProperty(key)) {
        if (!this.opts[key]) {
          this.opts[key] = defaultOpts[key]
        }
      }
      this.randomId = this.randomId.bind(this)
    }
    this.bindEvent(this.opts.container)
  }

  markText() {
    const selectedText = window.getSelection().toString()
    const id = this.randomId(this.opts.idLength)
    if (selectedText.length > 0) {
      const mainContent = this.opts.container.innerHTML
      const markText = `<span style="background-color:${this.opts.backgroundColor};color: ${this.opts.color};" id="${id}">${selectedText}</span>`

      this.opts.container.innerHTML = mainContent.replace(selectedText, markText)
      this.elements.push(document.getElementById(id))
    }
  }

  bindEvent(container) {
    container.addEventListener('mouseup', this.markText.bind(this))
  }

  randomId(n) {
    if (n <= 0) {
      return
    }
    const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    while (id.length < n) {
      id += letters[Math.floor(Math.random() * letters.length)]
    }
    return id
  }

}

const hightlight = (opts) => {
  return new HightLighter(opts)
}

window.HightLighter = HightLighter
window.hightlight = hightlight

// export default hightlight