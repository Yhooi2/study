// template.js

export const createNoteElement = (note, index) => {
    const noteElement = document.createElement('div');
    noteElement.className = 'note col-md-4';
    noteElement.dataset.index = index;

    const card = document.createElement('div');
    card.className = 'card h-100';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = note.text;

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm me-2';
    editBtn.textContent = 'Редактировать';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Удалить';

    cardBody.appendChild(cardText);
    cardBody.appendChild(editBtn);
    cardBody.appendChild(deleteBtn);
    card.appendChild(cardBody);
    noteElement.appendChild(card);

    return noteElement;
};

export const createMainContainer = () => {
    const container = document.createElement('div');
    container.className = 'container py-5';

    const header = document.createElement('header');
    header.className = 'mb-4';
    const title = document.createElement('h1');
    title.className = 'text-center display-4';
    title.textContent = 'Приложение заметок';
    header.appendChild(title);

    const form = document.createElement('form');
    form.className = 'mb-4';
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group mb-3';

    const noteInput = document.createElement('input');
    noteInput.type = 'text';
    noteInput.id = 'noteInput';
    noteInput.className = 'form-control form-control-lg';
    noteInput.placeholder = 'Введите текст заметки';

    const addNoteBtn = document.createElement('button');
    addNoteBtn.id = 'addNoteBtn';
    addNoteBtn.className = 'btn btn-primary btn-lg w-100';
    addNoteBtn.textContent = 'Добавить заметку';

    formGroup.appendChild(noteInput);
    form.appendChild(formGroup);
    form.appendChild(addNoteBtn);

    const notesSection = document.createElement('section');
    notesSection.className = 'notes-section mt-5';
    const notesTitle = document.createElement('h2');
    notesTitle.className = 'h3 mb-4 text-secondary';
    notesTitle.textContent = 'Ваши заметки';
    const notesContainer = document.createElement('div');
    notesContainer.id = 'notesContainer';
    notesContainer.className = 'notes-container row g-3';

    const emptyState = document.createElement('div');
    emptyState.className = 'col-12 text-center text-muted';
    emptyState.id = 'emptyState';
    const emptyStateText = document.createElement('p');
    emptyStateText.className = 'fs-5';
    emptyStateText.textContent = 'У вас пока нет заметок. Добавьте первую!';
    emptyState.appendChild(emptyStateText);
    notesContainer.appendChild(emptyState);

    notesSection.appendChild(notesTitle);
    notesSection.appendChild(notesContainer);

    container.appendChild(header);
    container.appendChild(form);
    container.appendChild(notesSection);

    document.body.appendChild(container);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    document.head.appendChild(link);
    
};
