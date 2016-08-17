define(["jquery",
    "underscore",
    "backbone",
    "model",
    "collection",


],function ($,_,Backbone,textimg,textimgs) {
    window.list = new textimgs ();
    var AppView = Backbone.View.extend({
        el:$("body"),
        //events:{
        //    "click .first":"add",
        //    "click .second":"add",
        //    "click .third":"add"
        //},
        initialize: function () {
            console.log("1111");
            //this.itemCollection = new textimgs();
            this.list = this.$(".main_editor");
            this.listenTo(list, "reset", this.addAll);
           // _.bindAll(this,"render","add","loadList","save");
            //this.listenTo(list,"add",this.add);
            //list.on("add",this.add);
        },
        //add: function (e) {
        //    if(e.currentTarget.className == "first"){
        //        var textemodel = new textimg();
        //        var view = new TextImgView({
        //            model:textemodel
        //        });
        //        list.add(textemodel);
        //    } else if (e.currentTarget.className == "second") {
        //        var articlemodel = new textimg();
        //        var view = new articleView({
        //                model:articlemodel
        //            }
        //        );
        //        list.add(articlemodel);
        //    } else {
        //        var imgemodel = new textimg();
        //        var view = new imgView({
        //            model:imgemodel
        //        });
        //        list.add(imgemodel);
        //    }
        //   // this.list.append(view.render().el);
        //},
        addAll: function() {
            list.each(this.add, this);
        }
    });
    return AppView;
})
