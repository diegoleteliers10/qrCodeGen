document.querySelector('.butonQr').addEventListener('click',()=>{
    // Obtener el valor del input
    var url = document.querySelector('.inputCont').value;

    // Crear un nuevo elemento canvas para el código QR
    var qr = document.createElement('canvas');

    var landContainer = document.querySelector('.landContainer');

    // Inicializar la librería QRious
    new QRious({
        element: qr,
        value: url,
        size: 200
    });

    landContainer.innerHTML = '';
    landContainer.innerHTML= `
    <img src="images/bg-illustration.svg" alt="backgroundSVg" class="backSvg">
    <img class="logoQr" src="/images/logo-qr-generator.svg" alt="qr">
    <div class="circle">
      <div class="qrContainer">
        <img src="${qr.toDataURL()}" alt="qrUrl">
      </div>
    </div>
    <div class="buttonsCont">
      <button class="btnDownload">
        Download
        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="none" stroke-width="1.5" viewBox="0 0 24 24" color="#ffffff"><path stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M6 20h12M12 4v12m0 0 3.5-3.5M12 16l-3.5-3.5"></path></svg>
      </button>
      <button class="btnCopy">
        Share
        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="none" stroke-width="1.5" viewBox="0 0 24 24" color="#ffffff"><path stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 0 0 1.143.124"></path><path stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M10 11.998c0 2.491 2.317 4.997 5.143 4.997h1.714c2.84 0 5.143-2.237 5.143-4.997 0-2.379-1.71-4.37-4-4.874A5.304 5.304 0 0 0 16.857 7"></path></svg>
      </button>
    </div>`;

    document.querySelector('.logoQr').addEventListener('click', () => {
        window.location.reload();
    });

    document.querySelector('.btnDownload').addEventListener('click', () => {
        var link = document.createElement('a');
        link.download = 'qr.png';
        link.href = qr.toDataURL();
        link.click();
    })

    document.querySelector('.btnCopy').addEventListener('click', ()=>{
        var copyText = url;
        navigator.clipboard.writeText(copyText);
        alert('Copied the text: ' + copyText);
    })
})
