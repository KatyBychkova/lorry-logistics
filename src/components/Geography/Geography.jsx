import { content } from '@/config/index.js';

import styles from './Geography.module.css';

const { geography } = content;
const { title, districts } = geography;
const [firstDistrict, secondDistrict, thirdDistrict] = districts;

function Geography() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.districts}>
                    <div className={styles.district}>
                        <h3 className={styles.districtName}>
                            {firstDistrict?.districtName}
                        </h3>
                        <div className={styles.districtLocations}>
                            {firstDistrict?.cities.map((city) => (
                                <div
                                    key={`${city.cityName}-${city.adress}`}
                                    className={styles.districtLocation}
                                >
                                    <p className={styles.districtRegion}>
                                        {city?.region}
                                    </p>
                                    <p className={styles.districtCity}>
                                        {city.cityName}
                                    </p>

                                    <p className={styles.districtAdress}>
                                        {city.adress}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.district}>
                        <h3 className={styles.districtName}>
                            {secondDistrict?.districtName}
                        </h3>
                        <div className={styles.districtLocations}>
                            {secondDistrict?.cities.map((city) => (
                                <div
                                    key={`${city.cityName}-${city.adress}`}
                                    className={styles.districtLocation}
                                >
                                    <p className={styles.districtRegion}>
                                        {city?.region}
                                    </p>
                                    <p className={styles.districtCity}>
                                        {city.cityName}
                                    </p>
                                    <p className={styles.districtAdress}>
                                        {city.adress}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.district}>
                        <h3 className={styles.districtName}>
                            {thirdDistrict?.districtName}
                        </h3>
                        <div className={styles.districtLocations}>
                            {thirdDistrict?.cities.map((city) => (
                                <div
                                    key={`${city.cityName}-${city.adress}`}
                                    className={styles.districtLocation}
                                >
                                    <p className={styles.districtRegion}>
                                        {city?.region}
                                    </p>
                                    <p className={styles.districtCity}>
                                        {city.cityName}
                                    </p>
                                    <p className={styles.districtAdress}>
                                        {city.adress}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Geography;
