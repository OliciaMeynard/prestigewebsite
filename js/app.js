'use strict';

////////NAV BUTTON MENU/////////
const navOpen = document.querySelector('.btn-mobile-nav');
const outerNav = document.querySelector('.outer-nav');
navOpen.addEventListener('click', function (e) {
  e.preventDefault();
  outerNav.classList.toggle('nav-open');
});

outerNav.addEventListener('click', function (e) {
  const link =
    e.target.classList.contains('nav-link') ||
    e.target.classList.contains('nav-link-btn');
  if (!link) return;
  if (link) {
    outerNav.classList.remove('nav-open');
  }
});

///////NEW ARRAY FOR PRODUCTS///////

const slicedProducts = products.slice(0, 4);

/////////////////////SLIDER/////////////////
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function (e) {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};
const prevSlide = function (e) {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

dotContainer.addEventListener('click', function (e) {
  const clicked = e.target.classList.contains('.dots__dot');
  console.log(e.target);
  const { slide } = e.target.dataset;
  goToSlide(slide);
  activateDot(slide);
});

const init = function () {
  goToSlide(0);
  createDots();

  activateDot(0);
};
init();

setInterval(function () {
  nextSlide(curSlide);
}, 2000);

productContainer(slicedProducts);
seeDetails(slicedProducts);

////////////////////SLIDER 2 FADE
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slider2 = document.querySelector('.slider-2');
const slides2 = document.querySelectorAll('.slidee');

let curSlide2 = 0;

// for (let [s, i] of slides2.entries()) {
//   console.log(i, `slidee-${s}`);
// }

const maxSlide2 = slides2.length;

const nextSlide2 = slide => {
  if (curSlide2 === maxSlide2 - 1) {
    curSlide2 = 0;
  } else {
    curSlide2++;
  }

  slides2.forEach(s => s.classList.remove('opaci1'));
  document.querySelector(`.slidee-${curSlide2 + 1}`).classList.add('opaci1');
};

const prevSlide2 = slide => {
  if (curSlide2 === 0) {
    curSlide2 = maxSlide2 - 1;
  } else {
    curSlide2--;
  }

  slides2.forEach(s => s.classList.remove('opaci1'));
  document.querySelector(`.slidee-${curSlide2 + 1}`).classList.add('opaci1');
};

next.addEventListener('click', nextSlide2);
prev.addEventListener('click', prevSlide2);

setInterval(() => {
  nextSlide2();
}, 2000);

////////////////////////////////////////////////////////////
// console.log(allproductsContainer.children);
// const prods = [...allproductsContainer.children];
// console.log(prods);
// // console.log(prods[0].querySelector('h3').textContent);
// prods.forEach((p, i) => {
//   console.log(p.querySelector('h3').textContent.toLowerCase());
// });

// const ppp = [
//   ...prods.filter(p =>
//     p.querySelector('h3').textContent.toLowerCase().includes('set')
//   ),
// ];

// console.log(ppp.forEach(p => (p.style.display = 'none')));
