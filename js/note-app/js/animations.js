const Animations = {
    addNote: (noteElement) => {
        return new Promise((resolve) => {
            noteElement.classList.add('new');
            noteElement.style.display = 'none';
            setTimeout(() => {
                noteElement.style.display = 'block';
                noteElement.addEventListener('animationend', function handler() {
                    noteElement.classList.remove('new');
                    noteElement.removeEventListener('animationend', handler);
                    resolve();
                });
            }, 10);
        });
    },

    removeNote: (noteElement) => {
        return new Promise((resolve) => {
            noteElement.classList.add('deleting');
            noteElement.addEventListener('animationend', function handler() {
                noteElement.removeEventListener('animationend', handler);
                noteElement.remove();
                resolve();
            });
        });
    },

    updateNote: (noteElement) => {
        return new Promise((resolve) => {
            noteElement.classList.add('updating');
            setTimeout(() => {
                noteElement.classList.remove('updating');
                resolve();
            }, 300);
        });
    },

    shakeNote: (noteElement) => {
        return new Promise((resolve) => {
            noteElement.classList.add('shake');
            noteElement.addEventListener('animationend', function handler() {
                noteElement.classList.remove('shake');
                noteElement.removeEventListener('animationend', handler);
                resolve();
            });
        });
    },

    toggleEmptyState: (emptyStateElement, isEmpty) => {
        return new Promise((resolve) => {
            if (isEmpty) {
                emptyStateElement.style.display = 'block';
                emptyStateElement.style.opacity = '0';
                setTimeout(() => {
                    emptyStateElement.style.opacity = '1'; // Плавное появление элемента
                    resolve();
                }, 10);
            } else {
                emptyStateElement.style.opacity = '0'; // Плавное исчезновение элемента
                emptyStateElement.addEventListener('transitionend', function handler() {
                    emptyStateElement.style.display = 'none'; // Скрываем элемент после завершения анимации
                    emptyStateElement.removeEventListener('transitionend', handler);
                    resolve();
                });
            }
        });
    }
};

export default Animations;
