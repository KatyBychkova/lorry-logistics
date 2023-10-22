"use client";

import { useState } from "react";

import About from "@/components/About/About";
import CallToAction from "@/components/CallToAction/CallToAction";
import Feedback from "@/components/Feedback/Feedback";
import Geography from "@/components/Geography/Geography";
import Layout from "@/components/Layout/Layout.jsx";

import "@/styles/index.css";

export default function MyApp({ pageProps }) {
    const [isSubmit, setSubmit] = useState(false);

    const handleSubmit = () => {
        setSubmit(false);
    };

    return (
        <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}

            <About {...pageProps} />
            <CallToAction isSubmit={setSubmit} onSubmitted={handleSubmit} />
            <Geography {...pageProps} />
            <Feedback {...pageProps} />
            <CallToAction {...pageProps} />
        </Layout>
    );
}
