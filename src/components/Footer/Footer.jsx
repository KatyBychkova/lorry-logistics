import styles from "@/components/Footer/Footer.module.css";
import { content } from "@/config/index.js";

import LorryBlueLogoIcon from "../../assets/logo/lorry-blue.svg";

const { footer } = content;
const { copy } = footer;

function Footer() {
    return (
        <footer className={styles.section}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.logo_lorry}>
                        <LorryBlueLogoIcon height="36" />
                    </div>

                    <div className={styles.copy}>{copy}</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
