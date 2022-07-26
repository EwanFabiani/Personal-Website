window.addEventListener('DOMContentLoaded', function(event) {
    var newWidth = window.innerWidth*2;
    var newHeight = window.innerHeight*2;

    var totalPixels = (newHeight*newWidth);
    
    var smallAmount = Math.round(totalPixels/6000.0);
    var mediumAmount = Math.round(totalPixels/20000.0);
    var bigAmount = Math.round(totalPixels/40000.0);

    var smallStars = document.getElementsByClassName('smallstars')[0];
    smallStars.style.boxShadow = createStars(smallAmount);

    var mediumStars = document.getElementsByClassName('mediumstars')[0];
    mediumStars.style.boxShadow = createStars(mediumAmount);

    var bigStars = document.getElementsByClassName('bigstars')[0];
    bigStars.style.boxShadow = createStars(bigAmount);
});

window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth*2;
    var newHeight = window.innerHeight*2;

    var totalPixels = newHeight*newWidth;
    
    var smallAmount = Math.round(totalPixels/6000);
    var mediumAmount = Math.round(totalPixels/20000);
    var bigAmount = Math.round(totalPixels/40000);

    var smallStars = document.getElementsByClassName('smallstars')[0];
    var mediumStars = document.getElementsByClassName('mediumstars')[0];
    var bigStars = document.getElementsByClassName('bigstars')[0];

    var smallStarsString = smallStars.style.boxShadow;
    var mediumStarsString = mediumStars.style.boxShadow;
    var bigStarsString = bigStars.style.boxShadow;

    smallStars.style.boxShadow = adjustStars(smallStarsString, smallAmount, 1);
    mediumStars.style.boxShadow = adjustStars(mediumStarsString, mediumAmount, 2);
    bigStars.style.boxShadow = adjustStars(bigStarsString, bigAmount, 3);
});

function adjustStars(string, amount, index) {
    var shouldSubstring = (string.length===0);
    var newString = string;
    var stars = string.split(', r');
    var starsOldAmount = stars.length;
    if (starsOldAmount > amount) {
        for (var i = 0; i < starsOldAmount - amount; i++) {
            stars.pop();
        }
        newString = stars.join(', r');
    } else if (starsOldAmount < amount) {
        for (var i = 0; i < amount - starsOldAmount; i++) {
            newString += ", rgb(255, 255, 255) " + Math.random()*100 + 'vw '+ Math.random()*200 + 'vh';
        }
        if (shouldSubstring) {newString = newString.substring(2);}
    } else {}
    return newString;
}

function createStars(amount){
    var stars = "rgb(255, 255, 255) " + Math.random()*100 + 'vw '+ Math.random()*200 + 'vh';
    for(var i = 0; i < amount; i++){
        stars += ", rgb(255, 255, 255) " + Math.random()*100 + 'vw '+ Math.random()*200 + 'vh';
    }
    return stars;
}