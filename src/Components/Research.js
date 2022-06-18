import React from "react";
import ResearchCard from "./ResearchCard/ResearchCard";
import { ResearchDB } from './ResearchCard/ResearchDB'
import CollaboratorsCard from "./ResearchCard/CollaboratorsCard";
import { CollaboratorsDB } from "./ResearchCard/CollaboratorDB";
import './Research.css'

function Research(props) {
    return(
        <div className="Research">
            <h1 className="headings">Research</h1>
            <div className="ResearchContainer">
                {ResearchDB.map((research, index) => {
                    return(
                        <ResearchCard
                            key={index}
                            {...research}
                        />
                    )
                })}
            </div>
            <h1 className="headings">Collaborators</h1>
            <div className="ResearchMemberContainer">
                {CollaboratorsDB.map((collaborator, index) => {
                    return(
                        <CollaboratorsCard
                            key={index}
                            {...collaborator}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Research