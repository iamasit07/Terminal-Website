const input = document.getElementById('input');
const output = document.getElementById('output');

function values(event){
    if(event.key === 'Enter') {
        if (input.value.toLowerCase() === 'help') {
            output.innerHTML = 'this is for testing purposes<br>';
        }
    }
}

input.addEventListener('keypress', values);