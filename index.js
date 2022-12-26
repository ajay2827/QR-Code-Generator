const formEL = document.getElementById('form');
const qrcodeEL = document.getElementById('qrcode');

formEL.addEventListener('submit', function (e) {
    e.preventDefault();
    clearqrcode();
    const urlEL = document.getElementById('input').value;
    const sizeel = document.getElementById('selector').value;

    if (urlEL === '') {
        alert('Enter a URL');
    }
    else {
        
        showspinner();
        setTimeout(function () {
            hidespinner();
            qrcodegenator(urlEL, sizeel);
        }, 1000)
    }
});
function qrcodegenator(urlEL, sizeel) {
    const qrcode = new  QRCode(qrcodeEL,
        {
            text: urlEL,
            width: sizeel,
            height: sizeel,
        });
}
function showspinner() {
    document.getElementById('spinner').style.display = 'block';
}

function hidespinner() {
    document.getElementById('spinner').style.display = 'none';
}
function clearqrcode()
{
    qrcodeEL.innerHTML='';
}
// function createbutton(saveurl)
// {
//     const link=document.createElement('a');
//     link.innerHTML='PKMC';
//     document.getElementById('imgdownload').appendChild('link');
// }
hidespinner()