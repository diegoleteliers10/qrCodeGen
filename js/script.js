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
      <button class="btnCopy">Download</button>
      <button class="btnCopy">Share</button>
    </div>`;

    document.querySelector('.logoQr').addEventListener('click', () => {
        window.location.reload();
    });
})
