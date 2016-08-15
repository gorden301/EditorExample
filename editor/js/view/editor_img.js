define(["jquery",
    "underscore",
    "backbone",
    "text!template/editor_img.html"
],function ($,_,Backbone,imgTem) {
    var editor_img = Backbone.View.extend({
        el:$(".edit_right"),
        template:_.template(imgTem),
        events:{
          "click img":"changeSrc"
        },
        initialize:function () {
            this.render();

        },
        render:function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        changeSrc: function (e) {
            var imgSrc = $(e.currentTarget).attr("src");
            if (imgSrc) {
                this.model.set({
                    src:imgSrc
                });
            }
        }
    });
    return editor_img;
})
