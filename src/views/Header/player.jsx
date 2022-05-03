import play from '../../assets/icons/play.svg'
import { useState } from 'react'
import lofi from '../../assets/audio/lofi.mp3'

const player = () => {

    const [click, setClick] = useState(false)

    const switchState = (state) => Boolean(state) ? setClick(false) : setClick(true)
    const audioRender = (canRender) => Boolean(canRender) && (<audio controls autoplay src={lofi}></audio>)




    return (
        <div className="player">
            <a onClick={() => switchState(click)}><img src={play} alt="Play de Música" /></a>
            {audioRender(click)}
        </div>
    )
}

export default player