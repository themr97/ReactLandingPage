import React from 'react'
import { BottomContainer } from './BottomElement'
import { FaArrowDown } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
const Bottom = () => {
    const toggleDown = () => {
        scroll.scrollToBottom();
    }
    return (
        <BottomContainer onClick={toggleDown}>
            <FaArrowDown />
        </BottomContainer>
    )
}

export default Bottom
