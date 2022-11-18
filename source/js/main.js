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

  const headerButton = document.querySelector('.header__button');
  const headerList = document.querySelector('.header__list');
  const headerButtonText = document.querySelector('.header__text');
  const headerLogo = document.querySelector('.header__logo');

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
      headerLogo.style.display = 'block';
      headerList.style.display = 'none';
      headerButton.setAttribute('data-state', '');
      headerButtonText.textContent = 'Открыть меню';
    } else {
      headerLogo.style.display = 'none';
      headerList.style.display = 'flex';
      headerButton.setAttribute('data-state', 'active');
      headerButtonText.textContent = 'Закрыть меню';
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
