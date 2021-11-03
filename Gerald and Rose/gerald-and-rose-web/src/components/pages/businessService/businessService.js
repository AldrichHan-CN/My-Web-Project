import React from 'react';
import Services from '../businessService'
import {bsObjOne} from './Data';

function BS() {
    return (
<>
          <Services {...bsObjOne} />
</>
    )
}

export default BS
