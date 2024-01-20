'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal)

//cek elemen tombol modal

for(let i = 0; i < btnsOpenModal.length; i++ ){
    console.log(btnsOpenModal[i])
}

for(let i = 0; i < btnsOpenModal.length; i++ ){
    console.log(btnsOpenModal[i].textContent)
}




const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal)
    
}

btnCloseModal.addEventListener('click', function (){
   closeModal();
})

overlay.addEventListener('click', function (){
    closeModal();
})

//btnClodeModal.addEventListener('click', closemodal);
//overlay.addEventListener('click', closemodal);

/*
document.addEventListener('keydown', function(e){
    console.log((e), 'A key was pressed')
});

)*/

document.addEventListener('keydown', function(e){
    //console.log((e.key), 'A key was pressed')
    if (e.key === 'Escape') {
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
});






