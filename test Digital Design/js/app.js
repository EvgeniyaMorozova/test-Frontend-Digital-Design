// кнопка назад для прокрутки страницы наверх
let btnUp = document.querySelector('.btn-up');

function show() {
    btnUp.classList.remove('btn-up_hide');
}

function hide() {
    btnUp.classList.add('btn-up_hide');
}

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 600) { 
        show();
    } else {
        hide();
    }
});

btnUp.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
};

// переключение темной и светлой темы
let btn = document.querySelector('.btn-toggle');

btn.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});

// вывод даты размещения на сайте
function getDayInfo() {
    let date = new Date();
    //день недели
    let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'воскресенье'];
    let day = days[date.getDay() - 1];
    // номер недели месяца
    let week = Math.ceil( date.getDate() / 7) + ' неделя';
    // месяц
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let month = months[date.getMonth()];
    // год
    let yaer = date.getFullYear() + ' года';
    // дата
    let fullDate = day + ', ' + week + ' ' + month + ' ' + yaer;
    return fullDate;
}

let publicationDate = document.querySelectorAll('.date');
publicationDate.forEach((div) => {
    div.innerHTML = getDayInfo(document.lastModified) ;
})

// модальные окна
let popupBg = document.querySelector('.popup-bg'); 
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.btn-buy');
let popupBuyBtn = document.querySelector('.popup-buy');
let popupCloseBtn = document.querySelector('.popup-close');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        popupBg.classList.add('shown'); 
        popup.classList.add('shown');
    })

    popupCloseBtn.addEventListener('click', (e) => {
        popupBg.classList.remove('shown'); 
        popup.classList.remove('shown');
    })
});

popupBuyBtn.addEventListener('click', (e) => {
    popupBg.classList.remove('shown'); 
    popup.classList.remove('shown');
    alert('Заказ оформлен');
})
