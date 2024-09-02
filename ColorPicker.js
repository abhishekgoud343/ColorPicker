const box = document.getElementById('box');

const picker = document.getElementById('picker');
picker.addEventListener('input', () => colorPicker());

function colorPicker() {
    box.style.backgroundColor = picker.value;
}