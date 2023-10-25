'use client';

import { useEffect } from 'react';
import {
    lock as scrollLock,
    unlock as scrollUnlock,
} from 'tua-body-scroll-lock';

import CrossIcon from '../../assets/icons/cross.svg';
import CloseButton from './CloseButton.jsx';
import styles from './Modal.module.css';

function Modal({ isVisible, onClose, children }) {
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
            <div className={styles.container}>
                <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                    <div>
                        { children }
                    </div>
                    <div className={styles.close_btn}>
                        <CloseButton onClose={onClose}>
                            <CrossIcon className={styles.closeCross} />
                        </CloseButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;
