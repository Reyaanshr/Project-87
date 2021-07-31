var canvas = new fabric.Canvas("myCanvas");
block_img_width = 30;
block_img_height = 40;
block_x = 10;
block_y = 10;

function new_image (get_image){
    fabric.Image.formURL(get_image, function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: block_y,
            left: block_x,
        })
    canvas.add(block_img_object);
    })
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
}

if(keyPressed == '82'){
    new_image("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcB2T1rn9M2aYjoDaOisedfDkqxTq91ndR2Q&usqp=CAU");
}

if(keyPressed == '71'){
    new_image("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-_VjS9Y_bHG8xFrZc5gYXiaMvMSfS8kBJQ&usqp=CAU");
}

if(keyPressed == '89'){
    new_image("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64Vf6-WjsN-e-UMK32zHL0kBPkhm3qiMfQZqY2r8vVJHFVeDhXsvFPmME2eAHM4tE0Lo&usqp=CAU");
}

if(keyPressed == '80'){
    new_image("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNR41qmApe3Sr1lnAZnqe1ATgbXY_Y96Rlu0eeD3K7WK7AHa_E1us2exGJq9bEkz-bek&usqp=CAU");
}

if(keyPressed == '66'){
    new_image("https://www.clipartmax.com/png/middle/1-19920_blue-shark-ranger-by-iyuuga-d9h87ue-blue-power-ranger-cartoon.png");
}