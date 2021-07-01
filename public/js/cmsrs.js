new Vue({
        el: "#appall",
        data: {
                total: 0,
                deliver_price: 0,
                total_add_deliver_sanit: 0,
                cart: [],               
                cart_length: 0,
                name_and_price: [],
                products: [],
                results: [],
                comment: '',
                comments: [],
                page_id: '',
                lang: '',                                
                page : {},
                images: [],
                is_shop: false,
                commented : false,

                //contact
                email: '',
                emailErr: '',                
                message: '',
                messageErr: '',                
                messageInfo: ''

        },
        created() {             
                let self = this;
                const el = document.querySelector('#page_id');
                this.page_id = el ? el.dataset.pageId : '';

                const el2 = document.querySelector('#lang');
                this.lang = el2 ? el2.dataset.lang : '';

                const el3 = document.querySelector('#is_shop');
                this.is_shop = el3 ? el3.dataset.isShop : false;

                const el4 = document.querySelector('#commented');
                this.commented = el4 ? parseInt(el4.dataset.commented) : false;
                

                //-----comments----
                //TODO - no comments in page
                if(this.page_id && this.commented ){
                        axios.get('/api/comments/'+this.page_id).then( function (response){
                                self.comments = response.data.data;
                        });        
                }

                //---gallery---
                // axios.get('/api/page/'+this.page_id+'/'+this.lang).then( function (response){
                //         self.page = response.data.data;
                //         self.images = self.page.images.slice(0, LOAD_NUM);
                // });

                //----shop----
                self.name_and_price = [];

                if(this.is_shop){
                        axios.get('/api/productsGetNameAndPrice/'+this.lang).then( function (response){
                                self.name_and_price = response.data.data;
                                const storageCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
                                self.total = 0;
                                self.cart = [];
                                for (var i = 0; i < storageCart.length; i++) {
                                        const productId = storageCart[i].id;
                                        const dbNameAndPrice = self.name_and_price[productId] ? self.name_and_price[productId] : '';

                                        if(dbNameAndPrice){
                                                self.cart.push({
                                                        id: productId,
                                                        qty: storageCart[i].qty,
                                                        name: dbNameAndPrice.name,
                                                        price: dbNameAndPrice.price,
                                                        url_product : dbNameAndPrice.url_product,
                                                        url_image : dbNameAndPrice.url_image,
                                                });        
                                                self.total += storageCart[i].qty * dbNameAndPrice.price;
                                        }
                                }
                                self.total_sanit = self.total / 100;                
                                self.cart_length = self.cart.length;        
                                self.saveCartToPost(self.cart);
                                const deliver_price =   parseInt($("#deliver-old-price").val(), 10 );
                                self.total_add_deliver_sanit = self.calculateTotalAddDeliverSanit(self.total, deliver_price);
                        });
                }
        },

        methods: {
                addComment: function( event){
                        let pageId = this.page_id;
                        if(!this.comment.length){
                                        return false;
                        }
                        let self = this;
                        let content =  this.comment

                        //TODO -  uniq key
                        axios.post('/api/comments/'+pageId, {
                                        content: this.comment
                        }).then( function (response){
                                        self.comments.unshift({
                                                        content: content
                                        });
                        })
                        .catch(function (error) {
                                        alert('err - add post')
                        });                     
                        this.comment = '';      
                        if (event) {
                                        event.preventDefault()
                        }
                        return false;
                },
                contact: function( event){
                        let self = this;
                        if (event) {
                                event.preventDefault();
                        }

                        function sendMsg( _self, _token ){
                                axios.post('/api/contact/'+_self.lang, {
                                        email: _self.email,
                                        token: _token,
                                        message: _self.message
                                }).then( function (response){
                                        if( response.data.success ){
                                                _self.messageInfo = response.data.message;
                                                _self.email = '';
                                                _self.emailErr = '';
                                                _self.message = '';
                                                _self.messageErr = '';
                                        }else{
                                                _self.emailErr = response.data.error.email ? (response.data.error.email[0] || ''): '';
                                                _self.messageErr = response.data.error.message ? (response.data.error.message[0] || ''): '';
                                        }
                                })
                                .catch(function (error) {
                                        alert('err - contact form');
                                });                     
                        }
                        
                        if(typeof rePublic  !== 'undefined'  ){
                                grecaptcha.ready(function() {
                                    grecaptcha.execute(rePublic,  {action: 'submit'}  ).then(function(token) {
                                                sendMsg( self, token );
                                    });
                                });
                        }else{
                            sendMsg( self, '' );
                        }
              
                        
                       return false;
                },
                clearMessageInfo: function(){
                        this.messageInfo = '';
                },


                /* shop - start*/
                toglebasket: function(){
                        //if(this.total_sanit){
                                document.getElementById("appbasket").style.display = (document.getElementById("appbasket").style.display === 'none') ? 'block' : 'none';
                        //}                        
                },        

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
                                const dbNameAndPrice = this.name_and_price[product.id] ? this.name_and_price[product.id] : '';
                                if(dbNameAndPrice){
                                        this.cart.push({
                                                id: product.id,
                                                name: dbNameAndPrice.name,
                                                price: dbNameAndPrice.price,
                                                qty: 1,
                                                url_product : dbNameAndPrice.url_product,
                                                url_image : dbNameAndPrice.url_image
                                        });        
                                }
                        }
                        this.cart_length = this.cart.length;

                        this.saveCartToPost(this.cart);
                        localStorage.setItem('cart', JSON.stringify(this.cart));
                        //this.total_add_deliver_sanit = (this.total + this.deliver_price)/100;

                        this.total_add_deliver_sanit = this.calculateTotalAddDeliverSanit(this.total, this.deliver_price);
                },
                increment: function(item) {
                        for (var i = 0; i < this.cart.length; i++) {
                                if (this.cart[i].id === item.id) {
                                        this.cart[i].qty++;
                                }
                        }
                        this.total += item.price;
                        this.total_sanit = this.total / 100;                        
                        this.cart_length = this.cart.length;

                        this.saveCartToPost(this.cart);
                        localStorage.setItem('cart', JSON.stringify(this.cart));                        
                        //this.total_add_deliver_sanit = (this.total + this.deliver_price)/100;
                        this.total_add_deliver_sanit = this.calculateTotalAddDeliverSanit(this.total, this.deliver_price);
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
                        this.cart_length = this.cart.length;                        

                        this.saveCartToPost(this.cart);
                        localStorage.setItem('cart', JSON.stringify(this.cart)); 
                        //this.total_add_deliver_sanit = (this.total + this.deliver_price)/100;
                        this.total_add_deliver_sanit = this.calculateTotalAddDeliverSanit(this.total, this.deliver_price);
                },
                saveCartToPost: function(cart) {

                        if( document.getElementById("basket-storage") ){
                                document.getElementById("basket-storage").innerHTML = "";
                                for (var i = 0; i < cart.length; i++) {
        
                                        var inputId = document.createElement("INPUT");
                                        inputId.type = "hidden";
                                        inputId.name = "products["+i+"][id]";
                                        inputId.value = cart[i].id;
        
                                        var inputQty = document.createElement("INPUT");
                                        inputQty.type = "hidden";
                                        inputQty.name = "products["+i+"][qty]";
                                        inputQty.value = cart[i].qty;
        
                                        $("#basket-storage").append(inputId);
                                        $("#basket-storage").append(inputQty);                                                
                                }        
                        }

                },

                pay: function(){
                        //alert('TODO payment=$'+this.total);
                        //window.location.href = 'http://127.0.0.1:8000/home/basket';
                        window.location.pathname =  "/" + this.lang + "/checkout";  //todo - change if one lang.
                },
                deliver: function( deliver ){
                        //this.deliver_price =  parseInt( deliver, 10 );
                        this.deliver_price =  parseInt( deliver, 10 );
                        this.total_add_deliver_sanit = this.calculateTotalAddDeliverSanit(this.total, this.deliver_price);
                },

                calculateTotalAddDeliverSanit: function(total, deliver_price){
                        return (total + deliver_price)/100;
                }


                /*
                tobank: function(){
                        const el = document.querySelector('#token');
                        const token = el ? el.dataset.token : '';
                        //alert('token' + token);

                        axios.post(
                                //'/home/api/tobank?token='+token,
                                '/home/api/checkout',
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
                */               
                
        }
});