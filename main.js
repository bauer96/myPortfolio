
const icon = document.getElementById('moon-icon');

icon.onclick = function() {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        icon.src = "ressoures/img/moon.png";
        
    } else {
        icon.src = "ressoures/img/sun.png";
       
    }
}