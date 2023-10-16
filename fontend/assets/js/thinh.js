document.getElementById('regist').addEventListener('click', function(){
    document.getElementById('popup').style.display = 'block';

    console.log('ab')
});

// JavaScript function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}