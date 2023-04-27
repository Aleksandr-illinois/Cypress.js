describe('Автотесты покупку товаров', function () {
    it('Выбор товара, добавление в корзину, изменение колличества,оформление заказа', function () {
         cy.visit('https://huntingpony.com/'); 
         cy.get('[data-index="8"] > .header__collections-controls > .header__collections-link').click();
         cy.contains('Ошейник "Пони-макарони" Винный');
         cy.get('.collection-order > .button');
         cy.get('[data-product-id="338937003"] > .product-preview__content > .product-preview__area-bottom').click();
         cy.contains('Размер');
         cy.get('.btn-icon');
         cy.get('[data-product-id="338934770"] > .product-preview__content > .product-preview__area-bottom').click();
         cy.contains('Графитовый');
         cy.get('.add-cart-counter__btn').click();
         cy.contains('В корзине 1 шт');
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.micro-alert-item');
         cy.get('.add-cart-counter__detail').click();
         cy.contains('Промокод');
         cy.get('.cart-controls > .button').click();
         cy.contains('Оформление заказа');
     })
})
