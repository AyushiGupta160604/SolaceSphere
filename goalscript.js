function setReminder() {
    const goalInput = document.getElementById('goalInput');
    const dateInput = document.getElementById('dateInput');
    const goalList = document.getElementById('goalList');
    const reminderSound = document.getElementById('reminderSound');

    if (goalInput.value === '' || dateInput.value === '') {
        alert('Please enter both goal and date');
        return;
    }

    const listItem = document.createElement('li');
    const goalText = `${dateInput.value}: ${goalInput.value}`;
    listItem.textContent = goalText;

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.addEventListener('click', function() {
        listItem.remove();
    });

    listItem.appendChild(deleteBtn);
    goalList.appendChild(listItem);

    const currentDate = new Date();
    const reminderDate = new Date(dateInput.value);

    if (reminderDate > currentDate) {
        const timeDiff = reminderDate.getTime() - currentDate.getTime();
        setTimeout(function() {
            alert(`Reminder: ${goalText}`);
            reminderSound.play();
        }, timeDiff);
    }

    goalInput.value = '';
    dateInput.value = '';

    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });
}