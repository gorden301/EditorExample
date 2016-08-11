define(["jquery",
        "underscore",
        "backbone",
        "text!template/article.html"
    ],function ($,_,Backbone,articleTem) {
        var articleView = Backbone.View.extend({
            className:"tem_box",
            template: _.template(articleTem),
            events:{
                "dblclick .text-align-center":"edit",
                "blur .edit":"close",
            },
            initialize: function () {
                this.listenTo(this.model,"change",this.render);
                //this.model.on("change",this.render,this);
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
            close: function () {
                var value = this.input.val();
                if (value) {
                    this.model.save({
                        article:value,
                    });
                    this.$el.removeClass("editing");
                }
            }
        });
        return articleView;
    }
)
