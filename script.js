const leftPrev = document.getElementById("content-switcher-1")
const rightPrev = document.getElementById("content-switcher-2")


const firstSlide = document.getElementById("first-container")
const secondSlide = document.getElementById("second-container")

// console.log(leftPrev)

leftPrev.addEventListener('click', () => {
    firstSlide.style.display = "none"
    secondSlide.style.display = "block"
})


rightPrev.addEventListener('click', () => {
    secondSlide.style.display = "none"
    firstSlide.style.display = "block"

})