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

//ADDS COMMAS TO NUMBERS >= 1000
const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

$(document).ready(function () {

    // GET JSON DATA TO POPULATE THE WEBPAGE WITH ITEMS 
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "./js/data.json",
        success: function (result) {
            //CATEGORIES ARE FOR THE RESULT FILTER BUTTONS
            let categories = []
            result.forEach(data => {
                categories.push(data.make)
                categories.push(data.condition)

                $('.inventory').append(`
                    <div class="item">
                        <a href="#">
                            <div class="imgArea" style="background-image: url(${data.imgs[0]});">
                                <div class="priceDiv">
                                    <p class="price">$${formatNumber(data.price)} <span class="imgsLength">📷${data.imgs.length}</span></p>
                                </div>
                            </div>
                            <div class="itemInfoContainer">
                                <div class="itemInfo">
                                    <div class="itemName"><strong>${data.year} ${data.make} ${data.model}</strong></div>
                                    <div class="condition">${data.condition}</div>
                                    <div class="mileage">Mileage: ${data.mileage} miles</div>
                                    <div class="color">Color: ${data.color}</div>
                                    <div class="desc">
                                    <p>Description: ${data.description.substring(0, 100)}</p>
                                </div>
                                </div>
                                <div class="itemBtnContainer">
                                    <button class="itemBtn">✉ Email</button> <button class="itemBtn">☎ Call</button> 
                                </div>
                            </div>
                        </a>
                    </div>
                `)
            })

            categories = new Set(categories)
            categories.forEach((cat) => {
                $('.catsBtnContainer').append(`<button class="catsBtn">${cat} +</button>`)
            })
            $('#filter').on('click', function () {
                $('.catsDiv').slideToggle()
            })
            

        }
    })
    
})