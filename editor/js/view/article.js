define(["jquery",
        "underscore",
        "backbone",
        "view/editor_article",
        "text!template/article.html"
    ],function ($,_,Backbone,editor_article,articleTem) {
        var articleView = Backbone.View.extend({
            className:"tem_box",
            template: _.template(articleTem),
            events:{
                "dblclick .text-align-center":"edit",
                "blur .edit":"close",
                "keypress .edit":"enterClose",
                "click .text-align-center":"matchMce"
            },
            initialize: function () {
                //this.listenTo(this.model,"change",this.render);
                //this.model.on("change",this.render,this);
                this.model.on("change",this.render,this);
                this.$el.hover(function (){
                    $(this).addClass("hover")
                },function () {
                    $(this).removeClass("hover")
                })
            },
            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                this.input = this.$(".edit");
                return this;
            },
            edit: function () {
                this.$el.addClass("editing");
                this.input.focus();
            },
            enterClose: function (e) {
                if (e.keyCode != 13) return;
                var value = this.input.val();
                if (value) {
                    this.model.set({
                        tittle:value,
                    });
                    this.$el.removeClass("editing");
                }
            },
            close: function () {
                var value = this.input.val();
                if (value) {
                    this.model.set({
                        article:value,
                    });
                    this.$el.removeClass("editing");
                }
            },
            matchMce: function () {
                var article = new editor_article({model:this.model});
                this.model.set("callback",changetext(this.$el))
            }
        });
        return articleView;
    }
)
