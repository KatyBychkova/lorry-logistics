import termsContent from './terms.js';
import styles from './Terms.module.css';

function Terms() {
    const { title, paragraphs, agreement } = termsContent;

    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <h1 className={styles.titleText}>
                    {title.text}
                    <span className={styles.titleAttrubutes}>{title.attributes}</span>
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
    );
}

export default Terms;
