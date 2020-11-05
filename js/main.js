
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#image3').attr('src', e.target.result);
            $('#image3').removeClass("hidden");
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function lgbt() {
    var lgbtimg = document.getElementById('image2');
    var panimg = document.getElementById('image1');
    const bodydiv = document.getElementById('bodydiv');
    var lgbtbtn = document.getElementById('lgbt');
    var panbtn = document.getElementById('panaf');

    if(lgbtimg.id == 'image2')
    {
        lgbtimg.id = 'image1';
        panimg.id = 'image2';
    
        bodydiv.classList.add("bodylgbt");
        bodydiv.classList.remove("bodypan");

        lgbtbtn.classList.add("btn-glow");
        panbtn.classList.remove("btn-glow");

    }
}

function panafrican() {
    var lgbtimg = document.getElementById('image1');
    var panimg = document.getElementById('image2');
    const bodydiv = document.getElementById('bodydiv');
    var lgbtbtn = document.getElementById('lgbt');
    var panbtn = document.getElementById('panaf');

    if(panimg.id == 'image2')
    {
        lgbtimg.id = 'image2';
        panimg.id = 'image1';
    
        bodydiv.classList.add("bodypan");
        bodydiv.classList.remove("bodylgbt");

        panbtn.classList.add("btn-glow");
        lgbtbtn.classList.remove("btn-glow");
    }
}

function merge() {
    var imgCanvas = document.getElementById('image1');
    var toMerge = document.getElementById('image3');

    var canvas = document.getElementById('canvas');
    $('#image3').addClass("hidden");
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