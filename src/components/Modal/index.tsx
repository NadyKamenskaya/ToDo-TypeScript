import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { ModalTypes } from '../../types';

import RootState from '../../slices';
import { close } from '../../slices/modalSlice';

import ModalAdd from './ModalAdd';
import ModalRemove from './ModalRemove';

const modals: ModalTypes = {
  adding: ModalAdd,
  removing: ModalRemove,
};

const ModalRoot = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalType = useSelector((state: RootState) => state.modal.type);

  const handleClose = () => dispatch(close());

  if (modalType === null) return null;
  const CurrentModal = modals[modalType];

  return (
    <Modal show={isOpen} onHide={handleClose} centered>
      {CurrentModal && <CurrentModal handleClose={handleClose} />}
    </Modal>
  );
};

export default ModalRoot;
