window.addEventListener('load', function(){
    document.querySelector('input[type="file"]').addEventListener('change', function(){
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  
            img.src = URL.createObjectURL(this.files[0]); 
            // img.onload = imageIsLoaded;
        }
    })



})



new Darkroom('#target', {
  // Canvas initialization size
  minWidth: 100,
  minHeight: 100,
  maxWidth: 500,
  maxHeight: 500,

  // Plugins options
  plugins: {
    crop: {
      minHeight: 50,
      minWidth: 50,
      ratio: 1
    },
    save: false // disable plugin
  },

  // Post initialization method
  initialize: function() {
    // Active crop selection
    this.plugins['crop'].requireFocus();

    // Add custom listener
    this.addEventListener('core:transformation', function() { /* ... */ });
  }
});


// function clickinner(target) { 
//     location.href='upload.html';
// }



