let menuIcon = document.querySelector('#menu-icon');
 let navbar =document.querySelector('.navbar'); 
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.foreach(sec=>{
         let top=window.scrollY;
         letoffset = sec.offsetTop - 150;
         let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset +height){
            navlinks.foreach(links=> 
            {
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classlist.add('active')
            }
            )
        }
  
    
    }



    )
}


menuIcon.onlclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classlist.toggle('active');

}