import React from 'react'
import Tag from './Tag'
const skills = ['Javascript', 'Html', 'Css', 'ReactJS', 'NodeJS', 'ExpreeJS', 'MongoDB', 'Redux', "Tailwind", 'Git & Github', 'Redux-Toolkit','Python','C']

function Skills() {
    return (
        <section className='p-2 mt-6 text-center bg-white shadow-md rounded-xl md:p-5 md:text-left hover:shadow-xl'>
            <h2 className='mb-3 text-lg font-semibold text-gray-500 md:text-2xl'>Skills</h2>
            <ul className='flex flex-wrap gap-3 leading-8'>
                {
                    skills.map((item, index) => (
                        <li key={index}><Tag name={item}/></li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Skills
