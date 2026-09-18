import { useState } from 'react'
import './Intro.css'

function Intro({ onFinish }) {
    const [isExiting, setIsExiting] = useState(false)

    function handleVideoEnd() {
        setIsExiting(true)
    }

    function handleTransitionEnd(event) {
        if (
            isExiting &&
            event.target === event.currentTarget
        ) {
            onFinish()
        }
    }

    return (
        <div
            className={`intro ${isExiting ? 'intro--exiting' : ''}`}
            onTransitionEnd={handleTransitionEnd}
        >
            <video
                className="intro-video"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                onError={onFinish}
            >
                <source src="/intro.webm" type="video/webm" />
                <source src="/intro.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Intro
