const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return function () {
    let context = this, args = arguments
    let later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callnow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callnow) func.apply(context, args)
  }
}

const images = document.querySelectorAll('.slide-in')

const checkSlide = (event) => {
  console.count(event)
}

window.addEventListener('scroll', debounce(checkSlide))

// images.forEach(image => {
//   image.addEventListener('', checkSlide)
// })