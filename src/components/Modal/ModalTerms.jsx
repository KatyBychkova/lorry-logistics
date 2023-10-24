'use client';

import termsContent from './terms.js';
import styles from './ModalTerms.module.css';

function ModalTerms() {
    const { title, paragraphs, agreement } = termsContent;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1 className={styles.title_text}>
                            {title.text}
                            <span className={styles.title_attrubutes}>{title.attributes}</span>
                        </h1>
                    </div>
                    <div className={styles.paragraphs}>
                        {paragraphs.map((paragraph) => (
                            <div key={paragraph.title} className={styles.paragraph}>
                                <h4>{paragraph.title}</h4>
                                {paragraph.points.map((point) => (
                                    <p key={point} className={styles.point}>
                                        {point}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={styles.agreement}>{agreement}</div>
                </div>
            </div>
        </div>
    );
}

export default ModalTerms;
