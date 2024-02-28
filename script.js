const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('lista');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const text = input.value.trim();

    if (text !== '') {
        addTask(text);
        input.value = '';
    }
});

function addTask(text) {
    const li = document.createElement('li');
    li.innerText = text;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remover';
    removeBtn.classList.add('remove-btn');

    removeBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(removeBtn);
    list.appendChild(li);
}