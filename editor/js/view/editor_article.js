define(["jquery",
    "underscore",
    "backbone",
    "text!template/editor.html"
],function ($,_,Backbone,editor) {
    var editor = Backbone.View.extend({
        el:$(".edit_right"),
        template:_.template(editor),
        initialize:function () {
            this.$el.html(this.template(this.model.toJSON()));
        },

    });
    return editor;
})
