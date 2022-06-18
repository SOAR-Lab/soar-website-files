import React, { useEffect, useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
import Preview from './Preview'
import Info from './Info'
import './Card.css'

function Card(props) {
    const [abstractClicked, setAbstractCliked] = useState(false)
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 960 ? true : false)
    const [infoTab, setInfoTab] = useState(true)
    const [abstractTab, setAbstractTab] = useState(false)

    const handleResize = () => {
        setWindowWith(window.innerWidth)
        if (windowWidth < 960) {
            setIsMobile(true)
        }
    }

    useEffect(() => {
        if (isMobile) {
            setInfoTab(false)
            console.log('set infotab false')
        }
    },[isMobile])

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
    })

    return(
        <div className={'CardContainer'}>
            <Preview {...props}
                abstractClicked={abstractClicked}
                setAbstractCliked={setAbstractCliked}
                isMobile={isMobile}
                setIsMobile={setIsMobile}
                infoTab={infoTab}
                setInfoTab={setInfoTab}
                abstractTab={abstractTab}
                setAbstractTab={setAbstractTab}
                noscroll={props.noscroll}
                setNoscroll={props.setNoscroll}/>

            <Info {...props}
                abstractClicked={abstractClicked}
                isMobile={isMobile}
                infoTab={infoTab}
                setInfoTab={setInfoTab}
                abstractTab={abstractTab}
                setAbstractTab={setAbstractTab}
                noscroll={props.noscroll}
                setNoscroll={props.setNoscroll}/>
        </div>
    )
}

export default Card