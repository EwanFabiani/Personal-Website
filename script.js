window.addEventListener('DOMContentLoaded', function(event) {
    var newWidth = window.innerWidth*2;
    var newHeight = window.innerHeight*2;

    var totalPixels = newHeight*newWidth;
    
    var smallAmount = Math.round(totalPixels/3000);
    var mediumAmount = Math.round(totalPixels/10000);
    var bigAmount = Math.round(totalPixels/20000);

    var title = document.getElementsByClassName('title')[0];
    title.innerHTML = newWidth + ' ' + newHeight;

    //set the smallstars div box shadow
    var smallStars = document.getElementsByClassName('smallstars')[0];
    smallStars.style.boxShadow = createStars(smallAmount);

    //set the mediumstars div box shadow
    var mediumStars = document.getElementsByClassName('mediumstars')[0];
    mediumStars.style.boxShadow = createStars(mediumAmount);

    //set the bigstars div box shadow
    var bigStars = document.getElementsByClassName('bigstars')[0];
    bigStars.style.boxShadow = createStars(bigAmount);
});

window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth*2;
    var newHeight = window.innerHeight*2;

    var totalPixels = newHeight*newWidth;
    
    var smallAmount = Math.round(totalPixels/3000);
    var mediumAmount = Math.round(totalPixels/10000);
    var bigAmount = Math.round(totalPixels/20000);

    var title = document.getElementsByClassName('title')[0];
    title.innerHTML = newWidth + ' ' + newHeight;

    var smallStars = document.getElementsByClassName('smallstars')[0];
    var mediumStars = document.getElementsByClassName('mediumstars')[0];
    var bigStars = document.getElementsByClassName('bigstars')[0];

    var smallStarsString = smallStars.style.boxShadow;
    var mediumStarsString = mediumStars.style.boxShadow;
    var bigStarsString = bigStars.style.boxShadow;

    var smallStarsArray = smallStarsString.split(',');
    var mediumStarsArray = mediumStarsString.split(',');
    var bigStarsArray = bigStarsString.split(',');

    smallStars.style.boxShadow = adjustStars(smallStarsString, smallAmount);
    mediumStars.style.boxShadow = adjustStars(mediumStarsString, mediumAmount);
    bigStars.style.boxShadow = adjustStars(bigStarsString, bigAmount);
      

});

function adjustStars(string, amount) {
    var newString = string;
    console.log("OLD: " + string.length);
    console.log("NEW: " + amount);
    var stars = string.split(',');
    var starsOldAmount = stars.length;
    if (starsOldAmount > amount) {
        for (var i = 0; i < starsOldAmount - amount; i++) {
            stars.pop();
        }
        newString = stars.join(',');
        console.log("TEST1");
    } else if (starsOldAmount < amount) {
        for (var i = 0; i < amount - starsOldAmount; i++) {
            newString += ', '  + Math.random()*100 + 'vw '+ Math.random()*200+ 'vh #FFF';
        }
        console.log("TEST");
    }
    console.log("RESULT: " + newString.le);
    return newString;
}

function createStars(amount){
    var stars = Math.random()*100 + 'vw '+ Math.random()*200+ 'vh #FFF';
    for(var i = 0; i < amount; i++){
        stars += ', '  + Math.random()*100 + 'vw '+ Math.random()*200+ 'vh #FFF';
    }
    console.log(stars);
    return stars;
}