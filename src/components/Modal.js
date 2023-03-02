import { useDispatch } from "react-redux";
import { clearCart } from "../Features/cart/cartSlice";
import { closeModal } from "../Features/modal/modalSlice";

const Modal = () => {
    const dispatch = useDispatch();
    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>Remove All items?</h4>
                <div className="btn-container">
                    <button type="button" className="btn confirm-btn"
                    onClick={() => {
                        dispatch(clearCart());
                        dispatch(closeModal());
                    }
                    }
                    >
                        Confirm
                    </button>
                    <button type="button" className="btn clear-btn"
                    onClick={() => {
                        dispatch(closeModal())}
                    }
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal;