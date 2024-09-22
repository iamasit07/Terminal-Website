const content = document.getElementById('content');
const command = document.getElementById('command');
command.innerHTML = intro;

const cases = (inputVal) => {
    switch (inputVal){
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
        default:
            loopLines(error);
            break;
    }
}

command.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let inputVal = document.getElementById('input').value.toLowerCase();
        content.innerHTML += '<br>';
        content.innerHTML += '<span>guest@terminal:~$ </span>' + inputVal;
        cases(inputVal);
        document.getElementById('input').value = '';
    }
});

function addText(text){
    let t = "";
    for(let i = 0;i<text.length;i++){
        if(text.charAt(i) === " " && text.charAt(i+1) === " "){
            t += '&nbsp;&nbsp;'
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
    },500);
}

function loopLines(text){
    text.forEach(function (line){
        addText(line);
    });
}