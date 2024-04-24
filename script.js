let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQr() {
    if (qrText.value.length > 0) {
      let bgColor = document.getElementById("bgColor").value.replace("#", "");
      let fgColor = document.getElementById("fgColor").value.replace("#", "");
  
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}&bgcolor=${bgColor}&color=${fgColor}`;
  
      imgBox.classList.add("show-img");
  
      document.querySelector(".download").style.display = "block";
    } else {
      qrText.classList.add("error");
      setTimeout(() => {
        qrText.classList.remove("error");
      }, 1000);
    }
  }
  

  function downloadQr(event) {
    event.preventDefault();
  
    if (qrImage.src !== "") {
      fetch(qrImage.src)
        .then(response => response.blob())
        .then(blob => {
          const blobUrl = window.URL.createObjectURL(blob);
  
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = "qrcode.png";
          document.body.appendChild(link);
  
          link.click();
  
          window.URL.revokeObjectURL(blobUrl);
          document.body.removeChild(link);
        })
        .catch(error => {
          console.error("Error fetching image data:", error);
        });
    }
  }
  
  

