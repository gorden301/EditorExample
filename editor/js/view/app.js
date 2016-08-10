define(["jquery",
    "underscore",
    "backbone",
    "collection/textimgs",
    "view/textimg",
    "view/article",
    "view/img"
],function ($,_,Backbone,textimgs,TextImgView,articleView,imgView) {
    window.list = new textimgs ();
    var AppView = Backbone.View.extend({
        el:$("body"),
        events:{
            "click .first":"add",
            "click .second":"add",
            "click .third":"add"
        },
        initialize: function () {
            this.list = this.$(".main_editor");
           // _.bindAll(this,"render","add","loadList","save");
            list.on("add",this.add);
        },
        add: function (e) {
            if(e.currentTarget.className == "first"){
                var view = new TextImgView();
            } else if (e.currentTarget.className == "second") {
                var view = new articleView();
            } else {
                var view = new imgView();
            }
            this.list.append(view.render().el);
        },
    });
    return AppView;
})
