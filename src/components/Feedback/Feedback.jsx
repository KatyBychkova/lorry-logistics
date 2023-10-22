import Image from "next/image";

import { content } from "@/config/index.js";

import styles from "./Feedback.module.css";

const { feedback } = content;
const { title, opinions } = feedback;

function Feedback() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.opinions}>
                    <div className={styles.opinions}>
                        {opinions.map((opinion) => (
                            <div
                                key={`${opinion.name}-${opinion.profession}`}
                                className={styles.opinion}
                            >
                                {opinion.photoLeft === "true" ? (
                                    <div className={styles.opinionItem}>
                                        <div className={styles.photoWrapper}>
                                            <Image
                                                alt="фото сотрудника"
                                                className={styles.photo}
                                                height="80"
                                                src={opinion.photoPath}
                                                width="80"
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.opinionWrapperPhotoLeft
                                            }
                                        >
                                            <div
                                                className={styles.opinionInner}
                                            >
                                                <div
                                                    className={
                                                        styles.opinionName
                                                    }
                                                >
                                                    {opinion.name}
                                                </div>
                                                <div
                                                    className={
                                                        styles.opinionProfession
                                                    }
                                                >
                                                    {opinion.profession}
                                                </div>
                                                <div
                                                    className={
                                                        styles.opinionText
                                                    }
                                                >
                                                    {opinion.opinion}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.opinionItem}>
                                        <div
                                            className={
                                                styles.opinionWrapperPhotoRight
                                            }
                                        >
                                            <div
                                                className={styles.opinionInner}
                                            >
                                                <div
                                                    className={
                                                        styles.opinionName
                                                    }
                                                >
                                                    {opinion.name}
                                                </div>
                                                <div
                                                    className={
                                                        styles.opinionProfession
                                                    }
                                                >
                                                    {opinion.profession}
                                                </div>
                                                <div
                                                    className={
                                                        styles.opinionText
                                                    }
                                                >
                                                    {opinion.opinion}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.photoWrapper}>
                                            <Image
                                                alt="фото сотрудника"
                                                className={styles.photo}
                                                height="80"
                                                src={opinion.photoPath}
                                                width="80"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
