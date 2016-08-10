define(["jquery",
    "underscore",
    "backbone",
    "text!template/img.tpl"
],function ($,_,Backbone,imgTem) {
    var imgView = Backbone.View.extend({
        className:".tem_box",
        template: _.template(imgTem),
        events:{
            "click img":"post",
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        post: function () {

        }
    });
    return imgView;
})
