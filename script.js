document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        console.log(item)
        item.classList.toggle('change')
        console.log(item)
    })
});



const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;

setInterval(()=>{
    i++;
    const icon = document.querySelector('.section-1-icons .change');
    icon.classList.remove('change');


    if(i > icons.length){
        icons[0].classList.add('change');
        i = 1;
    }

    icon.nextElementSibling.classList.add('change');

},1000);