function initTiny() {
    tinymce.init({
        selector: "#textdir",
        menu: {
            view: {title: 'Edit', items: 'cut,copy,paste'}
        },
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | code',
        height: 300,
        statusbar: false,
        plugins: 'code'
    })
}
var timer;
function changetext(obj){
    clearInterval(timer);
    timer = null;
    initTiny();
    if(!tinyMCE.activeEditor) return;
    //if(obj[0].children[1].children[0]){
    //    var content = obj[0].children[1].children[0].innerHTML;
    //} else {
    //    var content = obj[0].children[1].innerHTML;
    //}
    tinyMCE.activeEditor.setContent(obj[0].children[1].innerHTML);

    timer = setInterval(function(){
        var temp = tinyMCE.activeEditor.getContent();
       // obj.find(".text-align-center").html(temp);
        obj[0].children[1].innerHTML = temp;
    },20);
}