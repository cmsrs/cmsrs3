new Vue({
       el: "#app",
       data: {
               total: 0,
               cart: [],               
               products: [],
               results: [],
               comment: '',
               comments: [],
               page_id: ''
       },
       created() {             
               const el = document.querySelector('#page_id');
               this.page_id = el.dataset.pageId;

               let self = this
               //TODO - no comments in page
               axios.get('/api/comments/'+this.page_id).then( function (response){
                       self.comments = response.data.data;
               });
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
               },
               increment: function(item) {
                       item.qty++;
                       this.total += item.price;
               },
               decrement: function(item) {
                       item.qty--;
                       this.total -= item.price;
				},
				pay: function(){
					alert('TODO payment='+this.total);
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
								self.comments.push({
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
				}
			}
});
	