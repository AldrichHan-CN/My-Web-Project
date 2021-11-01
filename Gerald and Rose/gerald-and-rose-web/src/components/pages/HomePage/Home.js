import React from 'react'
import HomePage from '../HomePage'
import {homeObjOne} from './Data';

function Home() {
    return (
<>
          <HomePage {...homeObjOne} />
</>
    )}
    export default Home