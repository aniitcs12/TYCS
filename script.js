let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');


            });
        }

    });
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

function fadeOut(){
    setInterval(loader, 3000);
  }

  window.onload = fadeOut;

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#search-icon').onclick = () => {
        document.querySelector('#search-form').classList.toggle('active');
    };

    document.querySelector('#close').onclick = () => {
        document.querySelector('#search-form').classList.remove('active');
    };

    // Search functionality
    document.querySelector('#search-box').oninput = function () {
        let query = this.value.toLowerCase();
        let elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6'); // Add elements you want to search within

        elements.forEach(el => {
            let text = el.innerText.toLowerCase();
            if (text.includes(query) && query !== "") {
                el.style.backgroundColor = "yellow"; // Highlight the matched text
            } else {
                el.style.backgroundColor = ""; // Remove highlight if it doesn't match
            }
        });
    };
});


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
   
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5200,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
 
  });



  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        addToCart();
    });
});

let cartCount = 0; // Initialize cart count

function addToCart() {
    cartCount++; // Increment count
    updateCartDisplay(); // Call function to update display
}

function updateCartDisplay() {
    const cartIcon = document.querySelector('.fa-shopping-cart');
    cartIcon.textContent = cartCount; // Update cart display
}














