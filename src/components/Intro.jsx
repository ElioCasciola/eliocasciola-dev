import { useEffect, useRef, useState } from 'react'
import './Intro.css'

export default function Intro({ onFinish }) {
  const video = useRef(null)
  const [isExiting, setIsExiting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onFinish()
      return
    }
    const element = video.current
    let mounted = true
    const deadline = window.setTimeout(() => { if (mounted) onFinish() }, 4000)
    element.defaultMuted = true
    element.muted = true
    element.playsInline = true
    element.playbackRate = 2
    element.play().then(() => window.clearTimeout(deadline)).catch(() => {
      window.clearTimeout(deadline)
      if (mounted) onFinish()
    })
    return () => {
      mounted = false
      window.clearTimeout(deadline)
      element.pause()
    }
  }, [onFinish])

  return (
    <div className={`intro ${isPlaying ? 'intro--playing' : ''} ${isExiting ? 'intro--exiting' : ''}`} aria-hidden="true"
      onTransitionEnd={event => { if (isExiting && event.target === event.currentTarget) onFinish() }}>
      <video ref={video} className="intro-video" src="/intro-safari.mp4" autoPlay muted playsInline preload="auto" width="1152" height="648" disablePictureInPicture
        onLoadedMetadata={event => { event.currentTarget.playbackRate = 2 }}
        onPlaying={() => setIsPlaying(true)} onEnded={() => setIsExiting(true)} onError={onFinish} />
    </div>
  )
}
