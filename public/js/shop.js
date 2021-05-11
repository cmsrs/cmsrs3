new Vue({
        el: "#app",
        data: {
                total: 0,
                total_sanit: 0,
                cart: [],               
                products: [],
                results: [],
                comment: '',
                comments: [],
                //page_id: '',
                //lang: '',                                
                page : {},
                images: []


        },
        created() {        
                //let self = this;
                //const el = document.querySelector('#page_id');
                //this.page_id = el ? el.dataset.pageId : '';
                //const el2 = document.querySelector('#lang');
                //this.lang = el2 ?  el2.dataset.lang : '';


                //----shop----
                this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
                this.total = 0;
                for (var i = 0; i < this.cart.length; i++) {
                        this.total += this.cart[i].qty * this.cart[i].price;
                }
                this.total_sanit = this.total / 100;
        },
        methods: {
                addToCart: function(product) {
                        this.total += product.price;
                        this.total_sanit = this.total / 100;
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
                                        //price_sanit: product.price / 100,                                        
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
                        this.total_sanit = this.total / 100;
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
                        this.total_sanit = this.total / 100;
                        localStorage.setItem('cart', JSON.stringify(this.cart));                        
                },
                pay: function(){
                        //alert('TODO payment=$'+this.total);
                        //window.location.href = 'http://127.0.0.1:8000/home/basket';
                        window.location.pathname = "/home/basket";                        
                },
                tobank: function(){
                        const el = document.querySelector('#token');
                        const token = el ? el.dataset.token : '';
                        //alert('token' + token);

                        axios.post(
                                '/home/api/tobank?token='+token,
                                {cart: this.cart},
                                {
                                  headers: {
                                    'Accept': 'application/json'
                                  }
                                }).then(function (response) {

                                        if(response.data.success){
                                                window.location = response.data.data; // full URI to redirect to
                                        }else{
                                                alert(response.data.error);
                                        }
                                                                                
                                }).catch(function (error) {
                                        alert('Error - try later');
                                });                                                        
                                
                }
                
        }
});