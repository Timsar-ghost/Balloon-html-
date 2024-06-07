let popped =0;


document.addEventListener('mouseover', function(e){
    if(e.target.className === "balloon"){
        e.target.style.backgroundColor="#ededed";
        e.target.textContent="POP!";
        popped++;
        removeEvent(e);
        checkAllPopped();
    }
});

function removerEvent(e){
    e.target.removeEventListener('mouseover', function(){
    })

};

function checkAllPopped(){
    if(popped ===24){
        console.log('all popped!');
        let gallery = document.querySelector('#ballon-gallery');
        let message = document.querrySelctor('#yay-no-ballons');
        gallery.innerHTML = '';
        message.style.display ='block';
    }
};
function checkAllPopped(){
    if(popped ===4){
        console.log('all popped!');
        let gallery = document.querySelector('#ballon-gallery');
        let message = document.querrySelctor('#yay-no-ballons');
        gallery.innerHTML = '';
        message.style.display ='block';
    }
};