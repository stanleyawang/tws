import React, { useState } from 'react'
import tw from "twin.macro";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import Header from "components/headers/light.js";
import Accordion from 'components/accordion/accordion';

const Container = tw.div`relative`;
const Contents = tw.div`max-w-screen-xl mx-auto py-20 md:py-24`;
const MainWrapper = tw.div`border border-primary-500`
const TitleHeader = tw.div`bg-primary-500 text-gray-100 px-4 transform text-3xl md:text-5xl`
const MainContents = tw.div``
const MainContentsInner = tw.div`p-4 md:p-5`
const FieldLabel = tw.p`text-base mb-2`
const Input = tw.input`py-3 text-base text-black w-full h-10 font-normal focus:outline-none border border-primary-500 px-3`
const PostCodeBox = tw.div`mb-4`
const ServiceBox = tw.div``

const Checkbox = tw.div`flex items-center mb-3`
const CheckboxInput = tw.input`h-4 w-4 border rounded-sm bg-white transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`
const CheckboxLabel = tw.label`inline-block text-gray-800 ml-1`

const AccordionFooter = tw.div`fixed md:relative border-t-1 border-primary-500 bg-white text-black px-4 transform text-base md:text-xl py-3 flex justify-between items-center`
const PrimaryButton = tw.button`font-bold px-6 lg:px-8 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

const QuestionPage = () => {
  
  const [postcode, setPostcode] = useState('')

  const handleConfirm = () => {
    console.log(postcode)
  }

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <Contents>
          <MainWrapper>
            <TitleHeader>
              Header
            </TitleHeader>
            <MainContents>
              <MainContentsInner>
                <PostCodeBox>
                  <FieldLabel>
                    Postal Code
                  </FieldLabel>
                  <Input placeholder='Postal Code' onChange={(e) => setPostcode(e.target.value)} />
                </PostCodeBox>

                <ServiceBox>
                  <FieldLabel>
                    Services
                  </FieldLabel>
                  <Accordion title='Cleaning'>
                    Cleaning contents
                  </Accordion>

                  <Accordion title='Painting'>
                    Painting contents
                  </Accordion>

                  <Accordion title='Plumbing'>
                    Plumbing contents
                  </Accordion>

                  <Accordion title='Electrical'>
                    <Checkbox>
                      <CheckboxInput type="checkbox" value="" id="electrical-5" />
                      <CheckboxLabel htmlFor='electrical-5'>
                        Change Socket($5)
                      </CheckboxLabel>
                    </Checkbox>

                    <Checkbox>
                      <CheckboxInput type="checkbox" value="" id="electrical-10" />
                      <CheckboxLabel htmlFor='electrical-10'>
                        Change Switch($10)
                      </CheckboxLabel>
                    </Checkbox>
                  </Accordion>
                </ServiceBox>
              </MainContentsInner>
            </MainContents>

            <AccordionFooter className='question-footer'>
              <p>
                Total $0
              </p>
              <PrimaryButton onClick={handleConfirm}>Confirm</PrimaryButton>
            </AccordionFooter>
          </MainWrapper>
        </Contents>
      </Container>
      <Footer />
    </AnimationRevealPage>
  )
}

export default QuestionPage
