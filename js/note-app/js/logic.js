// logic.js

import { createMainContainer, createNoteElement } from './template.js';
import Animations from './animations.js';

document.addEventListener('DOMContentLoaded', function() {
    createMainContainer();

    const notesContainer = document.getElementById('notesContainer');
    const noteInput = document.getElementById('noteInput');
    const addNoteBtn = document.getElementById('addNoteBtn');
    const emptyState = document.getElementById('emptyState');

    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    const renderNotes = () => {
        notesContainer.innerHTML = '';
        if (notes.length === 0) {
            Animations.toggleEmptyState(emptyState, true);
        } else {
            Animations.toggleEmptyState(emptyState, false);
            notes.forEach((note, index) => {
                const noteElement = createNoteElement(note, index);
                notesContainer.appendChild(noteElement);

                // Добавляем обработчики событий на кнопки
                noteElement.querySelector('.btn-warning').addEventListener('click', () => editNoteHandler(index));
                noteElement.querySelector('.btn-danger').addEventListener('click', () => deleteNoteHandler(index));
            });
        }
    };

    const addNoteHandler = async () => {
        const noteText = noteInput.value.trim();
        if (noteText === '') {
            await Animations.shakeNote(noteInput);
            return;
        }

        const newNote = { text: noteText };
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));

        const newNoteElement = createNoteElement(newNote, notes.length - 1);
        await Animations.addNote(newNoteElement);
        notesContainer.appendChild(newNoteElement);

        noteInput.value = '';
        renderNotes();
    };

    const editNoteHandler = async (index) => {
        const newText = prompt('Редактировать заметку:', notes[index].text);
        if (newText !== null && newText.trim() !== '') {
            notes[index].text = newText;
            localStorage.setItem('notes', JSON.stringify(notes));
            renderNotes();
            await Animations.updateNote(notesContainer.children[index]);
        }
    };

    const deleteNoteHandler = async (index) => {
        const noteElement = notesContainer.children[index];
        await Animations.removeNote(noteElement);
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
    };

    addNoteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addNoteHandler();
    });

    renderNotes();
});

