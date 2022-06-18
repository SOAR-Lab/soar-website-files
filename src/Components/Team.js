import React from 'react';
import Member from './Members/Member'
import { TeamMembers } from './Members/TeamMembers'
import './Team.css'


function Team() {
    return(
        <>
            <div className='TeamContainer'>

                <h2>Lab Director</h2>
                <div className='LabDirectorContainer position'>
                    { TeamMembers.map((member, index) => {
                        if (member.div === 'LabDirector')
                        return(
                            <Member
                                key={index}
                                {...member}
                            />
                        )
                    })}
                </div>

                <h2>Ph.D. Students</h2>
                <div className='PHDStudentsContainer position'>
                    { TeamMembers.map((member, index) => {
                        if (member.div === 'PHD')
                        return(
                            <Member
                                key={index}
                                {...member}
                            />
                        )
                    })}
                </div>

                <h2>Undergraduate Students</h2>
                <div className='UndergradStudentsContainer position'>
                { TeamMembers.map((member, index) => {
                        if (member.div === 'Undergraduate')
                        return(
                            <Member
                                key={index}
                                {...member}
                            />
                        )
                    })}
                </div>

                <h2>Alumni</h2>
                <div className='AlmuniStudentContainer position'>
                { TeamMembers.map((member, index) => {
                        if (member.div == 'Alumni')
                        return(
                            <Member
                                key={index}
                                {...member}
                            />
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Team