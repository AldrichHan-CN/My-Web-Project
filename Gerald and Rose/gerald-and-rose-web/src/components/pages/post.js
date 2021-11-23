import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './post.css'

function Blogpost({post_description, please_note}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('/wp-json/wp/v2/posts');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            setPosts(posts);
        }
    
        loadPosts();
   }, [])
    return (
        <>
        <div className='post-container'>
            <div className='post-banner'>
                <h1>What's new?</h1>
                <p>{post_description}</p>
            <div className='please-note'>{please_note}</div>
            </div>
            <div className='post_list'>
              <Grid container spacing={2}>
      {posts.map((post, index) => (
      <Grid item xs={4} key={index}>
        <Card>
           <CardContent>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </CardContent>
        </Card>
      </Grid>
     ))}
              </Grid>
 );
            </div>
        </div>
        </>
    )
}


export default Blogpost
