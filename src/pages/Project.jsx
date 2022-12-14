import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CarouselComponent from '../components/Carousel';
import { CHeading } from '../components/CustomTag';
import { Github, Instagram, LinkedIn, Tweeter } from '../images/SVG';

const Project = ({ projects }) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const goBack = () => navigate('/');

    useEffect(() => {
        // window.scrollTo(0, 0);
        console.log(projects[id].image);
    }, [])

    return (
        <div>
            <div id='home' style={{
                backgroundImage: 'linear-gradient(to right,rgba(245,245,245,.8), rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)',
            }} className='bg-dark vh-100 position-relative d-flex flex-column justify-content-center align-items-center'>
                <p className='h1 text-black fw-bold display-4'>{projects[id].title}</p>
                <p style={{ width: '60%' }} className='fs-5 text-center my-4'>{projects[id].intro}</p>
                {
                    projects[id].liveLink
                        ?
                        <a href='https://chatmake.onrender.com/' target='_blank' style={{ padding: '18px 80px' }} className='bg-primary shadow-lg text-black rounded-2 fw-bold mt-3'>LIVE LINK</a>
                        :
                        <></>
                }
            </div>
            <img className='w-100' src={projects[id].image} />

            <div id='projects' className='min-vh-100 bg-white d-flex flex-column align-items-center p-5'>
                <div className='w-50 mb-5'>
                    <h1 className='fw-bold text-black fs-2 mb-3'>Project Overview</h1>
                    {
                        projects[id].description.map(des => (
                            <p className='light-grey-text fs-5 mt-5'>{des}</p>
                        ))
                    }
                </div>

                <div className='w-50 mt-5'>
                    <h1 className='fw-bold text-black fs-2 mb-3'>Technologies</h1>
                    <div className='d-flex flex-wrap mt-5'>
                        {
                            projects[id].technologies.map(skill => {
                                return (
                                    <div className='bg-grey-box me-3 mb-3 px-3 py-2 rounded-1'>
                                        {skill}
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>

                <div onClick={goBack}  style={{ padding: '18px 80px', cursor: 'pointer' }} className='bg-primary shadow-lg text-black rounded-2 fw-bold mt-3'>GO BACK</div>
            </div>



            <div style={{ padding: '100px 150px 50px 150px' }} className='bg-black d-flex flex-column align-items-center'>
                <div className='w-100 d-flex justify-content-between'>
                    <div className='w-50'>
                        <p className='text-white fw-bold fs-4'>RAJ MANGUKIYA</p>
                        <p className='text-light'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                    <div className='w-25'>
                        <p className='text-white fw-bold fs-4'>SOCIAL</p>
                        <div className='w-100 bg-grey-box p-4 d-flex '>
                            <div style={{ height: '30px' }} className='d-flex w-100 justify-content-between'>
                                <LinkedIn width='30' height='30' />
                                <Github width='30' height='30' />
                                <Tweeter width='30' height='30' />
                                <Instagram width='30' height='30' />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '1px' }} className='bg-white w-100 my-5'></div>
                <p className='text-white'>© Copyright 2022. Made by Raj Mangukiya</p>
            </div>
        </div>
    )
}

export default Project