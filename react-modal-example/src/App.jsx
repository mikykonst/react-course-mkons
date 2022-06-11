const App = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <button className="add-button" onClick={() => setShowModal(true)}>Add todo</button>
      {
        showModal &&
          <div className="modal">
            <div className="modal__content">
              <div className="modal__header">Add todo</div>
              <input type="text" className="modal__input-todo-description" placeholder="TODO Description"/>
              <div className="button-container">
                <button className="modal__button-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="modal__button-save">Save</button>
              </div>
            </div>
          </div>
      }
    </div>
  );
};

const container = document.getElementById('root');

ReactDOM.render(<App />, container);
