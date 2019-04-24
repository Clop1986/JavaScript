var yourBudget = prompt('Ваш бюджет?');
var nameShop = prompt('Название вашего магазина?');
var mainList = {
    budget: yourBudget,
    shop: nameShop,
    shopGoods: [],
    employers: {
        one: 'Вася',
        two: 'Дима',
        three: 'Оля'
    },
    property: 'open'
}
mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?');
console.log(mainList);
alert('Ваш бюджет на 1 день ' + yourBudget / 30 + 'р.')