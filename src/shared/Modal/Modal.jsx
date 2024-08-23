function Modal({ setWillDelete }) {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Do you want to delete this food item?
        </h3>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={() => setWillDelete(true)} className="btn mr-2">
              Yes
            </button>
            <button onClick={() => setWillDelete(false)} className="btn">
              No
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
