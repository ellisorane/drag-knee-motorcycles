$(document).ready(function () {
    let currentPosition = $('.featured-scroller').position().left
    let divWidth = $('.featured-item').width()
    const margin = 20
    console.log($('.more-featured').position().left)

    // TO PREVENT IMAGE VIEWING ISSUES ON WINDOW RESIZE
    $(window).resize(function () {
        currentPosition = 0
        divWidth = $('.featured-item').width()

        $('.featured-scroller').transition({ x:`${0}px`}, 500)
    })

    //MOVE IMG WHEN THE NEXT OR PREV BTNS ARE PRESSED
    const slideImgs = () => {
        $('.scroller-prev').on('click', function () {
            console.log(currentPosition)
            currentPosition = currentPosition + (divWidth + margin)
            if (currentPosition > 0) {
                currentPosition = -( ( $('.featured-item').length - 1 ) * ( (divWidth) + margin ) )
            }
            $('.featured-scroller').transition({ x:`${currentPosition}px`}, 500)
        })

        $('.scroller-next').on('click', function () {
            console.log(currentPosition)
            currentPosition = currentPosition - (divWidth + margin)
            if ( currentPosition < -( $('.featured-item').length * (divWidth)) ) {
                currentPosition = 0
            }
            $('.featured-scroller').transition({ x:`${currentPosition}px`}, 500)
        })
    }

    slideImgs()
})