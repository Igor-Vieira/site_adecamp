window.onscroll = function () {
    animate()
}

const header = document.getElementById('myHeader')
const button = document.getElementById('myButton')
const icon = document.getElementById('myIcon')

const topo = header.offsetTop

function animate() {
    if(window.pageYOffset > topo) {
        header.classList.add("stickyheader")
        button.classList.add("stickybutton")
        icon.classList.add("stickyicon")
    } else {
        header.classList.remove("stickyheader")
        button.classList.remove("stickybutton")
        icon.classList.remove("stickyicon")
    }
}