//header fixing

window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;

    if(window.innewidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}