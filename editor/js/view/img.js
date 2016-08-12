define(["jquery",
    "underscore",
    "backbone",
    "text!template/img.tpl"
],function ($,_,Backbone,imgTem) {
    var imgView = Backbone.View.extend({
        className:".tem_box",
        template: _.template(imgTem),
        events:{
            "click img":"show",
            "click button":"change",
            "click .tem_box":"hide"
        },
        initialize: function () {
            this.listenTo(this.model,"change",this.render);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        show: function (){
            this.$el.find(".changeImg").show();
        },
        change: function (e) {
            var imgSrc = $(e.currentTarget).attr("data-src");
            if (imgSrc) {
                this.model.set({
                    src:imgSrc
                });
                this.$el.find(".changeImg").hide();
            }
        },
        hide: function () {
            this.$el.find(".changeImg").hide();
        }
    });
    return imgView;
})
