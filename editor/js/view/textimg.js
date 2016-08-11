define(["jquery","underscore","backbone","text!template/itemheader.html"],function ($,_,Backbone,itemTemplate) {
    var TextImgView = Backbone.View.extend({
        className:"tem_box",
        template: _.template(itemTemplate),
        events:{
            "dblclick .content_title":"edit",
            "blur .edit":"close",
            "keypress .edit":"enterClose"
        },
        initialize: function(){
            this.listenTo(this.model,"change",this.render)
        },
        render: function () {
            var html = this.template(this.model.toJSON());
            $(this.el).html(html);
            this.input = this.$(".edit");
            return this;
        },
        remove: function () {
            $(this.el).remove();
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
                    tittle:value,
                });
                this.$el.removeClass("editing");
            }
        }
    });
    return TextImgView;
})
