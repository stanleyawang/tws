import React, { useState } from 'react'
import tw from "twin.macro";

const Wrapper = tw.div`border border-primary-400 mb-4`
const Header = tw.div`bg-primary-500 text-gray-100 px-4 transform text-base py-3 cursor-pointer`
const Contents = tw.div``
const ContentsInner = tw.div`p-4`

const Accordion = (props) => {

  const { title, children } = props

  const [open, setOpen] = useState(false)

  return (
    <Wrapper>
      <Header onClick={() => setOpen(!open)}>
        {title}
      </Header>
      <Contents style={{ transition: open ? 'max-height 1s ease-in' : 'max-height 0.5s ease-out', overflow: 'hidden', maxHeight: open ? '500px' : '0px' }}>
        <ContentsInner>
          {children}
        </ContentsInner>
      </Contents>
    </Wrapper>
  )
}

export default Accordion
