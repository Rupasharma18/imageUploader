document.getElementById("inputFile").addEventListener('change', imageSelect);

function imageSelect() {
  var reader = new FileReader();
  console.log(reader);
  reader.readAsDataURL(this.files[0]);
  reader.onload = function (e) {
    img = document.getElementById("selectImg");
    img.src = e.target.result;
    console.log(img, "%%%%%%%%%%5")
    displayImage();
  }
};

function displayImage() {
  new Darkroom('#selectImg', {
    minWidth: 100,
    minHeight: 100,
    maxWidth: 400,
    maxHeight: 400,
    ratio: 4 / 3,
    backgroundColor: '#000',
    plugins: {

      crop: {
        quickCropKey: 67,

      }
    },
    initialize: function () {
      var cropPlugin = this.plugins['crop'];
      cropPlugin.requireFocus();
    }
  });
}

