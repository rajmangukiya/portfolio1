import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CHeading } from '../components/CustomTag'
import { Github, Instagram, LinkedIn, Skype, Tweeter } from '../images/SVG'

const Home = ({ projects }) => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const skills = [
    'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'React.Js', 'React Native', 'Node.Js', 'Express', 'PostgreSQL', 'MongoDB', 'Git', 'Github',
  ]

  const openProject = (id) => {
    navigate(`/project/${id}`);
  }

  const onSubmit = () => {
    setForm({
      name: '',
      email: '',
      message: ''
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div>
      <div style={{ height: 85, zIndex: '1' }} className='position-fixed w-100 shadow-lg bg-white d-flex flex-row justify-content-between px-5 align-items-center'>
        <div className='d-flex flex-row h-100 align-items-center'>
          <img className='h-50 rounded-circle me-3' src={require('../images/profile.jpeg')}></img>
          <a href='#home' className='link-button fw-bolder'>RAJ MANGUKIYA</a>
        </div>
        <div style={{ width: '30%' }} className='me-5 d-flex justify-content-between'>
          <a href='#home' className='link-button fw-bolder'>HOME</a>
          <a href='#about' className='link-button fw-bolder'>ABOUT</a>
          <a href='#projects' className='link-button fw-bolder'>PROJECTS</a>
          <a href='#contact' className='link-button fw-bolder'>CONTACT</a>
        </div>
      </div>



      <div id='home' style={{
        backgroundImage: 'linear-gradient(to right,rgba(245,245,245,.8), rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)',
      }} className='bg-dark vh-100 position-relative d-flex align-items-center'>
        <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center'>
          <p className='h1 text-black fw-bold display-4'>HEY, I'M RAJ MANGUKIYA</p>
          <p style={{ width: '60%' }} className='fs-5 text-center my-4'>A fullstack developer who can create fullstack web application and mobile application that leads bussiness to the success in digital world.</p>
          <a href='#projects' style={{ padding: '18px 80px' }} className='bg-primary shadow-lg text-black rounded-2 fw-bold mt-3'>PROJECTS</a>
        </div>
        <div style={{ borderRadius: '0px 5px 5px 0px', height: '230px' }} className='bg-white position-absolute start-0 d-flex flex-column justify-content-between p-3 shadow-lg'>
          <LinkedIn width='30' height='30' />
          <Github width='30' height='30' />
          {/* <Tweeter width='30' height='30' /> */}
          <Instagram width='30' height='30' />
          <Skype width='30' height='30' />
        </div>
      </div>



      <div id='about' style={{ backgroundColor: '#FAFAFA' }} className='d-flex flex-column align-items-center pb-5'>
        <CHeading text='about me' />
        <p className='light-grey-text fs-5 w-50 text-center mt-5'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        <div style={{ padding: '100px 150px' }} className='d-flex justify-content-between'>
          <div style={{ width: '45%' }} className='d-flex flex-column align-items-center'>
            <h1 className='fw-bold fs-2 mb-5'>Get to know me!</h1>
            <p style={{ fontSize: '17px' }} className='light-grey-text lh-lg'>I'm a fullstack developer who can create fullstack web application and mobile application that leads bussiness to the success in digital world.  Check out some of my work in the Projects section.</p>
            <p style={{ fontSize: '17px' }} className='light-grey-text lh-lg'>I have done 2 internships where i leraned to make an industry level product, I do also have experience of freelance work for international client.</p>
            <p style={{ fontSize: '17px' }} className='light-grey-text lh-lg'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
            <a href='#contact' className='bg-primary px-5 py-3 rounded-1 fw-bold shadow mt-3'>CONTACT</a>
          </div>
          <div style={{ width: '40%' }} className='d-flex flex-column align-items-center'>
            <h1 className='fw-bold fs-2 mb-5'>My Skills</h1>
            <div className='d-flex flex-wrap'>
              {
                skills.map(skill => {
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
        </div>
      </div>



      <div id='projects' className='min-vh-100 bg-white d-flex flex-column align-items-center'>
        <CHeading text='projects' />
        <p className='light-grey-text fs-5 w-50 text-center mt-5'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        <div style={{ padding: '150px' }} className='w-100'>
          {
            projects.map((project, i) => {
              if (i % 2) return (
                <div key={i} style={{ marginBottom: '150px' }} className='d-flex justify-content-between'>
                  <div style={{ width: '35%' }} className='d-flex flex-column justify-content-center'>
                    <h1 className='fw-bold fs-2 mb-3'>{project.title}</h1>
                    <p style={{ fontSize: '17px' }} className='light-grey-text lh-lg'>{project.intro}</p>
                    <button onClick={() => openProject(i)} className='bg-primary px-5 py-3 rounded-1 fw-bold shadow mt-3 align-self-start text-black'>EXPLORE</button>
                  </div>
                  <div style={{ width: '45%', height: '400px' }} >
                    <img className='w-100 rounded-3' src={projects[i].thumbNail} />
                  </div>
                </div>
              )
              else return (
                <div key={i} style={{ marginBottom: '150px' }} className='d-flex justify-content-between'>
                  <div style={{ width: '45%', height: '400px' }} >
                    <img className='w-100 rounded-3' src={projects[i].thumbNail} />
                  </div>
                  <div style={{ width: '35%' }} className='d-flex flex-column justify-content-center'>
                    <h1 className='fw-bold fs-2 mb-3'>{project.title}</h1>
                    <p style={{ fontSize: '17px' }} className='light-grey-text lh-lg'>{project.intro}</p>
                    <button onClick={() => openProject(i)} className='bg-primary px-5 py-3 rounded-1 fw-bold shadow mt-3 align-self-start text-black'>EXPLORE</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>



      <div id='contact' style={{
        backgroundImage: 'linear-gradient(to right,rgba(245,245,245,.8), rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)',
      }} className='min-vh-100 d-flex flex-column align-items-center'>
        <CHeading text='contact' />
        <p className='light-grey-text fs-5 w-50 text-center mt-5'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <div style={{ margin: '100px 0px' }} className='bg-white w-50 p-5 rounded-2 shadow-lg d-flex flex-column align-items-center'>
          <div className='d-flex flex-column mb-5 w-100'>
            <label className='mb-2' for="name">Name</label>
            <input type="name" id="name" onChange={(e) => setForm((prev) => ({
              ...prev,
              name: e.target.value
            }))} value={form.name} placeholder="Enter your name" className='bg-grey-box p-3 rounded-1' />
          </div>
          <div className='d-flex flex-column mb-5 w-100'>
            <label className='mb-2' for="email">Email</label>
            <input type="email" id="email" onChange={(e) => setForm((prev) => ({
              ...prev,
              email: e.target.value
            }))} value={form.email} placeholder="Enter your email" className='bg-grey-box p-3 rounded-1' />
          </div>
          <div className='d-flex flex-column mb-5 w-100'>
            <label className='mb-2' for="message">Message</label>
            <textarea style={{ resize: 'none' }} class="bg-grey-box p-3 rounded-1" onChange={(e) => setForm((prev) => ({
              ...prev,
              message: e.target.value
            }))} value={form.message} placeholder="Enter your message" id="message" rows="8"></textarea>
          </div>
          <button onClick={onSubmit} className='bg-primary px-5 py-3 rounded-1 fw-bold shadow mt-3 text-black'>SUBMIT</button>
        </div>
      </div>



      <div style={{ padding: '100px 150px 50px 150px' }} className='bg-black d-flex flex-column align-items-center'>
        <div className='w-100 d-flex justify-content-between'>
          <div className='w-50'>
            <p className='text-white fw-bold fs-4'>RAJ MANGUKIYA</p>
            <p className='text-light'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
          </div>
          <div className='w-25'>
            <p className='text-white fw-bold fs-4'>SOCIAL</p>
            <div className='w-100 bg-grey-box p-4 d-flex rounded-1'>
              <div style={{ height: '30px' }} className='d-flex w-100 justify-content-between'>
                <LinkedIn width='30' height='30' />
                <Github width='30' height='30' />
                {/* <Tweeter width='30' height='30' /> */}
                <Instagram width='30' height='30' />
                <Skype width='30' height='30' />
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

export default Home