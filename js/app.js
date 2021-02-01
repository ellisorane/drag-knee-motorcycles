$(document).ready(function () {
    //SLIDE NAV
    const navSlide = () => {
        const burger = document.querySelector('.burger')
        const navLinksDiv = document.querySelector('.nav-links')
        const navLinks = document.querySelectorAll('.nav-links li')
    
        burger.addEventListener('click', () => {
            // TOGGLE NAV 
            navLinksDiv.classList.toggle('nav-active')
    
            // ANIMATE LINKS 
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                }
            })
    
            //BURGER ANIMATION
            burger.classList.toggle('toggle')
        })
    }
    navSlide()

    $.ajax({url: "https://drag-knee-data.free.beeceptor.com", success: function(result){
        console.log(result)
        // $('.catsDiv').html(() => {
        //     result.motorcycles.forEach(data => {
        //         `<p>${data.make}</p>`
        //     })
        // })
    }})
})