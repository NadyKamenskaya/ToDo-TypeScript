import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AddProps } from '../../types';

import { removeTodos } from '../../slices/todosSlice';

const ModalRemove = (props: AddProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { handleClose } = props;

  const onClick = () => {
    dispatch(removeTodos());
    handleClose();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modal.removeTodos')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">{t('modal.confirmation')}</p>
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            className="me-2"
            onClick={handleClose}
          >
            {t('buttons.cancel')}
          </Button>
          <Button
            variant="danger"
            onClick={onClick}
          >
            {t('buttons.remove')}
          </Button>
        </div>
      </Modal.Body>
    </>
  );
};

export default ModalRemove;
