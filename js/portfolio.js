const $items = document.getElementsByClassName('item')
const $feature = document.getElementById('feature')
const $featureImage = $feature.querySelector('.image')
const $featureText = $feature.querySelector('.text')
const $row = document.getElementById('row')

function randomColour() {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  const RGB = `(${red},${green},${blue})`
  return RGB
}

window.addEventListener('load', function () {
  if (window.innerWidth >= 800) {
    $feature.style.maxHeight = `${window.innerHeight / 1.75}px`
    for (const item of $items) {
      item.style.maxHeight = `${window.innerHeight / 4}px`
      item.style.minWidth = `${window.innerHeight / 4}px`
    }
  }
})

window.addEventListener('resize', function () {
  if (window.innerWidth >= 800) {
    $feature.style.maxHeight = `${window.innerHeight / 1.75}px`
    for (const item of $items) {
      item.style.maxHeight = `${window.innerHeight / 4}px`
      item.style.minWidth = `${window.innerHeight / 4}px`
    }
  }
})

for (const item of $items) {
  item.style.backgroundColor = `rgb${randomColour()}`
}
$featureImage.style.backgroundColor = $items[0].style.backgroundColor

$row.addEventListener('click', function (e) {
  if (e.target.classList.contains('item')) {
    $featureImage.style.backgroundColor = e.target.style.backgroundColor
    clearInterval(rotation)
  }
})

$row.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('item')) {
    $featureImage.style.backgroundColor = e.target.style.backgroundColor
    $featureText.textContent = e.target.style.backgroundColor
  }
})

$feature.addEventListener('click', function () {
  for (const item of $items) {
    item.style.backgroundColor = `rgb${randomColour()}`
  }
  $featureImage.style.backgroundColor = $items[0].style.backgroundColor
})

let itemCount = 0

const rotation = setInterval(function () {
  if (itemCount >= $items.length) {
    itemCount = 0
  } else {
    $featureImage.style.backgroundColor = $items[itemCount].style.backgroundColor
    $featureText.textContent = $items[itemCount].style.backgroundColor
    itemCount++
  }
}, 5000)