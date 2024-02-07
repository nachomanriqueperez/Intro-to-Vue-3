app.component('product-details', {
    props: {
        details: {
            color: "green",
            price: 2.99
        },
    },
    template:
        /*html*/
        `<div class="product-details"><ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>`
    ,
})