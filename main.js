const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        deleteFromCart(id){
            this.cart.splice(0,id)
        }
    }
})
