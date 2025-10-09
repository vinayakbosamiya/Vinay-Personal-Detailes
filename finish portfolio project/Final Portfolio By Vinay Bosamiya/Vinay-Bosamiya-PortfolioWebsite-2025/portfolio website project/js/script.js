// typing animation
let typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// A-side
const nav =document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,  // this come in array form
            allSection = document.querySelectorAll(".section"),
                totalSection = allSection.length
        for(let i = 0; i<totalNavList;i++)
        {
            // console.log(navList[i]);
            const a = navList[i].querySelector("a");
            
            // console.log(a);
            a.addEventListener("click",function() {
                // console.log(this)
                // for(let i = 0; i<totalSection;i++)
                // {
                //     allSection[i].classList.remove("back-section")
                // }
                removeBackSection(); // above loop is passed in this function
                for(let j = 0;j<totalNavList;j++)
                {
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        // console.log("back-section" + navList[j].querySelector("a"))
                        // allSection[j].classList.add("back-section")  
                        addBackSection(j) // above line no. 33 is passed in this function
                    }
                    let d = navList[j].querySelector("a").classList.remove("active")
                    // console.log("this is ",d)
                }
                this.classList.add("active")
                showSection(this)
                if(window.innerWidth <  1200)
                {
                    asideSectionTogglerBtn();
                }
            })

        }
        function removeBackSection(){
            for(let i = 0; i<totalSection;i++)
                {
                    allSection[i].classList.remove("back-section")
                }
        }
        function addBackSection(num){
            allSection[num].classList.add("back-section")  
        }
        function showSection(element)
        {
            for(let i = 0; i<totalSection;i++)
            {
                allSection[i].classList.remove("active")
            }
            const href = element.getAttribute("href").split("#") 
            let target = href[1]
            "this is",document.querySelector("#" + target).classList.add("active")
            // console.log(target)
        }
        function updateNav(element)
        {
            for(let i =0; i<totalNavList;i++)
            {
                navList[i].querySelector("a").classList.remove("active");
                const href = element.getAttribute("href").split("#") 
                let target = href[1]
                    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                        navList[i].querySelector("a").classList.add("active");
                    }
            }
        }
        document.querySelector(".hire-me").addEventListener("click",function(){
            const sectionIndex = this.getAttribute('data-section-index');
            // console.log(sectionIndex )
           showSection(this);
           updateNav(this);
           removeBackSection();
           addBackSection(sectionIndex)
        })

        const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".a-side");
            navTogglerBtn.addEventListener("click",()=>{
                asideSectionTogglerBtn() 
            })
            function asideSectionTogglerBtn() {
                aside.classList.toggle("open")
                navTogglerBtn.classList.toggle("open");
                for (let i = 0; i < totalSection; i++) {
                    allSection[i].classList.toggle("open");
                }
            }

            /*==== Mail function script code  start ====*/
           

            /*==== Mail function script code  end ====*/
            
            
            
            
            
            
            
            
            
            
            
            
            
            /*==== Mail function script code  start ====*/
            //     function sendMail(){
                //         let params = {
                    //           from_name: document.getElementById("name").value,
                    //           email_id: document.getElementById("email").value,
                    //           subject: document.getElementById("subject").value,
                    //           message: document.getElementById("message").value
                    //         }
                    
        //         emailjs.send("service_8uxy4yo","template_4h6fsrc",params)
        //         .then(function(res){
            //             alert("✅ Message sent successfully!");
            //             // alert(`<div class="alert alert-success" role="alert">Email sent successfully!</div>`);
            //         }, function(err){
                //             alert("❌ Failed to send message.");
                // //             alert(`<div class="alert alert-danger" role="alert">
                // //     Failed to send email.
                // //   </div>`);
                //         });
                //       }
/*==== Mail function script code  end====*/

