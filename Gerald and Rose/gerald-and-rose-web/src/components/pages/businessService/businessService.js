import React from 'react';
import Services from '../businessService'
import {bsObjOne} from './Data';

function bussinessService() {
    return (
<>
          <Services {...bsObjOne} />
</>
    )
}

export default bussinessService
