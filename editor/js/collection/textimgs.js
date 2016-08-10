define( ["underscore","backbone","backboneLocalstorage","module/textimg"] , function (_,Backbone,Store,TextImg) {
    var TextImgList = Backbone.Collection.extend({
        model:TextImg,
        localStorage: new Store("textimgs")
    });
    return TextImgList;
} )
