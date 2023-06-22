

let option = document.querySelector(".setting-box .two")
let mainoption = document.querySelector(".setting-box")
let mainPage = document.querySelector(".landing")
let allink = document.querySelectorAll(".links li")
let colors = document.querySelectorAll(".container .box li")
let randomspan = document.querySelectorAll(".boximgs  span")
let ransomoption = document.querySelectorAll(".box-on-of  span")
let skillsSpan = document.querySelectorAll(".skill-box .progress span")
let MSkills = document.querySelector(".skills-pro")
let allimgs = document.querySelectorAll(".our-imgs .all-img img")
let allbullet = document.querySelectorAll (".nav-bullets .bullet")
let mainbullet = document.querySelector (".nav-bullets")
let toglmen = document.querySelector(".menu")
let toglink = document.querySelector(".links")


// 

let randomOk = true;
let randomInt;
let localrandomimgs = localStorage.getItem("randomimgs")
let localrandomoption = localStorage.getItem("option")
// 




// check local-storage

function choose (){
         document.documentElement.style.setProperty ("--main-color" , localStorage.getItem("color-option"))

         colors.forEach ((e)=>{
              if(e.dataset.color === localStorage.getItem("color-option")){

                e.classList.add("on")

         }

         })
       


        }
choose()

// check local-storage





if(localrandomoption!==null){

     ransomoption.forEach((R)=>{
        R.classList.remove("active");
    })

         if(localrandomoption === "show"){
        mainbullet.style.display = "block"
        document.querySelector(".box-on-of .yes").classList.add("active")
    }else{
             mainbullet.style.display = "none"  
                     document.querySelector(".box-on-of .no").classList.add("active")

    }
    

   

    
    

}





// option
 option.onclick = function(){
    this.classList.toggle("fa-spin");
    mainoption.classList.toggle("open")
 }
// option


// option-one (color)

colors.forEach ((w)=>{

    w.addEventListener("click" , (e)=>{
        document.documentElement.style.setProperty ("--main-color" , e.target.dataset.color)
        // local-storage
         localStorage.setItem("color-option"  , e.target.dataset.color)
        // local-storage

   e.target.parentElement.querySelectorAll(".on").forEach ((e)=>{
            e.classList.remove( "on")
        })
        e.target.classList.add( "on")      
    })

})

// option-one (color)






// option-two (background>Random)


if (localrandomimgs !== null){

    if(localrandomimgs === 'true'){
        randomOk = true;
    }else{
        randomOk = false;
    }


    randomspan.forEach((e)=>{
        e.classList.remove("active")

        if(localrandomimgs === "true"){
            document.querySelector(".boximgs .random .yes").classList.add("active")
        }else{
                        document.querySelector(".boximgs .random .no").classList.add("active")

        }
    })


}




randomspan.forEach ((span)=>{
    span.addEventListener("click" , (e)=>{

        handle(e)
        if(e.target.dataset.yes){
            randomOk = true
            changeimgs()
            localStorage.setItem("randomimgs" , true)
        }else{
            randomOk = false
            clearInterval (randomInt)
            localStorage.setItem("randomimgs" , false)

        }

    })
})



ransomoption.forEach((o)=>{
    o.addEventListener("click" , (e)=>{
        handle(e)

          if(e.target.dataset.display === "show"){
            mainbullet.style.display = 'block'
            localStorage.setItem("option" , e.target.dataset.display)
    }else{
            mainbullet.style.display = 'none'
                        localStorage.setItem("option" , e.target.dataset.display)
    }
    })

})



function changeimgs (){
    if(randomOk === true){
        // change background
     let imgs = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]
     
     mainPage.style.backgroundImage ="url(/imgs/01.jpg)"
     
     
   randomInt = setInterval (()=>{

         let random  = Math.floor (Math.random() * imgs.length)
     
     mainPage.style.backgroundImage =`url(imgs/0${random}.jpg)`
     },
     1000)

// change background
    }
    
}

changeimgs()

// option-two (background>Random)



// our-skills
window.onscroll = function (){
    if(window.scrollY >= MSkills.offsetTop-MSkills.offsetHeight ){

        skillsSpan.forEach((span)=>{
            span.style.width = span.dataset.progress
        })
    }

}
// our-skills




// all-img

allimgs.forEach((im)=>{
    im.addEventListener("click" , (e)=>{

        let overlay = document.createElement ("div")
        
        overlay.className = "popup"

        document.body.appendChild(overlay)

        let centerBox = document.createElement("div")

        centerBox.className = "center-pop"

        let ig = document.createElement("img")



        
        if(im.alt !== ""){

          let title = document.createElement("h3")

        let textspan = document.createTextNode(im.alt)

        title.appendChild(textspan)


                centerBox.appendChild(title)
        }
       

        ig.src = im.src

        centerBox.appendChild(ig)





        document.body.appendChild(centerBox)




       


        



        


        window.onkeypress  = function (e){
            if(e.key === " "){
                 overlay.remove()
            centerBox.remove()
            }
            
        }


    })
})
// all-img




function ScrolL (all){
all.forEach ((li)=>{
    li.addEventListener("click" , (e)=>{
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })
    })
})
}



function handle (ev){
        ev.target.parentElement.querySelectorAll(".active" , ".on").forEach ((e)=>{
            e.classList.remove("active" , "on")
        })
        ev.target.classList.add("active" , "on")



        
}


ScrolL(allbullet)
ScrolL(allink)



document.querySelector(".reset").onclick = function(){
    localStorage.clear()
    // localStorage.removeItem("color-option")
    window.location.reload()
}



toglmen.onclick = function(e){
    e.stopPropagation() 
    
    this.classList.toggle("menu-active")

    toglink.classList.toggle("open")



    document.addEventListener ("click" , (e)=> {
    if(e.target!== toglmen && e.target!==toglink){

        if(toglink.classList.contains("open"))

         toglink.classList.remove("open")
                toglmen.classList.remove("menu-active")

       

    }
    
})
}

toglink.onclick = function(e){
e.stopPropagation()
 }



