export interface ToDo {
  id: number,
  body: string,
  status: string
}

export interface ToDosState {
  todos: ToDo[];
}

export enum Status {
  DONE = 'DONE',
  NOT_DONE = 'NOT_DONE',
}

export interface AddProps {
  handleClose: () => void;
}

export interface RemoveProps {
  handleClose: () => void;
}

export interface ModalState {
  isOpen: boolean,
  type: string | null,
}

export interface ModalTypes {
  [key: string]: React.ComponentType<AddProps | RemoveProps>;
}
