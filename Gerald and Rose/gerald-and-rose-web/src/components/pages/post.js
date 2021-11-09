import React from 'react'
import './post.css'

function Blogpost({post_description, please_note}) {
    return (
        <>
        <div className='post-container'>
            <div className='post_banner'>
                <h1>What's new?</h1>
                <p>{post_description}</p>
                <div className='please-note'>{please_note}</div>
            </div>
            <div className='post_list'>

            </div>
        </div>
        </>
    )
}


export default Blogpost
