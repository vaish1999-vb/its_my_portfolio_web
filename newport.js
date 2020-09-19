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

const navbar = document.querySelector(".navbar");
      a.forEach(function(element){
          element.addEventListener("click",function(){
              for(Let i=0; i<a.lenght; i++){
                  a[i].classList.remove("active");
              }
              this.classList.add("active")
              document.querySelector(".navbar").classList.toggle("show");
          })
      })


// hum-burger

const hamBurger=document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");
})