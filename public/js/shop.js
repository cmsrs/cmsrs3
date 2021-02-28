new Vue({
        el: "#app",
        data: {
                total: 0,
                cart: [],               
                products: [],
                results: [],
                comment: '',
                comments: [],
                page_id: '',
                lang: '',                                
                page : {},
                images: []


        },
        created() {             
                let self = this;
                const el = document.querySelector('#page_id');
                this.page_id = el.dataset.pageId;

                const el2 = document.querySelector('#lang');
                this.lang = el2.dataset.lang;


                //----shop----
                this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
                this.total = 0;
                for (var i = 0; i < this.cart.length; i++) {
                        this.total += this.cart[i].qty * this.cart[i].price;
                }
        },
        methods: {
                addToCart: function(product) {
                        this.total += product.price;
                        var found = false;
                        for (var i = 0; i < this.cart.length; i++) {
                                if (this.cart[i].id === product.id) {
                                        this.cart[i].qty++;
                                        found = true;
                                }
                        }
                        if (!found) {
                                this.cart.push({
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        qty: 1
                                });
                        }
                        localStorage.setItem('cart', JSON.stringify(this.cart));
                },
                increment: function(item) {
                        for (var i = 0; i < this.cart.length; i++) {
                                if (this.cart[i].id === item.id) {
                                        this.cart[i].qty++;
                                }
                        }
                        this.total += item.price;
                        localStorage.setItem('cart', JSON.stringify(this.cart));                        
                },
                decrement: function(item) {
                        var indexToDel = false;
                        for (var i = 0; i < this.cart.length; i++) {
                                if (this.cart[i].id === item.id) {
                                        this.cart[i].qty--;
                                        if(this.cart[i].qty === 0 ){
                                                indexToDel = i;
                                        }
                                }
                        }
                        if(indexToDel !== false){
                                this.cart.splice(indexToDel, 1);
                        }

                        this.total -= item.price;
                        localStorage.setItem('cart', JSON.stringify(this.cart));                        
                },
                pay: function(){
                        //alert('TODO payment=$'+this.total);
                        //window.location.href = 'http://127.0.0.1:8000/home/basket';
                        window.location.pathname = "/home/basket";                        
                }
                
        }
});