// NAV MENU CLICK EVENT
const menuIcon = document.querySelector(".menu-icon");
const navbarBackground = document.querySelector(".navbar-bg");
const nav = document.querySelector("nav");
const navItem = document.querySelector('.nav-item');

menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('change');
  navbarBackground.classList.toggle('change');
  nav.classList.toggle('change');
  navItem.classList.toggle('change');
});

// PRODUCT INFO "BTN" CLICK EVENT
const categoryInfoBtn = document.querySelectorAll(".cat-info_btn");

categoryInfoBtn.forEach((infoBtn) => {
  infoBtn.addEventListener("click", function() {
    this.previousElementSibling.classList.toggle("active");
  })
});

// SERVICES CATEGORY CLICK EVENT
const clickCategory = document.querySelectorAll(".cat");
const categoryDetails = document.querySelectorAll(".category-details");

for(let i = 0; i < clickCategory.length; i++) {
  clickCategory[i].addEventListener("click", function(e) {
    for(let j = 0; j < clickCategory.length; j++) {
      clickCategory[j].classList.remove('active');
      clickCategory[i].classList.add('active');
    }

    let categoryName = e.target.attributes.catName.value;
    if (categoryName === 'cat-A') {
      showAllCategory(categoryDetails);
      return;
    } else {
      showCat(categoryDetails, categoryName);
    }
  })
};

// To show All Category Content..................
function showAllCategory(catArray) {
  for (let k = 0; k < catArray.length; k++) {
    catArray[k].classList.remove('hide');
    catArray[k].classList.add('show');
  }
};

// To Show A Particular Category....................
function showCat(catArray, catName) {
  for(let a = 0; a < catArray.length; a++) {
    catArray[a].classList.add('hide');
    if(catArray[a].attributes.status.value == catName) {
      catArray[a].classList.remove('hide');
      catArray[a].classList.add('show');
    } else {
      catArray[a].classList.remove('show');
    }
  }
};

// GALLERY TRANSITION
const gallerySection = document.querySelector('.section-4');

observerOptions = { 
  threshold: .8
};

const galleryObserver = new IntersectionObserver(function(entries, galleryObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      const images = document.querySelectorAll(".gallery-carousel img");
      // console.log(images);
      let counter = 1;

      setInterval(function() {
        counter++;

        const image = document.querySelector(".gallery-carousel img.change");

        image.classList.remove('change');

        if (counter > images.length) {
          images[0].classList.add('change');
          counter = 1;
        } else {
          image.nextElementSibling.classList.add('change');
        }
      }, 2000);
      galleryObserver.unobserve(gallerySection);
    }
  })
}, observerOptions);

galleryObserver.observe(gallerySection);

// TESTIMONIAL 
const slider = document.querySelector(".testimonial-container");
const prevBtn = document.querySelector(".fa-arrow-left")
const nextBtn = document.querySelector(".fa-arrow-right")

let moveSlider = 0;

prevBtn.classList.add("hide-control");

nextBtn.addEventListener("click", function() {
  if(moveSlider === -80) {
    nextBtn.classList.add("hide-control");
    return;
  } else {
    // Slide Testimonial
    slider.style.transform = `
    translateX(${moveSlider += -20}%)`;

    // Remove-Class Function
    removeClass();
  }
});

prevBtn.addEventListener("click", function() {
  if(moveSlider === 0) {
    prevBtn.classList.add("hide-control");
    return;

  } else {
    // Slide Testimonial
    slider.style.transform = `
    translateX(${moveSlider += 20}%)`;

    // Remove-Class Function
    removeClass();
  }
});

// Function to remove Dynamic Class - "hide-control" from the Arrows
function removeClass() {
  prevBtn.classList.remove("hide-control")
  nextBtn.classList.remove("hide-control")
};

// FORM FUNCTION TO PREVENT DEFAULT
// const form = document.querySelector(".contact-form");
// form.addEventListener('submit', function(e) {
//   e.preventDefault();
// });


