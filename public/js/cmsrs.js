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

                const el2 = document.querySelector('#lang');
                this.lang = el2.dataset.lang;

                //-----comments----
                //TODO - no comments in page
                axios.get('/api/comments/'+this.page_id).then( function (response){
                        self.comments = response.data.data;
                });

                //---gallery---
                // axios.get('/api/page/'+this.page_id+'/'+this.lang).then( function (response){
                //         self.page = response.data.data;
                //         self.images = self.page.images.slice(0, LOAD_NUM);
                // });
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
                }
                
        }
});