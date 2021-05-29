new Vue({
        el: "#appall",
        data: {
                total: 0,
                cart: [],               
                cart_length: 0,
                products: [],
                results: [],
                comment: '',
                comments: [],
                page_id: '',
                lang: '',                                
                page : {},
                images: [],

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

                //-----comments----
                //TODO - no comments in page
                if(this.page_id){
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
                this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
                this.total = 0;
                for (var i = 0; i < this.cart.length; i++) {
                        this.total += this.cart[i].qty * this.cart[i].price;
                }
                this.total_sanit = this.total / 100;                
                this.cart_length = this.cart.length;
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


                /* shop */
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
                                this.cart.push({
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        //price_sanit: product.price / 100,                                        
                                        qty: 1
                                });
                        }
                        this.cart_length = this.cart.length;
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
                        this.cart_length = this.cart.length;
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
                        this.cart_length = this.cart.length;                        
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