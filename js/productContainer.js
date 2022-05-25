const allproductsContainer = document.querySelector('.product-container');

const productContainer = p => {
  p.forEach((p, i) => {
    // console.log(p.name);
    // console.log(p.src);

    const html = `        <div class="product-each-container">
      <h3 class="header-3">${p.name}</h3>
      <div class="product-img">
        <img src="${p.src}" alt="" />
      </div>
      <div prod-btn>
        <button class="prod-see-details prod-link" data-set=${i}>See details</button>
        <a class="prod-see-msds prod-link" href="${p.msds}" target="_blank">MSDS</a>
        <a class="prod-see-fda prod-link" href="${p.fda}" target="_blank">FDA</a>
      </div>
    </div>`;

    allproductsContainer.insertAdjacentHTML('beforeend', html);

    // btnFda();
  });
};

//////////pop-up
const popUp = document.querySelector('.pop-container');
const btnPop = document.querySelector('.btn-pop');
const popImg = document.querySelector('.pop-img');
const popHeader = document.querySelector('.pop-up-header');
const overlay = document.querySelector('.overlay');
const popPrice = document.querySelector('.pop-price');
const popDescription = document.querySelector('.pop-description');
const ingredients = document.querySelector('.ingredients');

const seeDetails = function (p) {
  const prod = document.querySelectorAll(`.prod-see-details`);
  prod.forEach((fda, i) =>
    fda.addEventListener('click', function () {
      console.log(`See details of ${p[i].name}`);
      // alert(p[i].name);
      popImg.src = `${p[i].src}`;
      popUp.classList.remove('hidden');
      popHeader.innerHTML = `${p[i].name}`;
      overlay.classList.remove('hidden');
      popPrice.innerHTML = `P${p[i].srp}`;
      popDescription.innerHTML = `${p[i].info}`;
      ingredients.innerHTML = `${p[i].ingredients}`;
    })
  );
};

const closePop = () => {
  popUp.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnPop.addEventListener('click', function (e) {
  e.preventDefault();
  closePop();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !popUp.classList.contains('hidden')) {
    closePop();
  }
});

overlay.addEventListener('click', closePop);
