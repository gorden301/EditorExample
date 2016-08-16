define( ["underscore","backbone","backboneLocalstorage","model","articleview","imgView"] , function (_,Backbone,Store,TextImg,articleView,imgView) {
    var TextImgList = Backbone.Collection.extend({
        model:TextImg,
        //localStorage: new Store("textimgs-backbone"),
        initialize: function () {
            this.on("add",function(model){
                if (model.get("type") == "txt") {
                   var view =  new articleView({
                        model:model
                    });
                    //$(".main_editor").append(view.render().el)
                } else{
                   var view =  new imgView({
                        model:model
                    });
                    //$(".main_editor").append(view.render().el)
                }
            })
        }
    });
    return TextImgList;
} )
