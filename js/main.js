function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#image2').attr('src', e.target.result);
            $('#image2').removeClass("hidden");
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function merge() {
    var imgCanvas = document.getElementById('image1');
    var toMerge = document.getElementById('image2');

    var canvas = document.getElementById('canvas');
    $('#image2').addClass("hidden");
    $('#divhidden').addClass("hidden");
    canvas.classList.remove("hidden");

    var context = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 500;

    context.globalAlpha = 1.0;
    context.drawImage(toMerge, 0, 0, 500, 500);
    context.globalAlpha = 1.0;
    context.drawImage(imgCanvas, 0, 0, 500, 500);
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })