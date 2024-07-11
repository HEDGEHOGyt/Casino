document.getElementById('spin-button').addEventListener('click', function() {
    const shapes = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']; // Dice symbols for simplicity
    let slot1 = document.getElementById('slot1');
    let slot2 = document.getElementById('slot2');
    let slot3 = document.getElementById('slot3');
    
    slot1.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    slot2.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    slot3.textContent = shapes[Math.floor(Math.random() * shapes.length)];
});
