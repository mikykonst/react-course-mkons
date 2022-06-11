const container = document.querySelector('.container');
const button = document.querySelector('.add-button');
let modal;

const saveTodoHandler = () => {};

const cancelTodoHandler = () => {
  modal.remove();
  modal = undefined;
};

const showModal = () => {
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal';

    const modalContent = document.createElement('div');

    modalContent.className = 'modal__content';

    const modalHeader = document.createElement('p');

    modalHeader.textContent = 'Add todo';
    modalHeader.className = 'modal__header';

    const buttonContainer = document.createElement('div');

    buttonContainer.className = 'button-container';

    const saveButton = document.createElement('button');

    saveButton.className = 'modal__button-save';
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', saveTodoHandler);

    const cancelButton = document.createElement('button');

    cancelButton.className = 'modal__button-cancel';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', cancelTodoHandler);

    const todoDescriptionInput = document.createElement('input');

    todoDescriptionInput.type = 'text';
    todoDescriptionInput.placeholder = 'TODO Description';
    todoDescriptionInput.className = 'modal__input-todo-description';

    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(saveButton);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(todoDescriptionInput);
    modalContent.appendChild(buttonContainer);

    modal.appendChild(modalContent);

    container.appendChild(modal);
  }
};

button.addEventListener('click', showModal);
