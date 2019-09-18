new Vue({
	el: "#app",
	data: {
		total: 0,
		cart: [],		
		products: [],
		results: []
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
        }
	}
});
