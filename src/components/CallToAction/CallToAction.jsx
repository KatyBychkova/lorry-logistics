import Link from 'next/link';
import { useState } from 'react';

import Modal from '@/components/Modal/Modal.jsx';
import { content } from '@/config/index.js';

import Terms from './Terms.jsx';
import Form from './Form.jsx';
import styles from './CallToAction.module.css';

import 'react-phone-input-2/lib/material.css';

const { callToAction, telephoneFormatForLink } = content;
const {
    title,
    mainAction,
    alternativeAction,
    responseAction,
    telephone,
    terms,
    afterSubmitText,
} = callToAction;

function CallToAction() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);

    const handleClose = () => {
        setIsShowModal(false);
    };

    const handleSubmitted = () => {
        setIsSubmitted(true);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>

                <div className={styles.subtitle}>
                    <p className={styles.mainAction}>
                        {mainAction}
                        <Link
                            className={styles.telephoneLink}
                            href={`tel:${telephoneFormatForLink}`}
                        >
                            {telephone}
                        </Link>
                    </p>
                    <p className={styles.alternativeAction}>
                        {alternativeAction}
                    </p>
                    <p className={styles.responseAction}>{responseAction}</p>
                </div>
                {!isSubmitted ? (
                    <Form
                        isSubmitted={isSubmitted}
                        onSubmitted={handleSubmitted}
                    />
                ) : (
                    <div className={styles.afterSubmit}>
                        <div className={styles.afterSubmitText}>
                            {afterSubmitText}
                        </div>
                    </div>
                )}
                <div className={styles.terms}>
                    {terms.text}
                    <span>
                        <button
                            className={styles.termsBtn}
                            onClick={() => {
                                setIsShowModal(true);
                            }}
                        >
                            {terms.linkText}
                        </button>
                    </span>
                </div>
                <Modal isVisible={isShowModal} onClose={handleClose}>
                    <Terms onClose={handleClose} />
                </Modal>
            </div>
        </section>
    );
}

export default CallToAction;
