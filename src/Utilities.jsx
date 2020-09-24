const handleCopyToClipboard = (str) => {
  // Creating virtual textarea to select msg
  let textArea = document.createElement('textarea')
  textArea.value = str
  document.body.appendChild(textArea)

  // Selects the input and executes the 'COPY' command
  textArea.select()
  document.execCommand('copy')

  // Removing virtual textarea
  document.body.removeChild(textArea)
}

const getRandomColor = () => {
  let hexNum = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hexNum[Math.floor(Math.random() * hexNum.length)]
  }
  return color
}

const convertHexToRgb = (hex) => {
  let r = hex.slice(1, 3),
    g = hex.slice(3, 5),
    b = hex.slice(5, 7)
  const toRgb = (val) => parseInt(val, 16)

  return `rgb(${toRgb(r)}, ${toRgb(g)}, ${toRgb(b)})`
}

const convertRgbtoHex = (rgb) => {
  const color = rgb.match(/\d+/g)
  let r = color[0],
    g = color[1],
    b = color[2]
  const toHex = (value) => {
    let val = parseInt(value)
    let hex = val.toString(16)
    return val < 16 ? '0' + hex : hex
  }

  return '#' + toHex(r) + toHex(g) + toHex(b)
}

const convertToCompliment = (hex) => {
  let r = hex.slice(1, 3)
  let g = hex.slice(3, 5)
  let b = hex.slice(5, 7)

  const toCom = (value) => {
    let val = parseInt('FF', 16) - parseInt(value, 16)
    const hex = val.toString(16)
    return val < 16 ? '0' + hex : hex
  }

  return `#${toCom(r) + toCom(g) + toCom(b)}`
}

export {
  convertToCompliment,
  convertRgbtoHex,
  convertHexToRgb,
  getRandomColor,
  handleCopyToClipboard,
}
