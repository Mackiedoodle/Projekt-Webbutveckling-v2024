
var isToggled = false;

document.getElementById('myButton').addEventListener('click', function() {
    if (isToggled){
        this.style.backgroundColor = 'wheat';
        this.textContent = 'Testa att klicka på mig!!!';
    }
    else {
        this.style.backgroundColor = 'pink';
        this.textContent = 'Denna knapp gör inget förutom att byta färg :)'
    }

    isToggled =!isToggled;
    
});




