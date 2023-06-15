import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { AddProps } from '../../types';

import ModalForm from './ModalForm';

const ModalAdd = (props: AddProps) => {
  const { t } = useTranslation();
  const { handleClose } = props;

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modal.addTodo')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalForm handleClose={handleClose} />
      </Modal.Body>
    </>
  );
};

export default ModalAdd;
