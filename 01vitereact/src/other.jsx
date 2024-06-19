import React from 'react'

const user = "wow"
const gcd = "math"

const react_element = React.createElement(
    'a',
    {href:'https://www.youtube.com/',target:'_blank'},
    // 'go to youtube'
    user,
    gcd  

)

function Other() {
    return (
        react_element
    )

}

export default Other