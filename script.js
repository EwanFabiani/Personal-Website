window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth*2;
    var newHeight = window.innerHeight*2;

    var totalPixels = newHeight*newWidth;
    
    var smallAmount = Math.round(totalPixels/1500);
    var mediumAmount = Math.round(totalPixels/5000);
    var bigAmount = Math.round(totalPixels/10000);

    var title = document.getElementsByClassName('title')[0];
    title.innerHTML = newWidth + ' ' + newHeight;

    //set the smallstars div box shadow
    var smallStars = document.getElementsByClassName('smallstars')[0];
    smallStars.style.boxShadow = createStars(smallAmount, newWidth, newHeight);

    //set the mediumstars div box shadow
    var mediumStars = document.getElementsByClassName('mediumstars')[0];
    mediumStars.style.boxShadow = createStars(mediumAmount, newWidth, newHeight);

    //set the bigstars div box shadow
    var bigStars = document.getElementsByClassName('bigstars')[0];
    bigStars.style.boxShadow = createStars(bigAmount, newWidth, newHeight);

});

function createStars(amount, width, height){
    var stars = Math.random()*width + 'vw '+ Math.random()*height+ 'vh #FFF';
    for(var i = 0; i < amount; i++){
        stars += ' ,'  + Math.random()*width + 'vw '+ Math.random()*height+ 'vh #FFF';
    }
    return stars;
}