document.getElementById('upload').addEventListener('change', handleImage, false);
document.getElementById('download').addEventListener('click', downloadImage, false);

function handleImage(e) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // Apply watermark
            const watermarkText = "HABIB SHILLA SILVIA";
            ctx.font = "70px serif";
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            ctx.textAlign = "center";
            ctx.fillText(watermarkText, canvas.width / 2, canvas.height / 2);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}

function downloadImage() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.download = 'watermarked-image.png';
    link.href = canvas.toDataURL();
    link.click();
}
