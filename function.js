const content = document.getElementById('content');
const command = document.getElementById('command');

let container = [];
let num = 0;

// Starting inputs
setTimeout(function(){
    loopLines(banner);
    content.focus();
}, 100);


window.addEventListener("keypress", keyStroke);

function setInput(){
    command.innerHTML = intro;
    document.getElementById('input').focus();
}

setTimeout(setInput, 500);

const cases = (inputVal) => {
    switch (inputVal){
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
            loopLines(container);
            break;
        default:
            loopLines(error);
            break;
    }
}


// Event Listener for Clicking on Terminal
function keyStroke(e){
    if(e.key === 'Reload'){
        document.location.reload();
    }
    else {
        let inputVal = document.getElementById('input').value.toLowerCase();
        if(e.keyCode === 13){
            container.push(inputVal);
            num++;

            content.innerHTML += '<br>';
            content.innerHTML += '<span>guest@terminal:~$ </span>' + inputVal;
            cases(inputVal);
            command.innerHTML ='';
            setTimeout(setInput, 700);
            document.getElementById('input').value = '';
        }
        if(e.keyCode === 38 && num > 0){
            num--;
            inputVal.value = container[num];
        }
        if(e.keyCode === 40 && num !== container.length){
            num++;
            if(container[num] === undefined)
                inputVal.value = '';
            else
                inputVal.value = container[num];
        }
    }
}



// Additional custom-made Functions


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
        next.className = 'text-style';
        content.appendChild(next);
        window.scrollTo(0,document.body.scrollHeight);
    },500);
}

function loopLines(text){
    text.forEach(function (line){
        addText(line);
    });
}