import './Intro.css'

function Intro({ onFinish }) {
    return (
        <div className="intro">
            <video
                className="intro-video"
                autoPlay
                muted
                playsInline
                onEnded={onFinish}
                onError={onFinish}
            >
                <source
                    src="/intro.webm"
                    type="video/webm"
                />

            </video>
        </div>
    )
}

export default Intro