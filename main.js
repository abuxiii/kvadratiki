document.addEventListener('DOMContentLoaded', () => {
    const bgColorPicker = document.getElementById('bg-color-picker');
    const squareColorPicker = document.getElementById('square-color-picker');
    const squares = document.querySelectorAll('.square');

    // Изменение цвета фона
    
    bgColorPicker.addEventListener('input', (e) => {
        document.body.style.backgroundColor = e.target.value;
    });

    // Изменение цвета квадратиков

    squareColorPicker.addEventListener('input', (e) => {
        squares.forEach(square => {
            square.style.backgroundColor = e.target.value;
        });
    });
});

function showAnimation () {
    document.body.classList.toggle('loading');
  }
  
  document.querySelectorAll('a[href]').forEach(a => a.addEventListener('click', showAnimation))