define(["jquery",
    "underscore",
    "backbone",
    "text!template/editor_img.html"
],function ($,_,Backbone,imgTem) {
    var editor_img = Backbone.View.extend({
        el:$(".edit_right"),
        template:_.template(imgTem),
        //events:{
        //  "click img":"changeSrc"
        //},
        initialize:function () {
            this.render();
            var this_model = this.model;
        },
        render:function () {
            this.$el.html(this.template(this.model.toJSON()));
            var that = this;
            this.$el.find("img").click(function(){
                var imgSrc = $(this).attr("src");
                if (imgSrc) {
                    that.model.set({
                        src:imgSrc
                    });
                }
            })
            return this;
        },
        changeSrc: function (e) {
            var imgSrc = $(e.currentTarget).attr("src");
            if (imgSrc) {
                this_model.set({
                    src:imgSrc
                });
            }
        }
    });
    return editor_img;
})
