import Capsules from './Capsules';
import Crew from './Crew';
import Rockets from './Rockets';
import Starlink from './Starlink';

const Modal = (props) => {
    const {modalVisible, setModalVisible} = props;

    return(
        <div className="modal">
            <button className="closeModal" onClick={() => setModalVisible(false)}></button>
            {modalVisible === 1 && <Capsules />}
            {modalVisible === 2 && <Crew />}
            {modalVisible === 3 && <Rockets />}
            {modalVisible === 4 && <Starlink />}
        </div>
    )
}

export default Modal;