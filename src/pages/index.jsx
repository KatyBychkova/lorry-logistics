import { useState } from "react";

import About from "@/components/About/About.jsx";
import CallToAction from "@/components/CallToAction/CallToAction.jsx";
import Feedback from "@/components/Feedback/Feedback.jsx";
import Geography from "@/components/Geography/Geography.jsx";

function MainPage() {
    const [isSubmitted, setSubmitted] = useState(false);

    return (
        <>
            <About />
            <CallToAction isSubmitted={isSubmitted} onSubmit={setSubmitted} />
            <Geography />
            <Feedback />
            <CallToAction isSubmitted={isSubmitted} onSubmit={setSubmitted} />
        </>
    );
}

export default MainPage;
