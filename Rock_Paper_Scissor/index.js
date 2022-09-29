const computerChoiceDisplay=document.getElementById('computer-choice');
const userChoiceDisplay=document.getElementById('your-choice');
const resultDisplay=document.getElementById('result');
const possibleChoices=document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',(e)=>{
    userChoice =e.target.id ;
    if(userChoice==='🪨rock')
    {
        userChoice='🪨rock';
    }
    else if(userChoice==='✂️scissors')
    {
        userChoice ='✂️scissors';
    }
    else 
    {
        userChoice ='📄paper';
    }
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    getresult();
}))

function generateComputerChoice()
{
    const randomNumber=Math.floor(Math.random()*3)+1;
    if(randomNumber===1)
    {
        computerChoice='🪨rock';
    }
    if(randomNumber===2)
    {
        computerChoice='✂️scissors';
    }
    if(randomNumber===3)
    {
        computerChoice='📄paper';
    }
    computerChoiceDisplay.innerHTML =computerChoice;
}
function getresult()
{
    if(computerChoice===userChoice)
    {
        result=' 😐 its a draw';
    }
    else if((computerChoice==='✂️scissors' && userChoice==='📄paper'))
    {
        result =' 🥺 you lost!';
    }
    else if((computerChoice==='🪨rock' && userChoice==='✂️scissors'))
    {
        result =' 🥺 you lost!';
    }
    else if((computerChoice==='📄paper' && userChoice==='🪨rock'))
    {
        result =' 🥺 you lost!';
    }
    else 
    {
        result =' 🏆 yay! you won';
    }
    resultDisplay.innerHTML=result;
}
