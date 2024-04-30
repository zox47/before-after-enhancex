document.getElementById('uploadFirst').addEventListener('change', function() {
  handleFileUpload(this.files[0], 'first-img');
});

document.getElementById('uploadSecond').addEventListener('change', function() {
  handleFileUpload(this.files[0], 'second-img');
});

function handleFileUpload(file, targetImgId) {
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;
      img.onload = function() {
        document.getElementById(targetImgId).src = e.target.result;
      }
    }
    reader.readAsDataURL(file);
  }
}
