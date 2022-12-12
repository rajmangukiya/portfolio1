import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../layout/Header'
import Home from '../pages/Home'
import Project from '../pages/Project'

const Router = () => {

    const projects = [
        {
            id: 1,
            title: 'Money Loan',
            intro: 'Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.',
            technologies: [
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.Js', 'MongoDB',
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.Js', 'MongoDB'
            ]
        },
        {
            id: 2,
            title: 'Chat Make',
            intro: 'Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.',
            technologies: [
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.Js', 'MongoDB',
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.Js', 'MongoDB'
            ]
        },
        {
            id: 3,
            title: 'Money Loan',
            intro: 'Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.',
            technologies: [
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.Js', 'MongoDB',
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.Js', 'MongoDB'
            ]
        },
        {
            id: 4,
            title: 'Money Loan',
            intro: 'Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation.',
            technologies: [
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.Js', 'MongoDB',
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.Js', 'MongoDB'
            ]
        }
    ]

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home projects={projects} />} />
                <Route path='/project/:id' element={<Project projects={projects} />} />
            </Routes>
        </div>
    )
}

export default Router