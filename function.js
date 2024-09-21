const content = document.getElementById('content');
content.innerHTML = intro;

const cases = (inputVal) => {
    switch (inputVal){
        case 'exit':
            window.close();
            break;
        case 'banner':
            content.innerHTML += banner.join('');
            break;
        case 'help':
            content.innerHTML += help.join('');
            break;
        case 'whoisasit07':
            content.innerHTML += whoisasit.join('');
            break;
        case 'whoami':
            content.innerHTML += whoami.join('');
            break;
        case 'social':
            content.innerHTML += social.join('');
            break;
        case 'projects':
            content.innerHTML += projects.join('');
            break;
        case 'email':
            content.innerHTML += email.join('');
            break;
        case 'secret':
            content.innerHTML += secret.join('');
            break;
        case 'clear':
            content.innerHTML = '';
            break;
    }
}

content.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let inputVal = document.getElementById('input').value.toLowerCase();
        content.innerHTML += '<br>';
        cases(inputVal);
        addtext(intro);
        document.getElementById('input').value = '';
        content.innerHTML += '<br>' + intro;
    }
});

function addtext(inputstring){
    var text = document.getElementById('content');
    text.scrollTop = text.scrollHeight;
}