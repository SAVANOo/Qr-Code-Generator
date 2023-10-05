document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault();
    let link = document.getElementById("link").value;
    if (link) {
        let qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}.png`;
        imagem.setAttribute("src", `${qrcode}`);
        imagem.removeAttribute("hidden");
        document.getElementById("download").removeAttribute("hidden")
    }
});

function download() {
    let imagem = document.getElementById("imagem")
    if (imagem) {
        let linkdownload = document.createElement('a')
        linkdownload.href = imagem.src
        linkdownload.target = "_blank"
        linkdownload.download = "qrcode-download.png"
        linkdownload.type = "image/png"
        linkdownload.click()
    }
}