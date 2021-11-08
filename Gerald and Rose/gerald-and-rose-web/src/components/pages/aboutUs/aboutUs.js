import React from 'react';
import Introduction from '../aboutUs'
import {auObjOne} from './Data';

function AboutUs() {
    return (
<>
          <Introduction {...auObjOne} />
</>
    )
}

export default AboutUs
