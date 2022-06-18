import React, {useEffect, useState} from 'react';
import './Preview.css'

function Preview (props) {

    function handleTabState(info, abstract, status) {
        if (!props.infoTab && !props.abstractTab) {
            if (info) props.setInfoTab(previousState => !previousState)
            if (abstract) props.setAbstractTab(previousState => !previousState)
            props.setNoscroll('PublicationItems noscroll')
        }
        else if (!status){
            props.setInfoTab(previousState => !previousState)
            props.setAbstractTab(previousState => !previousState)
        }
    }

    function handleInfoTabClassName() {
        if (props.isMobile && !props.infoTab) {
            return 'PreviewTab'
        }
        else if (props.isMobile && props.infoTab) {
            return 'PreviewTab active'
        }
        else if (!props.isMobile && !props.infoTab) {
            return 'PreviewTab'
        }
        else if (!props.isMobile && props.infoTab) {
            return 'PreviewTab active'
        }
    }

    function handleAbstractTabClassName() {
        if (props.isMobile && !props.abstractTab) {
            return 'PreviewTab'
        }
        else if (props.isMobile && props.abstractTab){
            return 'PreviewTab active'
        }
        else if (!props.isMobile && !props.abstractTab) {
            return 'PreviewTab'
        }
        else if (!props.isMobile && props.abstractTab){
            return 'PreviewTab active'
        }
    }

    return (
        <div className='PreviewContainer'>
            <div className='PreviewInfo'>
                <h6>{props.year}</h6>
                <h2>{props.title}</h2>
            </div>
            <div className='PreviewTabs'>
                <button className={handleInfoTabClassName()} onClick={() => {handleTabState(1,0, props.infoTab)}}>Info</button>
                <button className={handleAbstractTabClassName()} onClick={() => {handleTabState(0,1, props.abstractTab)}}>Abstract</button>
            </div>
        </div>
    )
}

export default Preview