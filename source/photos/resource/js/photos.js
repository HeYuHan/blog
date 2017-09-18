
function ItemDetail(){
    var modal = $('#myModal');
    modal.remove();
    modal.appendTo(document.body);
    modal.click(function(){
        modal.hide();
    });
    this.modal = modal;  
    //modal.hide();       
}
ItemDetail.prototype.Show=function(item){
    //this.modal.show();
}
ItemDetail.prototype.Close=function(item){

}


function Item(title,src,desc,modalBox,info) {
    this.container = $('<div class="photo item"></div>');
    this.title = $('<h1>'+title+'</h1>');
    this.img = $('<img src="'+src+'"></img>');
    this.desc = $('<p>'+desc+'</p>');
    this.info = info;
    this.title.appendTo(this.container);
    this.img.appendTo(this.container);
    this.desc.appendTo(this.container);
    this.desc.hide();
    this.title.hide();

    this.container.click(function(){
        modalBox.Show($(this));
    });

    // var container=this.container;
    // container.mouseenter(function(){
    //     container.css({
    //         "transform":"scale(1.05,1.05)",
    //         "z-index":1000
    //     })
    // });
    // container.mouseleave(function(){
    //     container.css({
    //         "transform":"scale(1,1)",
    //         "z-index":1
    //     })
    // });
}
Item.prototype.SetTitle=function(title){
    this.title.html(title);
}
Item.prototype.SetDesc=function(desc){
    this.desc.html(desc);
}
Item.prototype.SetImage=function(src){
    this.img.attr('src',src);
}
Item.prototype.appendTo=function(parent){
    this.container.appendTo(parent);
}
Item.prototype.css=function(css){
    this.container.css(css);
}

window.onload = function(){
    var modalBox = new ItemDetail();
    var container=$('<div id="masonry";style="width:100%"></div>');
    
    container.appendTo($("#photos_script").parent());
    var width = parseInt($('#masonry').css("width"));
    for(var i=0;i<10;i++){
        var item = new Item("Title"+i,'/photos/resource/'+(i+1)+'.jpg',"xdsafasdfxxfasdf1223134542155",modalBox);
        item.appendTo(container);
        item.css({
            width:(width/2)+"px"
        })
    }
    // itemSelector     class选择器,默认'.item'，这个表示每个块的选择器 
    // columnWidth     一列的宽度 
    // isAnimated     使用jquery的布局变化,默认true 
    // animationOptions     animate属性渐变效果(Object { queue: false, duration: 500 }) 
    // gutterWidth     列的间隙 Integer 
    // isFitWidth     自适应浏览器宽度Boolean 
    // isResizableL     是否可调整大小 Boolean 
    // isRTL     使用从右到左的布局 Boolean
    container.imagesLoaded(function(){
        container.masonry({
            itemSelector:'.photo.item',
            isAnimated:true,
            isFitWidth:true
        });
    })
    
}
function init(){

}