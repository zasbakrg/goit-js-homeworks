/*
 * - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре, 
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */
'use strict';
let name = 'Генератор защитного поля';
let price = 1000;
let massage;
price = 2000;
massage = `Выюран "${name}", цена за штуку ${price} кредитов`;
console.log(massage);
