const body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = 'rgb(6, 36, 24)'

window.onscroll = function () {
    let opacity = 1
    const scroll = window.pageYOffset
    for(let i = 0; i < 99; i++){
        if(scroll >= i * 1500 && scroll < (i + 1) * 1500){
            opacity = 0.99 - (i * 0.01)
            break;
        }
    }
    body.style.backgroundColor = 'rgba(6, 36, 24, ' + opacity + ')'
}