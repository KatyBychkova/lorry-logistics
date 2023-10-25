import About from '@/components/About/About.jsx';
import CallToAction from '@/components/CallToAction/CallToAction.jsx';
import Feedback from '@/components/Feedback/Feedback.jsx';
import Geography from '@/components/Geography/Geography.jsx';

function MainPage() {
    return (
        <>
            <About />
            <CallToAction />
            <Geography />
            <Feedback />
            <CallToAction />
        </>
    );
}

export default MainPage;
