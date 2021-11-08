import React from 'react'
import Blogpost from '../post'
import {postObjOne} from './Data';

function BlogPost() {
    return (
<>
          <Blogpost {...postObjOne} />
</>
    )}
    export default BlogPost