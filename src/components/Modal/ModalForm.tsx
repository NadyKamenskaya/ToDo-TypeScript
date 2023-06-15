import { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import * as yup from 'yup';
import _ from 'lodash';
import { useFormik } from 'formik';

import { AddProps, Status } from '../../types';

import { addTodo, selectAllTodos } from '../../slices/todosSlice';

const schema = (todos: any) => yup.object().shape({
  body: yup
    .string()
    .required('errors.required')
    .min(3, 'errors.rangeLetter')
    .max(45, 'errors.rangeLetter')
    .notOneOf(todos, 'errors.notOneOf'),
});

const ModalForm = (props: AddProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { handleClose } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const allTodos = useSelector(selectAllTodos);
  const todosBody = Object.values(allTodos.entities).map((todo) => todo?.body);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    validationSchema: schema(todosBody),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      try {
        const todo = {
          body: values.body,
          id: Number(_.uniqueId()),
          status: Status.NOT_DONE as string,
        };

        dispatch(addTodo(todo));
        handleClose();
      } catch (error) {
        formik.setSubmitting(false);

        inputRef.current?.select();
      }
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
    >
      <Form.Group
        controlId="body"
      >
        <Form.Control
          className="mb-2"
          name="body"
          ref={inputRef}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.body}
          isInvalid={formik.errors.body !== undefined && (formik.touched.body ?? false)}
          disabled={formik.isSubmitting}
        />
        <Form.Label
          visuallyHidden
        >
          {t('modal.todo')}
        </Form.Label>
        <Form.Control.Feedback
          type="invalid"
        >
          {t(formik.errors.body || '')}
        </Form.Control.Feedback>
        <div
          className="d-flex justify-content-end"
        >
          <Button
            className="me-2"
            variant="secondary"
            type="button"
            onClick={handleClose}
          >
            {t('buttons.cancel')}
          </Button>
          <Button
            variant="primary"
            type="submit"
          >
            {t('buttons.submit')}
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default ModalForm;
