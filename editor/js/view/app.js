define(["jquery","underscore","backbone","collection/textimgs","view/textimg"],function ($,_,Backbone,textimgs,TextImgView) {
    window.list = new textimgs ();
    var AppView = Backbone.View.extend({
        el:$("body"),
        events:{
            "click .first":"add"
        },
        initialize: function () {
            this.list = this.$(".main_editor");
           // _.bindAll(this,"render","add","loadList","save");
            list.on("add",this.add);
        },
        add: function (model) {
            var view = new TextImgView({model:model});
            this.list.append(view.render().el);
        },
        loadList: function () {
            list.each(this.add);
        }
    });
    return AppView;
})
