$(document).ready(function () {
    let index=0;
    let level=0;
    let gamePattern = [];
    let userClickedPattern=[];
    let buttonColours = ["red", "blue", "green", "yellow"];
    function nextSequence() {
        
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        $('#' + randomChosenColour).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
        level++;
        $('h1').text("Level "+level);
        index=0;
        userClickedPattern=[];

    }

    function playSound(name) {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();    
    }

    function animatePress(currentColour)
    {
        $('.'+currentColour).addClass("pressed");
        setTimeout(() => {
            $('.'+currentColour).removeClass("pressed");
        }, 100);
    }
    function startOver() {
        level=0;
        gamePattern=[];
        userClickedPattern=[];
        index=0;
    }
    $('.btn').on('click',function()
    {
        var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        

        if(gamePattern[index]===userClickedPattern[index])
        {
            index++;
        }
        else 
        {
            $('h1').text(" 😢Game Over,Press Any Key to Restart");
            playSound("wrong");
            $('body').addClass('game-over');
            setTimeout(() => {
                $('body').removeClass('game-over');
                startOver();
            }, 200);
        }
        if(gamePattern.length===userClickedPattern.length)
        {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }

    })
    $(document).keypress(function()
    {
        startOver();
        nextSequence();
    })
})
