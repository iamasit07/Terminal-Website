// Author: WhoisAsit'
// constraints
const content = document.getElementById('content');
const command = document.getElementById('command');

let inputHistory = [];
let num = 0;

// Starting inputs
setTimeout(function(){
    loopLines(banner, '', 50);
    content.focus();
}, 100);

function setInput(){
    command.innerHTML = intro;
    document.getElementById('input').focus();
}

window.addEventListener('keydown', keyStroke);
setTimeout(setInput, 500);


// Commands
const cases = (inputVal) => {
    switch (inputVal){
        case 'easter egg':
            loopLines(easterEgg, 'para padded' , 75);
            openLink('https://youtu.be/3UjuYtgMDIg?si=mi87aC5qcUCLZe9y', 800);
            break;
        case 'whoisasit07':
            loopLines(whoisasit,'', 75);
            break;
        case 'whoami':
            loopLines(whoami, 'para padded', 75);
            break;
        case 'help':
            loopLines(help,'', 75);
            break;
        case 'social':
            loopLines(social, '',75);
            break;
        case 'projects':
            loopLines(projects,'', 75);
            break;
        case 'email':
            loopLines(email,"", 75);
            break;
        case 'secret':
            loopLines(secret, 'para padded', 75);
            break;
        case 'banner':
            loopLines(banner,'', 75);
            break;
        case 'sudo':
            loopLines(sudo, 'para padded', 75);
            break;
        case 'exit':
            loopLines(exit, 'para padded', 75);
            window.close();
            break;
        case 'clear':
            content.innerHTML = '';
            break;
        case 'history':
            loopLines(inputHistory, 'para padded', 75);
            break;
        case 'instagram':
            loopLines(instagramLines,'para padded', 75);
            openLink(instagram, 800);
            break;
        case 'linkedin':
            loopLines(linkedinLines,"", 75);
            openLink(linkedin, 800);
            break;
        case 'github':
            loopLines(githubLines,"", 75);
            openLink(github, 800);
            break;
        case 'codeforces':
            loopLines(codeforcesLines, "",75);
            openLink(codeforces, 800);
            break;
        case 'leetcode':
            loopLines(leetcodeLines,"", 75);
            openLink(leetcode, 800);
            break;
        default:
            loopLines(error, 'para padded', 75);
            break;
    }
}


// Event Listener for commands and inputs
function keyStroke(e){
    if(e.key === 'Reload'){
        document.location.reload();
    }
    else {
        const inputVal = document.getElementById('input');
        if(e.key === 'Enter'){
            inputHistory.push(inputVal.value);
            num = inputHistory.length;
            content.innerHTML += '<br>';
            content.innerHTML += '<p><span class="admin">guest@terminal:~$ </span><span class="user-input">' + inputVal.value + '</span></p>';
            cases(inputVal.value.trim().toLowerCase());
            inputVal.value = '';
            setTimeout(setInput, 700);
        }
        if(e.key === 'ArrowUp' && num > 0){
            num -= 1;
            inputVal.value = inputHistory[num];
        }
        if(e.key === 'ArrowDown'){
            num += 1;
            if(num >= inputHistory.length){
                num = inputHistory.length;
                inputVal.value = '';
            }
            else
                inputVal.value = inputHistory[num];
        }
        moveCursorToEnd(inputVal);
    }
}


// Additional custom-made Functions

function moveCursorToEnd(input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
}

function addText(text, style, speed){
    let t = "";
    for(let i = 0;i<text.length;i++){
        if(text.charAt(i) === " " && text.charAt(i+1) === " "){
            t += '&nbsp;&nbsp;';
            i++;
        }
        else
            t += text.charAt(i);
    }
    setTimeout(function(){
        let next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;
        content.appendChild(next);
        window.scrollTo(0, document.body.offsetHeight);
    }, speed);
}

function loopLines(text, style, speed){
    text.forEach((line, index) => {
        addText(line, style,speed*index);
    });
}

function openLink(link, speed){
    setTimeout(function(){
        window.open(link);
    }, speed);
}

// Slow typing effect

// The text you want to display with the slow typing effect
// const textToType = "Hello! This is a slow typing effect, just like how ChatGPT displays text.";
//
// // The element where the text will be displayed
// const outputElement = document.getElementById('output');
// const startButton = document.getElementById('startTyping');
//
// // Function to create the slow typing effect
//
// // Event listener to start the typing effect when the button is clicked
// startButton.addEventListener('click', () => {
//     outputElement.textContent = ""; // Clear previous text
//      // Adjust speed (milliseconds) as needed
// });