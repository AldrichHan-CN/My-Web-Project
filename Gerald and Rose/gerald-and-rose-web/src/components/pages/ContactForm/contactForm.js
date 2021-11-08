import React from 'react'
import ContactForm from '../contactForm'
import {formObjOne} from './Data';

function Form() {
    return (
<>
          <ContactForm {...formObjOne} />
</>
    )}
    export default Form