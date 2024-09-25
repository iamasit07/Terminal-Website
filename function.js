// Author: WhoisAsit'
// constraints
const content = document.getElementById('content');
const command = document.getElementById('command');

let inputHistory = [];
let num = 0;

// Starting inputs
setTimeout(function(){
    loopLines(banner);
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
            loopLines(easterEgg);
            break;
        case 'whoisasit07':
            loopLines(whoisasit);
            break;
        case 'whoami':
            loopLines(whoami);
            break;
        case 'help':
            loopLines(help);
            break;
        case 'social':
            loopLines(social);
            break;
        case 'projects':
            loopLines(projects);
            break;
        case 'email':
            loopLines(email);
            break;
        case 'secret':
            loopLines(secret);
            break;
        case 'banner':
            loopLines(banner);
            break;
        case 'sudo':
            loopLines(sudo);
            break;
        case 'exit':
            loopLines(exit);
            break;
        case 'clear':
            content.innerHTML = '';
            break;
        case 'history':
            loopLines(inputHistory);
            break;
        default:
            loopLines(error);
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
            content.innerHTML += '<span class="admin">guest@terminal:~$ </span><span class="user-input">' + inputVal.value + '</span>';
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

function addText(text){
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
        content.appendChild(next);
        window.scrollTo(0,document.body.scrollHeight);
    },500);
}

function loopLines(text){
    text.forEach(function (line){
        addText(line);
    });
}