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
  images.forEach(image => {
    // Halfway through the image
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2
    console.log(slideInAt)
    // bottom of the image
    const imageBottom = image.offsetTop + image.height
    const isHalfShown = slideInAt > image.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active')
    } else {
      image.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide))
