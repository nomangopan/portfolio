import React from 'react'
import Card from '../../utils/Card'
import './education.css'

const Education = () => {

    const educationData = [
        {
            educationLevel: "Bachelor's in Engineering",
            instituteName: "NUST",
            year: "2017 - 2021"
        },
        {
            educationLevel: "Intermediate",
            instituteName: "Malir Cantt College",
            year: "2015 - 2017"
        },
        {
            educationLevel: "Matriculation",
            instituteName: "KGS",
            year: "2013- - 2025"
        },
    ]

    return (
        <div className='education'>
            <h1>Education</h1>

            <div className='projectCards'>
                {educationData.map((i, index) => {
                    return (
                        <Card
                            projectDesc={i.instituteName}
                            yearVisible={true}
                            projectTitle={i.educationLevel}
                            year={i.year}
                            isButtonVisible={false}

                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Education