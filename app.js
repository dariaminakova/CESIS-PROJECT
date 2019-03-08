// filter section 

let filterItem = document.querySelector('.filter-list');

filterItem.addEventListener ('click', filter);

function filter (e) {
    let filterlList = e.target.getAttribute('data-filter');
    let div = document.getElementsByClassName('all');

    for(let i=0; i< div.length; i++){
        if(div[i].classList.contains(filterlList)){
            div[i].style.display='';
        } else
            {div[i].style.display='none'}
    }
}
