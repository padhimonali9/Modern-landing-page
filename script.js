 var page1Content = document.querySelector("#page1-content")
 var cursor = document.querySelector("#cursor")

 page1Content.addEventListener("mousemove" ,function(dets){

    cursor.style.left = dets.x+"px"
    cursor.style.top  =dets.y+"px"

 })

 gsap.to("cursor",{
   x:500,
   y:500
 })



 

 page1Content.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
 })

 page1Content.addEventListener("mouseenter", function(){
   gsap.to(cursor,{
       scale:1,
       opacity:1
   })
})
page1Content.addEventListener("mouseenter", function(){
   gsap.to(cursor,{
       scale:0,
       opacity:0
   })
})
 


 
 

 

 

 



 

 

 

 
 
        
    
 
    
 


    
    

 
 