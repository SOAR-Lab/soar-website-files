import React, { useState, useEffect } from 'react';
import Button from '../Button'
import './Info.css'


function Info(props) {

    const [visibility, setVisibility] = useState('InfoContainer')

    useEffect(() => {
        if(props.isMobile) {
            setVisibility('hide')
        }
    },[props.isMobile])

    useEffect(() => {
        if (props.isMobile && !props.infoTab && !props.abstractTab)
            setVisibility('hide')
        else if (props.isMobile && (props.infoTab || props.abstractTab))
            setVisibility('InfoContainer')
        else setVisibility('InfoContainer')
    })

    const handleClick = () => {
        if (props.infoTab) props.setInfoTab(previousState => !previousState)
        if (props.abstractTab) props.setAbstractTab(previousState => !previousState)
        props.setNoscroll('PublicationItems')
    }

    return (
        <div className={visibility}>

            <div className='InfoText'>
                <div className={props.isMobile ? 'CloseInfoIcon' : 'hide'} onClick={handleClick}>
                    <i className={'fas fa-times'}></i>
                </div>
                <div className='InfoTitle'>
                    <h3 className={props.infoTab ? '' : 'hide'}>{props.author}</h3>
                    <h3 className={props.abstractTab ? 'InfoAbstract' : 'hide'}>ABSTRACT</h3>
                </div>
                <div className='InfoDetail'>
                    <p className={props.infoTab ? '' : 'hide'}>{props.synopsis}</p>
                    <p className={props.abstractTab ? 'InfoAbstract' : 'hide'}>{props.abstract}</p>
                </div>
            </div>
            <div className="InfoButtonContainer">
                {Object.keys(props.links).map((link, index) => {
                    if (props.links[link] != null) {
                        return (
                            <Button name={link} url={props.links[link]}/>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Info