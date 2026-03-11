let textInput = document.getElementById("textInput");

let boldBtn = document.getElementById("boldBtn");
let italicBtn = document.getElementById("italicBtn");
let underlineBtn = document.getElementById("underlineBtn");
let left = document.getElementById("left");
let center = document.getElementById("center");
let right = document.getElementById("right");
let textColor = document.getElementById("textColor");
let bgColor = document.getElementById("bgColor");
let fontSize = document.getElementById("fontSize");

let copy = document.getElementById("copy");
let reset = document.getElementById("reset");



boldBtn.addEventListener("click", function () {

    document.execCommand("bold");

});

italicBtn.addEventListener("click", function () {

   document.execCommand("italic");

});

underlineBtn.addEventListener("click", function () {

    document.execCommand("underline");

});

left.addEventListener("click", function () {
    
    document.execCommand("justifyLeft");
    
})

center.addEventListener("click", function () {

    document.execCommand("justifyCenter");
    
})

right.addEventListener("click", function () {

    document.execCommand("justifyRight");
    
})

textColor.addEventListener("input", function () {

    document.execCommand("foreColor", false, textColor.value);
    
})

bgColor.addEventListener("input", function () {

    //document.execCommand("hiliteColor", false, bgColor.value);
    document.execCommand("backColor", false, bgColor.value);
})


fontSize.addEventListener("change", function () {

    document.execCommand("fontSize", false, fontSize.value);

});




copy.addEventListener("click", function() {

    navigator.clipboard.writeText(textInput.innerText);

       Swal.fire({
        title: "Copied!",
        text: "Text successfully copied to clipboard",
        icon: "success",
        confirmButtonText: "OK",
        heightAuto: false
    });
    
});

reset.addEventListener("click", function () {

    textInput.innerHTML = "";
    textInput.focus();
    
})




