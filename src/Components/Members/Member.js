import React from 'react';
import './Member.css'

function RenderEmail (email) {
    var emailto = 'mailto:' + email
    if (email != null)
        return (<a href={emailto} target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"></i></a>)
}

function RenderGithub (github) {
    if (github != null)
        return (<a href={github} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>)
}

function RenderLinkedin (linkedin) {
    if (linkedin != null)
        return (<a href={linkedin} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>)
}

function RenderGoogleScholar (googlescholar) {
    if (googlescholar != null)
        return (<a href={googlescholar} target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap"></i></a>)
}

function RenderWebsite (website) {
    if (website != null)
        return (<a href={website} target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-globe"></i></a>)
}

function Member(props) {
    var pic = '\'' + props.picture + '\''
    console.log(pic)
    return(
        <div className='MemberContainer'>
            <div className='MemberTopContainer'>
                <div className='ProfilePicture' style={
                    {background: `url(${process.env.PUBLIC_URL + props.picture})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }
                }>
                </div>
                <div className='MemberTextContainer'>
                    <h1>{props.name}</h1>
                    <h5>{props.position}</h5>
                </div>
            </div>

            <div className={props.info == null ? 'hide' : 'MemberInfo'}>
                <p>{props.info}</p>
            </div>


            <div className='ContactIcons'>
                {RenderEmail(props.email)}
                {RenderGoogleScholar(props.googlescholar)}
                {RenderWebsite(props.website)}
                {RenderGithub(props.github)}
                {RenderLinkedin(props.linkedin)}
            </div>
        </div>
    )
}

export default Member