let cl=console.log;


const changeImg =document.getElementById("changeImg");
const allImg = Array.from(document.querySelectorAll('.all'));

const SelectImage = (eve)=>{
    let getImage =`.${eve.target.value}`
    cl(getImage);
    allImg.forEach(img =>{
        img.classList.add('d-none');
    })
    let SelectImg =Array.from(document.querySelectorAll(getImage))
    SelectImg.forEach(img =>{
        img.classList.remove('d-none')
    })
}


changeImg.addEventListener('change', SelectImage)

// let cl = console.log;

// const changeImg = document.getElementById('chnageImg');
// // cl(changeImg)
// const allImg = Array.from(document.querySelectorAll('.all'));

// const onchangeIMGHandler = eve =>{
//     let getimg = `.${eve.target.value}`;
//     // cl(getimg);
//     allImg.forEach(imgs =>{
//         imgs.classList.add('d-none') 
//     })
//     let getselectedClass = Array.from(document.querySelectorAll(getimg));
//     getselectedClass.forEach(imgs =>{
//         imgs.classList.remove('d-none');
//     })
// }



// changeImg.addEventListener('change', onchangeIMGHandler)