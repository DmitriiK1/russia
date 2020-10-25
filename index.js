const photoItems = document.querySelectorAll('.photo-grid__item');
let activeIndex = 0;

const openPopup = (index) => {
    activeIndex = index;
    activeItem = photoItems[activeIndex];
    const popup = getPopup();
    popup.classList.remove('popup_closed');
    const src = activeItem.getAttribute('data-big-src');
    popup.querySelector('.popup__inner img').setAttribute('src', src);
}

const prevSlide = () => {
    let prevIndex = activeIndex - 1;
    if(prevIndex < 0) {
        prevIndex = photoItems.length - 1;
    }
    openPopup(prevIndex);
}
const nextSlide = () => {
    let nextIndex = activeIndex + 1;
    if(nextIndex > photoItems.length - 1) {
        nextIndex = 0;
    }
    openPopup(nextIndex);
}
const closePopup = (e, popupEl)=>{
    popupEl.classList.add('popup_closed')
}

const getPopup = () => {
    let popupEl = document.querySelector('.popup');
    if(!popupEl){
        popupEl = document.createElement('div');
        popupEl.classList.add('popup');
        popupEl.innerHTML = `<div class="popup__inner">
            <img src="" alt="image" />
            <div class="popup__close">X</div>
        </div>
        <div class="popup__arrow popup__arrow_left"><</div>
        <div class="popup__arrow popup__arrow_right">></div>`
        popupEl.querySelector('.popup__arrow_left').addEventListener('click',prevSlide);
        popupEl.querySelector('.popup__arrow_right').addEventListener('click',nextSlide);
        popupEl.querySelector('.popup__close').addEventListener('click', e => closePopup(e, popupEl));
        document.body.append(popupEl);
    }
    return popupEl;
}

for (let [index, photoItem] of photoItems.entries()) {
    photoItem.addEventListener('click', (e) => openPopup(index));
}
