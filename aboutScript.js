const accordians = document.querySelectorAll(".accordian");
accordians.forEach((accordian)=>{
    accordian.addEventListener("click" , function(){
        this.classList.toggle('active');
    })
})