
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imageup').attr('src', e.target.result);
            $('#imageup').removeClass("hidden");
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function lgbt() {
    var active = document.getElementById('active');
    var lgbtimg = document.getElementById('image1');
    const bodydiv = document.getElementById('bodydiv');
    var activebtn = document.getElementById('activebtn');
    var lgbtbtn = document.getElementById('lgbt');

    if(lgbtimg.id == 'image1')
    {
        if(active.classList.contains('pangr'))
        {
            active.id = 'image2';
            lgbtimg.id = 'active';

            bodydiv.classList.add("bodylgbt");
            bodydiv.classList.remove("bodypan");

            lgbtbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id ='panaf';
            lgbtbtn.id = 'activebtn';
        }
        if(active.classList.contains('vetgr'))
        {
            active.id = 'image3';
            lgbtimg.id = 'active';
        
            bodydiv.classList.add("bodylgbt");
            bodydiv.classList.remove("bodyvet");

            lgbtbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id = 'veterans';
            lgbtbtn.id = 'activebtn';
        }
        if(active.classList.contains('transgr'))
        {
            active.id = 'image4';
            lgbtimg.id = 'active';

            bodydiv.classList.add("bodylgbt");
            bodydiv.classList.remove("bodytrans");

            lgbtbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id = 'trans';
            lgbtbtn.id = 'activebtn';
        }
        merge();
    }
}

function transgender() {
    var active = document.getElementById('active');
    var transimg = document.getElementById('image4');
    const bodydiv = document.getElementById('bodydiv');
    var activebtn = document.getElementById('activebtn');
    var transbtn = document.getElementById('trans');

    if(transimg.id == 'image4')
    {
        if(active.classList.contains('lgbtgr'))
        {
            active.id = 'image1';
            transimg.id = 'active';
        
            bodydiv.classList.add("bodytrans");
            bodydiv.classList.remove("bodylgbt");

            transbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id = 'lgbt';
            transbtn.id = 'activebtn';
        }
        if(active.classList.contains('pangr'))
        {
            active.id = 'image2';
            transimg.id = 'active';

            bodydiv.classList.add("bodytrans");
            bodydiv.classList.remove("bodypan");

            transbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id ='panaf';
            transbtn.id = 'activebtn';
        }
        if(active.classList.contains('vetgr'))
        {
            active.id = 'image3';
            transimg.id = 'active';
        
            bodydiv.classList.add("bodytrans");
            bodydiv.classList.remove("bodyvet");

            transbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id = 'veterans';
            transbtn.id = 'activebtn';
        }
        merge();
    }
}

function panafrican() {
    var active = document.getElementById('active');
    var panimg = document.getElementById('image2');
    const bodydiv = document.getElementById('bodydiv');
    var activebtn = document.getElementById('activebtn');
    var panbtn = document.getElementById('panaf');

    if(panimg.id == 'image2')
    {
        if(active.classList.contains('lgbtgr'))
        {
            active.id = 'image1';
            panimg.id = 'active';
        
            bodydiv.classList.add("bodypan");
            bodydiv.classList.remove("bodylgbt");

            panbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id = 'lgbt';
            panbtn.id = 'activebtn';
        }
        if(active.classList.contains('vetgr'))
        {
            active.id = 'image3';
            panimg.id = 'active';
        
            bodydiv.classList.add("bodypan");
            bodydiv.classList.remove("bodyvet");

            panbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id = 'veterans';
            panbtn.id = 'activebtn';
        }
        if(active.classList.contains('transgr'))
        {
            active.id = 'image4';
            panimg.id = 'active';

            bodydiv.classList.add("bodypan");
            bodydiv.classList.remove("bodytrans");

            panbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id = 'trans';
            panbtn.id = 'activebtn';
        }
        merge();
    }
}

function veterans() {
    var active = document.getElementById('active');
    var vetimg = document.getElementById('image3');
    const bodydiv = document.getElementById('bodydiv');
    var activebtn = document.getElementById('activebtn');
    var vetbtn = document.getElementById('veterans');

    if(vetimg.id == 'image3')
    {
        if(active.classList.contains('lgbtgr'))
        {
            active.id = 'image1';
            vetimg.id = 'active';
        
            bodydiv.classList.add("bodyvet");
            bodydiv.classList.remove("bodylgbt");

            vetbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id = 'lgbt'
            vetbtn.id = 'activebtn';
        }
        if(active.classList.contains('pangr'))
        {
            active.id = 'image2';
            vetimg.id = 'active';

            bodydiv.classList.add("bodyvet");
            bodydiv.classList.remove("bodypan");

            vetbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id ='panaf';
            vetbtn.id = 'activebtn';
        }
        if(active.classList.contains('transgr'))
        {
            active.id = 'image4';
            vetimg.id = 'active';

            bodydiv.classList.add("bodyvet");
            bodydiv.classList.remove("bodytrans");

            vetbtn.classList.add("btn-glow");
            activebtn.classList.remove("btn-glow");

            activebtn.id = 'trans';
            vetbtn.id = 'activebtn';
        }
        merge();
    }
}

function merge() {
    var imgCanvas = document.getElementById('active');
    var toMerge = document.getElementById('imageup');

    var canvas = document.getElementById('canvas');
    $('#imageup').addClass("hidden");
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