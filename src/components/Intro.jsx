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
            <video
                className="intro-video"
                autoPlay
                muted
                playsInline
                onError={onFinish}
            >
            </video>
        </div>
    )
}

export default Intro