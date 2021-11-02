import React from 'react'
import { webObjOne } from './Data'
import webDesign from '../webDesign'

function web() {
    return (
        <div>
            <>
            <webDesign {...webObjOne} />
            </>
        </div>
    )
}

export default web
