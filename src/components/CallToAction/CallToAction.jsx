"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";

import { content } from "@/config/index.js";
import { validator } from "@/utils/validator.js";
import inputStyles from "@/styles/inputTelStyles.json";

import styles from "./CallToAction.module.css";

import "react-phone-input-2/lib/material.css";

const { callToAction, telefonFormatForLink } = content;
const {
    title,
    mainAction,
    alternativeAction,
    responseAction,
    telephone,
    placeholderName,
    placeholderTelephone,
    placeholderCity,
    submitBtnText,
    terms,
} = callToAction;

const { inputTelStyles, inputTelStylesError } = inputStyles;

function CallToAction({ isSubmitted, onSubmit }) {
    const [nameDirty, setNameDirty] = useState(false);
    const [telDirty, setTelDirty] = useState(false);

    const [initialData] = useState({
        name: "",
        tel: "",
        city: "",
    });

    const [data, setData] = useState(initialData);

    const [errors, setErrors] = useState({});

    const blurHandlerName = (e) => {
        if (e.target.name === "name") {
            setNameDirty(true);
        }
    };

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

        // setModal(typeModalSubmitted);
        console.log(isSubmitted);
        onSubmit(true);
        console.log(isSubmitted);
        cleanForm();
    };

    return (
        <section className={styles.section}>
            {!isSubmitted ? (
                <div className={styles.container}>
                    <h1 className={styles.title}>{title}</h1>

                    <div className={styles.subtitle}>
                        <p className={styles.mainAction}>
                            {mainAction}
                            <Link
                                className={styles.telephoneLink}
                                href={`tel:${telefonFormatForLink}`}
                            >
                                {telephone}
                            </Link>
                        </p>
                        <p className={styles.alternativeAction}>
                            {alternativeAction}
                        </p>
                        <p className={styles.responseAction}>
                            {responseAction}
                        </p>
                    </div>
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
                                    // onBlur={() => setTelDirty(true)}
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
                                    // onBlur={(e) => blurHandlerName(e)}
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
                                    onBlur={(e) => blurHandlerName(e)}
                                    onChange={handleNameChange}
                                />
                            </div>

                            <div className={styles.callToActionSubmit}>
                                <div>
                                    <button
                                        className={
                                            styles.callToActionSubmit_btn
                                        }
                                        type="submit"
                                    >
                                        {submitBtnText}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {telDirty && errors.tel ? (
                        <div className={styles.errorAlert}> {errors.tel}</div>
                    ) : nameDirty && errors.name ? (
                        <div className={styles.errorAlert}> {errors.name}</div>
                    ) : null}

                    {/* ----------------------------------- Terms ------------------------------ */}
                    <div className={styles.terms}>
                        {terms.text}
                        <span>
                            <button
                                className={styles.terms_btn}
                                onClick={() => {
                                    // openModal(true);
                                    // setModal(typeTerms);
                                }}
                            >
                                {terms.linkText}
                            </button>
                        </span>
                    </div>
                </div>
            ) : (
                <div>Не Контент</div>
            )}
        </section>
    );
}

export default CallToAction;
