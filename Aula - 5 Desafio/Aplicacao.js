let linha 
const Add = () => {
    let input = document.getElementById('Caixinha').value; 
    let classe = document.getElementById('Lista'); 
    
    var p = document.createElement('p');
    var b = document.createElement('button');

    p.textContent = input;

    b.textContent = "<3"; 
    b.className = 'RiscarB';
    b.onclick = () => {
        if (p.style.textDecoration == 'line-through') {
            p.style.textDecoration = 'none';
        } else {
            p.style.textDecoration = 'line-through';
        }
    };
    p.style.margin = '0'

    classe.appendChild(p);
    classe.appendChild(b);

    document.getElementById('Caixinha').value = ''

    console.log(input);
}