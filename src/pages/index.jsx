"use client";

import { useState } from "react";

import About from "@/components/About/About.jsx";
import CallToAction from "@/components/CallToAction/CallToAction.jsx";
import Feedback from "@/components/Feedback/Feedback.jsx";
import Geography from "@/components/Geography/Geography.jsx";
import Modal from "@/components/Modal/Modal";

function MainPage() {
    const [isSubmitted, setSubmitted] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <About />
            <CallToAction
                isSubmitted={isSubmitted}
                openModal={setShowModal}
                onSubmit={setSubmitted}
            />
            <Geography />
            <Feedback />
            <CallToAction
                isSubmitted={isSubmitted}
                openModal={setShowModal}
                onSubmit={setSubmitted}
            />
            <Modal isVisible={showModal} onClose={handleClose} />
        </>
    );
}

export default MainPage;
