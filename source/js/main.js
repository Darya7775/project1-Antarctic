import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  const breakpoint = window.matchMedia('(min-width:767px)');

  // Header

  const header = document.querySelector('.header');
  const headerButton = header.querySelector('.header__button');
  const headerList = header.querySelector('.header__list');
  const headerButtonText = header.querySelector('.header__text');
  const headerLogo = header.querySelector('.header__logo');
  const headerLinks = header.querySelectorAll('.header__link');
  const mainContainer = document.querySelector('.main__container');
  const overlay = header.querySelector('.header__overlay');
  const body = document.querySelector('body');

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      headerList.style.display = 'flex';
    } else {
      headerList.style.display = 'none';
    }
  };

  breakpoint.addEventListener('change', breakpointChecker);
  breakpointChecker();

  headerButton.addEventListener('click', () => {
    if (headerButton.getAttribute('data-state') === 'active') {
      body.classList.remove('menu-opened');
      overlay.style.display = 'none';
      headerLogo.style.marginLeft = '0';
      mainContainer.style.paddingLeft = '';
      headerList.style.display = 'none';
      headerButton.setAttribute('data-state', '');
      headerButtonText.textContent = 'Открыть меню';
    } else {
      body.classList.add('menu-opened');
      overlay.style.display = 'block';
      headerLogo.style.marginLeft = '20px';
      mainContainer.style.paddingLeft = '35px';
      headerList.style.display = 'flex';
      headerButton.setAttribute('data-state', 'active');
      headerButtonText.textContent = 'Закрыть меню';
    }
  });

  overlay.addEventListener('click', () => {
    body.classList.remove('menu-opened');
    overlay.style.display = 'none';
    headerLogo.style.marginLeft = '0';
    mainContainer.style.paddingLeft = '';
    headerList.style.display = 'none';
    headerButton.setAttribute('data-state', '');
    headerButtonText.textContent = 'Открыть меню';
  });

  headerLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.remove('menu-opened');
      headerList.style.display = 'none';
      overlay.style.display = 'none';
      headerLogo.style.marginLeft = '0';
      mainContainer.style.paddingLeft = '';
      headerList.style.display = 'none';
      headerButton.setAttribute('data-state', '');
      headerButtonText.textContent = 'Открыть меню';
      const id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  // Form
  const telephones = document.querySelectorAll('input[type="tel"]');

  const prefixNumber = (str) => {
    if (str === '7') {
      return '7 (';
    }
    if (str === '8') {
      return '7 (';
    }
    if (str === '9') {
      return '7 (';
    }
    return '7 (';
  };

  // ---------------
  for (let i = 0; i < telephones.length; i++) {
    telephones[i].addEventListener('input', () => {
      const value = telephones[i].value.replace(/\D+/g, '');
      const numberLength = 11;

      let result;
      if (telephones[i].value.includes('+8') || telephones[i].value[0] === '8') {
        result = '';
      } else {
        result = '+';
      }

      //
      for (let j = 0; j < value.length && j < numberLength; j++) {
        switch (j) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[j];
      }
      //
      telephones[i].value = result;
    });
  }

  const form = document.querySelector('.form');
  const formCheckbox = form.querySelector('#checkbox');
  const formLabel = form.querySelector('#label-checkbox');

  form.addEventListener('submit', (evt) => {
    if (formCheckbox.checked === false) {
      evt.preventDefault();
      formLabel.style.boxShadow = '0 0 0 3px red';
    }

    if (telephones[0].value.length < 18) {
      evt.preventDefault();
      telephones[0].style.boxShadow = '0 0 0 3px red';
    }
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
