import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width='18' />
                    <p>Building a safer community: Announcing our new Code of Conduct</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width='18' />
                    <p>Balancing a PhD program with a startup career (Ep. 576)</p>
                </div>
            </div>
        <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="pen" width='18' />
                    <p>AI/ML Tool examples part 3 - Title-Drafting Assistant</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="pen" width='18' />
                    <p>We are graduating the updated button styling for vote arrows</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={blackLogo} alt="pen" width='18' />
                    <p>Does the policy change for AI-generated content affect users who (want to)...</p>
                </div>
            </div>
        <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>38</p>
                    <p>Why was this spam flag declined, yet the question marked as spam?</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>20</p>
                    <p>What is the best course of action when a user was high enough rep to... </p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>14</p>
                    <p>Is a link to the "How to ask" help page a useful comment?</p>
                </div>
                
            </div>
      
    </div>
  )
}

export default Widget
