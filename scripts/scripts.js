//This is to link the elements from HTML to JS, via query selector and create fucntions or if methods etc. 
const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const playerScoreSpan = document.querySelector('[data-player-score]');
//This is the possible selections when the player chooses a button to click and what it does.
const SELECTIONS = [ 
    {
    name: 'the-rock',
    Image: '<img src="images/the-rock.png">',
    beats: 'scissors'
},

{
    name:'paper',
    Image: '<img src="images/paper.png">',
    beats: 'the-rock'
},

{
   name: 'scissors',
   Image: '<img src="images/scissors.png">',
   beats: 'paper'
}

]


//This selects all the buttons. 
selectionButtons.forEach(selectionButton => {
//the eventlistener is added to the button, that will respond when the player clicks a button.    
selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name === selectionName);
    makeSelection(selection);
//when the player clicks a button, this is programmed to find the correct selection name and carry out the correct response, can also be tested with console log on the browser inspection tool.
    });
})

//this displays the winning selection either by the player or computer.
function makeSelection(selection) {
    const computerSelection = randomSelection()
    const playerWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
   
//this shows the results on the scoreboard as a list, with recent selection at the top. 
   addSelectionResult(computerSelection, computerWinner);
   addSelectionResult(Selection, playerWinner);

//this shows the incremented number results on the score scoreboard i.e.  1 - 3.
    if (playerWinner) incrementScore(playerScoreSpan);
    if (computerWinner) incrementScore(computerScoreSpan);

};

//this takes the current text coverts it to a integer by adding 1.
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1 
};

//a div element is created via the innertext document, connecting the name of the selection to display as thhe winner on the scoreboard.
function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.name;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);
}

//this determines which selection beats the other as referenced above at: const SELECTIONS.
function isWinner(selection,oppenentSelection) {
    return selection.beats === oppenentSelection.name;
}

//this function randomises the selections, as whole numbers via Math.floor & random as i.e. 0,1,2 otherwise it comes up as i.e. 2.9999.
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}