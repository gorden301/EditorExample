define(["jquery","underscore","backbone","text!template/itemheader.html"],function ($,_,Backbone,itemTemplate) {
    var TextImgView = Backbone.View.extend({
        el:".main_editor",
        template: _.template(itemTemplate),
        initialize: function(){
            _.bindAll(this,"render","remove")
        },
        render: function () {
            var html = this.template();
            $(this.el).append(html);
            return this;
        },
        remove: function () {
            $(this.el).remove();
        }
    });
    return TextImgView;
})
