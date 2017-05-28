const main = document.getElementById('main')

function getSelectedText() {
  if (window.getSelection) {
    const selection = window.getSelection().toString()
    return selection
  }
}

function markText(event) {
  const mainContent = main.innerHTML 
  const selectedText = getSelectedText()
  const markText = `<mark>${selectedText}</mark>`
  main.innerHTML = mainContent.replace(selectedText, markText) 
}

main.addEventListener('mouseup', markText)