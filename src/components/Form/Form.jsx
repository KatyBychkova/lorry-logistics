"use client";

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";

import { content } from "@/config/index.js";
import { validator } from "@/utils/validator.js";
import inputStyles from "@/styles/inputTelStyles.json";
import styles from "@/components/Form/Form.module.css";

import "react-phone-input-2/lib/material.css";

const { form } = content;
const {
    placeholderName,
    placeholderTelephone,
    placeholderCity,
    submitBtnText,
} = form;

const { inputTelStyles, inputTelStylesError } = inputStyles;

const validatorConfig = {
    name: {
        isRequired: {
            message: "Пожалуйста, заполните все обязательные поля",
        },
        min: {
            message: "Имя должно содержать минимум 2 символа",
            value: 2,
        },
        isName: {
            message: "Имя некорректно",
        },
    },
    tel: {
        isRequired: {
            message: "Пожалуйста, заполните все обязательные поля",
        },
        isTel: {
            message: "Номер введен некорректно",
        },
        min: {
            message: "Слишком короткий номер",
            value: 9,
        },
    },
};

const initialData = {
    name: "",
    tel: "",
    city: "",
};

function Form({ onSubmitted }) {
    const [nameDirty, setNameDirty] = useState(false);
    const [telDirty, setTelDirty] = useState(false);

    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState({});

    const cleanForm = () => {
        setNameDirty(false);
        setTelDirty(false);
        setData(initialData);
    };

    const handleNameChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTelChange = (value) => {
        setData((prev) => ({
            ...prev,
            tel: value,
        }));
    };

    const validate = () => {
        const validatorErrors = validator(data, validatorConfig);
        setErrors(validatorErrors);
        return Object.keys(validatorErrors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            setNameDirty(true);
            setTelDirty(true);
            return;
        }

        // eslint-disable-next-line no-console
        console.log(JSON.stringify(data));

        onSubmitted(true);

        cleanForm();
    };

    return (
        <div className={styles.container}>
            {/* ----------------------------------- Form ------------------------------ */}
            <div className={styles.form_inner}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.form_tel}>
                        <PhoneInput
                            country="ru"
                            error={errors.tel}
                            id="tel"
                            inputClass={styles.phone}
                            inputProps={{ required: true }}
                            inputStyle={
                                telDirty && errors.tel
                                    ? { ...inputTelStylesError }
                                    : { ...inputTelStyles }
                            }
                            name="tel"
                            placeholder={placeholderTelephone}
                            specialLabel={null}
                            value={data.tel}
                            onChange={handleTelChange}
                        />
                    </div>

                    <div
                        className={
                            telDirty && errors.tel
                                ? styles.form_error
                                : styles.form_name
                        }
                    >
                        <input
                            id="name"
                            name="name"
                            placeholder={placeholderName}
                            style={
                                nameDirty && errors.name
                                    ? {
                                          borderColor: "#d1274a",
                                          boxShadow: "none",
                                      }
                                    : { borderColor: "#064488" }
                            }
                            type="text"
                            value={data.name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div>
                        <input
                            id="city"
                            name="city"
                            placeholder={placeholderCity}
                            type="text"
                            value={data.city}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className={styles.formSubmit}>
                        <div>
                            <button
                                className={styles.formSubmit_btn}
                                type="submit"
                            >
                                {submitBtnText}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {telDirty && errors.tel ? (
                <div className={styles.errorAlert}>{errors.tel}</div>
            ) : nameDirty && errors.name ? (
                <div className={styles.errorAlert}>{errors.name}</div>
            ) : null}
        </div>
    );
}

export default Form;