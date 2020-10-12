var LOAD_NUM = 18;
//var LOAD_NUM = 9;
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var currentImgId = '';


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
                this.page_id = el.dataset.pageId;

                //-----comments----
                //TODO - no comments in page
                axios.get('/api/comments/'+this.page_id).then( function (response){
                        self.comments = response.data.data;
                });

                //----shop----
                this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
                this.total = 0;
                for (var i = 0; i < this.cart.length; i++) {
                        this.total += this.cart[i].qty * this.cart[i].price;
                }

                //---gallery---
                axios.get('/api/page/'+this.page_id).then( function (response){
                        self.page = response.data.data;
                        self.images = self.page.images.slice(0, LOAD_NUM);
                });


        },
        mounted () {
                this.scroll()
        },              
        methods: {
                clickImg: function(imgId, org, alt){
                        modal.style.display = "block";
                        modalImg.src = org;
                        currentImgId = imgId;
                        captionText.innerHTML = alt;   
                },

                scroll: function() {
                        window.onscroll = () => {
                                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
                        
                                if (bottomOfWindow) {

                                        if(this.images.length < this.page.images.length) {
                                                var toAppend = this.page.images.slice(
                                                this.images.length,
                                                LOAD_NUM + this.images.length
                                                );
                                                this.images = this.images.concat(toAppend);
                                        }                                                                

                                }
                        }
                },

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
                        alert('TODO payment=$'+this.total);
                },
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

                        axios.post('/api/contact', {
                                email: this.email,
                                message: this.message
                        }).then( function (response){
                                if( response.data.success ){
                                        self.messageInfo = response.data.message;
                                        self.email = '';
                                        self.emailErr = '';
                                        self.message = '';
                                        self.messageErr = '';
                                }else{
                                        self.emailErr = response.data.error.email ? (response.data.error.email[0] || ''): '';
                                        self.messageErr = response.data.error.message ? (response.data.error.message[0] || ''): '';
                                }
                        })
                        .catch(function (error) {
                                alert('err - contact form');
                        });                     
                        
                        if (event) {
                                event.preventDefault()
                        }
                        return false;
                },
                clearMessageInfo: function(){
                        this.messageInfo = '';
                }
                
        }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
        modal.style.display = "none";
}
function plusSlides(direct){
        for (var i = 0; i < images.length; i++) {
                if( images[i].id === currentImgId ){
                        var index = i + direct;
                        if(index < 0){
                                index = images.length -1;
                        }
                        if(index > images.length - 1){
                                index = 0;
                        }
                        if(images[index]){
                                modalImg.src = images[index].org;
                                currentImgId = images[index].id;
                                captionText.innerHTML = images[index].alt;   
                                break;        
                        }                
                }
        }
}