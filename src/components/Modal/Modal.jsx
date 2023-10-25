'use client';

import { useEffect } from 'react';
import {
    lock as scrollLock,
    unlock as scrollUnlock,
} from 'tua-body-scroll-lock';

import CrossIcon from '../../assets/icons/cross.svg';
import CloseButton from './CloseButton.jsx';
import ModalTerms from './ModalTerms.jsx';
import styles from './Modal.module.css';

function Modal({ isVisible, onClose }) {
    useEffect(() => {
        if (isVisible) {
            scrollLock();
        } else {
            scrollUnlock();
        }
    });

    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles.main} onClick={onClose}>
            <ModalTerms onClose={onClose} />

            <div className={styles.close_btn}>
                <CloseButton onClose={onClose}>
                    <CrossIcon className={styles.closeCross} />
                </CloseButton>
            </div>
        </div>
    );
}
export default Modal;
