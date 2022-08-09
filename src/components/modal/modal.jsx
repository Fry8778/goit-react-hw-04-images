import { useEffect } from 'react';
import styles from './modal.module.css';

const Modal = ({ objectModal, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });
  const handleCloseBackdrop = e => {
    if (e.target.nodeName !== 'DIV') return;
    toggleModal();
  };

  return (
    <div className={styles.overlay} onClick={handleCloseBackdrop}>
      <div className={styles.modal}>
        <img src={objectModal.src} alt={objectModal.alt} />
      </div>
    </div>
  );
};

export default Modal;