const accordianTitles = document.querySelectorAll('.accordian-title');

accordianTitles.forEach((accordianTitle)=>{

   
    accordianTitle.addEventListener('click',()=>{

        const height = accordianTitle.nextElementSibling.scrollHeight;

        accordianTitle.classList.toggle('active-header');
        if(accordianTitle.classList.contains('active-header')){
            accordianTitle.nextElementSibling.style.maxHeight= `${height}px`;
        } else {
            accordianTitle.nextElementSibling.style.maxHeight= "0px";
           

        }



    });


});