import { ComponentClass, createContext } from "react";

export interface WithModalProps {
  showModal: <T>(component: ComponentClass<T, any>, props: T) => void;
  hideModal: () => void;
}

const ModalContext = createContext<WithModalProps>({
  showModal: (): void => {
  },
  hideModal: (): void => {
  },
});

export default ModalContext;
