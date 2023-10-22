import { content } from "@/config/index.js";

import styles from "./About.module.css";

const { about } = content;
const { titleFirst, titleSecond, subtitle, positivePoint } = about;

function About() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <h4 className={styles.positivePoint}>
                            {positivePoint}
                        </h4>
                        <h1 className={styles.title}>{titleFirst}</h1>
                        <h1 className={styles.title}>{titleSecond}</h1>
                        <h3 className={styles.subtitle}>{subtitle}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
