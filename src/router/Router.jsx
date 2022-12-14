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
            intro: 'Money Loan is an mobile application to provide loan on behalf of the applicant income.',
            description: [
                'Money Loan is an react native application for both android and iOS, with the use of this application user can request a loan amount on behalf ofhis current income.',
                'after sending loan request admin will be able to analyze user data and will decide whether to approve that loan or not.',
                'Here, 5 types pf calculator are provided where user can easly understand basic tax and other calculation.'
            ],
            technologies: [
                'JavaScript', 'React Native', 'Node.Js', 'Express', 'MongoDB'
            ],
            image: require('../images/moneyLoan/moneyLoan.png'),
            thumbNail: require('../images/moneyLoan/thumbNail.png')
        },
        {
            id: 2,
            title: 'Chat Make',
            intro: 'ChatMake is a web application where users can chat with eachother in realtime',
            description: [
                'ChatMake is an web application made using React and Node, where users can chat with eachother in realtime with the use of socket servers.',
                'Here, Users are also able to create group on their own and can chat in group as well',
                'In ChatMake google authentication is implemented so user do not have to signup on their own.'
            ],
            technologies: [
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.Js', 'Node.Js', 'Express', 'PostgreSQL', 'Socket.io'
            ],
            image: require('../images/chatmake/chatmake.png'),
            thumbNail: require('../images/chatmake/thumbNail.png'),
            liveLink: 'https://chatmake.onrender.com/'
        },
        {
            id: 3,
            title: 'Splitwise',
            intro: 'Splitwise is an mobile application to manage expenses between family and friends.',
            description: [
                'Money Loan is a React Native application for both android and iOS, where users can manages their day to day expenses without making any hard calculation.',
                'Splitwise is very helpful in spliting expenses between friends where payer do not have to worry about any calculation of spliting.',
                'In Splitwise Graph, monthly expenses are also provided so user can analyze their expenses.'
            ],
            technologies: [
                'JavaScript', 'TypeScript', 'React Native', 'Node.Js', 'Express', 'MongoDB'
            ],
            image: require('../images/splitwise/splitwise.png'),
            thumbNail: require('../images/splitwise/thumbNail.png')
        },
        {
            id: 4,
            title: 'Compasstrips',
            intro: 'Compasstrips is a web application to manage tours, where users can join tour as well as can host of the tour',
            description: [
                'Compasstrips is a web application made using React and SQL Database PostgreSQ.',
                'Here, users can become part of the hosted tour and user can also become host of the tour whcih will be approved by admin if request is genuine.',
                'In Compasstrips places and itinararies are provided by admin users only can become host of that itinarary.'
            ],
            technologies: [
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.Js', 'Node.Js', 'Express', 'PostgreSQL'
            ],
            image: require('../images/compasstrips/compasstrips.png'),
            thumbNail: require('../images/compasstrips/thumbNail.png')
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