import Link from 'next/link';

import { content } from '@/config/index.js';

import styles from './Header.module.css';
import LorryWhiteLogoIcon from '../../assets/logo/lorry-white.svg';

const { header, telephoneFormatForLink } = content;
const { telephone, slogan } = header;

function Header() {
    return (
        <header className={`${styles.section} ${styles.container}`}>
            <div className={styles.wrapper}>
                <div className={styles.slogan}>{slogan}</div>
                <div className={styles.logo}>
                    <LorryWhiteLogoIcon
                        className={styles.logoImage}
                        height="95"
                    />
                </div>
                <div className={styles.telephone}>
                    <Link
                        className={styles.telephoneLink}
                        href={`tel:${telephoneFormatForLink}`}
                    >
                        {telephone}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
