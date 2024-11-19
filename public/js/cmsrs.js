const { createApp, ref, reactive, onMounted } = Vue;

createApp({
    setup() {
        // Reactive data
        const total = ref(0);
        const deliver_price = ref(0);
        const total_add_deliver_sanit = ref(0);
        const total_sanit = ref(0);
        const cart = reactive([]);
        const cart_length = ref(0);
        const name_and_price = ref([]);
        const products = ref([]);
        const results = ref([]);
        const comment = ref("");
        const comments = ref([]);
        const page_id = ref("");
        const lang = ref("");
        const page = reactive({});
        const images = ref([]);
        const is_shop = ref(false);
        const is_demo = ref(false);
        const commented = ref(false);

        // Contact form data
        const email = ref("");
        const emailErr = ref("");
        const message = ref("");
        const messageErr = ref("");
        const messageInfo = ref("");



        // On mounted, initialize data
        onMounted(() => {
            const el = document.querySelector("#page_id");
            page_id.value = el ? el.dataset.pageId : "";

            const el2 = document.querySelector("#lang");
            lang.value = el2 ? el2.dataset.lang : "";

            const el3 = document.querySelector("#is_shop");
            is_shop.value = el3 ? el3.dataset.isShop : false;

            const el4 = document.querySelector("#commented");
            commented.value = el4 ? parseInt(el4.dataset.commented) : false;

            const el5 = document.querySelector("#is_demo");
            is_demo.value = el5 ? el5.dataset.isDemo : false;

            if (page_id.value && commented.value) {
                axios.get("/api/comments/" + page_id.value).then((response) => {
                    comments.value = response.data.data;
                });
            }

            if (is_shop.value) {
                axios
                    .get("/api/productsGetNameAndPrice/" + lang.value)
                    .then((response) => {
                        name_and_price.value = response.data.data;
                        const storageCart = localStorage.getItem("cart")
                            ? JSON.parse(localStorage.getItem("cart"))
                            : [];
                        total.value = 0;
                        cart.length = 0;
                        storageCart.forEach((item) => {
                            const productId = item.id;
                            const dbNameAndPrice =
                                name_and_price.value[productId] || "";

                            if (dbNameAndPrice) {
                                cart.push({
                                    id: productId,
                                    qty: item.qty,
                                    name: dbNameAndPrice.name,
                                    price: dbNameAndPrice.price,
                                    url_product: dbNameAndPrice.url_product,
                                    url_image: dbNameAndPrice.url_image,
                                });
                                total.value += item.qty * dbNameAndPrice.price;
                            }
                        });
                        total_sanit.value = total.value / 100;
                        cart_length.value = cart.length;
                        saveCartToPost(cart);
                        const deliver_price = parseInt(
                            $("#deliver-old-price").val(),
                            10,
                        );                        
                        total_add_deliver_sanit.value =
                            calculateTotalAddDeliverSanit(
                                total.value,
                                deliver_price,
                            );
                    });
            }
        });

        // Methods
        const addComment = (event) => {
            if (is_demo.value) {
                event.preventDefault();
                demoAlert();
                return false;
            }
            if (!comment.value.length) {
                return false;
            }

            let content = comment.value;
            axios
                .post("/api/comments/" + page_id.value, {
                    content: comment.value,
                })
                .then((response) => {
                    comments.value.unshift({ content: content });
                })
                .catch(() => {
                    alert("err - add post");
                });
            comment.value = "";
            event.preventDefault();
            return false;
        };

        const contact = (event) => {
            if (is_demo.value) {
                event.preventDefault();
                demoAlert();
                return false;
            }
            event.preventDefault();

            function sendMsg(_token) {
                axios
                    .post("/api/contact/" + lang.value, {
                        email: email.value,
                        token: _token,
                        message: message.value,
                    })
                    .then((response) => {
                        if (response.data.success) {
                            messageInfo.value = response.data.message;
                            email.value = "";
                            emailErr.value = "";
                            message.value = "";
                            messageErr.value = "";
                        } else {
                            emailErr.value = response.data.error.email
                                ? response.data.error.email[0] || ""
                                : "";
                            messageErr.value = response.data.error.message
                                ? response.data.error.message[0] || ""
                                : "";
                        }
                    })
                    .catch(() => {
                        alert("err - contact form");
                    });
            }

            if (typeof rePublic !== "undefined") {
                grecaptcha.ready(function () {
                    grecaptcha
                        .execute(rePublic, { action: "submit" })
                        .then((token) => {
                            sendMsg(token);
                        });
                });
            } else {
                sendMsg("");
            }

            return false;
        };

        const clearMessageInfo = () => {
            messageInfo.value = "";
        };

        const toglebasket = () => {
            const basket = document.getElementById("appbasket");
            basket.style.display =
                basket.style.display === "none" ? "block" : "none";
        };

        const addToCart = (product) => {
            total.value += product.price;
            total_add_deliver_sanit.value = calculateTotalAddDeliverSanit(
                total.value,
                deliver_price.value,
            );
            let found = false;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === product.id) {
                    cart[i].qty++;
                    found = true;
                }
            }
            if (!found) {
                const dbNameAndPrice = name_and_price.value[product.id] || "";
                if (dbNameAndPrice) {
                    cart.push({
                        id: product.id,
                        name: dbNameAndPrice.name,
                        price: dbNameAndPrice.price,
                        qty: 1,
                        url_product: dbNameAndPrice.url_product,
                        url_image: dbNameAndPrice.url_image,
                    });
                }
            }
            cart_length.value = cart.length;
            saveCartToPost(cart);
            localStorage.setItem("cart", JSON.stringify(cart));
            total_add_deliver_sanit.value = calculateTotalAddDeliverSanit(
                total.value,
                deliver_price.value,
            );
        };

        const increment = (item) => {
            const existingItem = cart.find(
                (cartItem) => cartItem.id === item.id,
            );
            if (existingItem) {
                existingItem.qty++;
            } 
            //else { cart.push({ ...item, qty: 1 });} //chat propose
            total.value += item.price;
            total_sanit.value = total.value / 100;
            cart_length.value = cart.length;
            saveCartToPost(cart);
            localStorage.setItem("cart", JSON.stringify(cart));
            total_add_deliver_sanit.value = calculateTotalAddDeliverSanit(
                total.value,
                deliver_price.value,
            );
        };

        const decrement = (item) => {
            const index = cart.findIndex((cartItem) => cartItem.id === item.id);
            if (index !== -1) {
                cart[index].qty--;
                if (cart[index].qty === 0) {
                    cart.splice(index, 1);
                }
                total.value -= item.price;
                total_sanit.value = total.value / 100;
                cart_length.value = cart.length;
                saveCartToPost(cart);
                localStorage.setItem("cart", JSON.stringify(cart));
                total_add_deliver_sanit.value = calculateTotalAddDeliverSanit(
                    total.value,
                    deliver_price.value,
                );
            }
        };

        const saveCartToPost = (cart) => {
            const basketStorage = document.getElementById("basket-storage");
            if (basketStorage) {
                basketStorage.innerHTML = "";
                cart.forEach((item, index) => {
                    const inputId = document.createElement("INPUT");
                    inputId.type = "hidden";
                    inputId.name = `products[${index}][id]`;
                    inputId.value = item.id;

                    const inputQty = document.createElement("INPUT");
                    inputQty.type = "hidden";
                    inputQty.name = `products[${index}][qty]`;
                    inputQty.value = item.qty;

                    basketStorage.appendChild(inputId);
                    basketStorage.appendChild(inputQty);
                });
            }
        };

        const pay = () => {
            window.location.pathname = `/${lang.value}/checkout`; // Adjust `lang` if necessary
        };

        const deliver = (deliver) => {
            deliver_price.value = parseInt(deliver, 10);
            total_add_deliver_sanit.value = calculateTotalAddDeliverSanit(
                total.value,
                deliver_price.value,
            );
        };

        const calculateTotalAddDeliverSanit = (total, deliverPrice) => {
            return (total + deliverPrice) / 100;
        };

        const demoAlert = () => {
            alert(
                "We're sorry, but this action is not available in the demo version.",
            );
        };

        const checkout = (event) => {
            if (is_demo.value) {
              event.preventDefault();
              demoAlert();
              return false;
            }
          };        

        return {
            total,
            deliver_price,
            total_add_deliver_sanit,
            cart,
            cart_length,
            name_and_price,
            products,
            results,
            comment,
            comments,
            page_id,
            lang,
            page,
            images,
            is_shop,
            is_demo,
            commented,
            total_sanit,                        

            email,
            emailErr,
            message,            
            messageInfo,
            messageErr,

            clearMessageInfo,
            toglebasket,
            addComment,
            contact,
            addToCart,
            calculateTotalAddDeliverSanit,
            demoAlert,
            saveCartToPost,
            increment,
            decrement,
            pay,
            deliver,
            checkout,
        };
    },
}).mount("#appall");
