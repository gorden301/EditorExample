define(["jquery",
    "underscore",
    "backbone",
    "view/editor_img",
    "text!template/img.tpl"
],function ($,_,Backbone,editor_img,imgTem) {
    var imgView = Backbone.View.extend({
        className:".tem_box",
        template: _.template(imgTem),
        events:{
            "click img":"show",
            "click button":"change",
            "click body":"hide",

        },
        initialize: function () {
            //this.listenTo(this.model,"change",this.render);
            this.model.on("change",this.render,this);
            this.$el.hover(function (){
                $(this).addClass("hover")
            },function () {
                $(this).removeClass("hover")
            })
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        show: function (){
            var show  = new editor_img({model:this.model});
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
