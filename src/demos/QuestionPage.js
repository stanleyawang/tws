import React, { useState } from 'react'
import tw from "twin.macro";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import Header from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings.js";
import Accordion from 'components/accordion/accordion';
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
import { ReactComponent as CoffeeIcon } from "feather-icons/dist/icons/coffee.svg";
import { ReactComponent as DropletIcon } from "feather-icons/dist/icons/droplet.svg";
import { ReactComponent as ZapIcon } from "feather-icons/dist/icons/zap.svg";

const Container = tw.div`relative`;
const Contents = tw.div`max-w-screen-xl mx-auto py-10 md:py-10`;
const TitleHeader = tw(SectionHeading)``;
const WidthControl = tw.div`md:w-9/12 m-auto`
const MainContents = tw.div``
const MainContentsInner = tw.div`p-4 md:p-5`
const FieldLabel = tw.p`font-semibold text-base mb-2 mt-3`
const Input = tw.input`py-3 text-base text-black w-full h-10 font-normal focus:outline-none border border-primary-500 px-3 rounded-lg`
const PostCodeBox = tw.div`mb-4`
const ServiceBox = tw.div``
const Description = tw.p`mb-3`
const Divider = tw.div`my-8 border-b-2 border-gray-800`
const Checkbox = tw.div`flex items-center mb-3`
const CheckboxInput = tw.input`h-4 w-4 border rounded-sm bg-white transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`
const CheckboxLabel = tw.label`text-sm inline-block text-gray-800 ml-1`

const AccordionFooter = tw.div`font-semibold fixed border-t-1 border-primary-500 bg-primary-500 text-gray-100 px-4 md:px-64 transform text-xl md:text-xl py-3 flex justify-between items-center`
const PrimaryButton = tw.button`font-bold px-4 lg:px-8 py-2 rounded bg-secondary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const AttachPhotoButton = tw.button`mt-2 mb-4 font-bold px-3 lg:px-8 py-3 rounded bg-secondary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

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
            <TitleHeader>
              New Quotation
            </TitleHeader>
              <WidthControl>
                <MainContents>
                  <MainContentsInner>
                  <Description>Let us know more about your home. </Description>
                    <PostCodeBox>
                      <FieldLabel>
                        Address
                      </FieldLabel>
                      <Input placeholder='96 Bukit Batok Avenue #12-34 Singapore 123456' onChange={(e) => setPostcode(e.target.value)} />
                    </PostCodeBox>
                    <Divider />
                    <ServiceBox>
                       <FieldLabel>
                        Services
                      </FieldLabel>
                      <Description>Tell us more about the services you need:</Description>
                      <Accordion title='Cleaning' icon={<RadioIcon />}>
                      <Checkbox>
                          <CheckboxInput type="checkbox" value="" id="cleaning-5" />
                          <CheckboxLabel htmlFor='cleaning-5'>
                            General Cleaning ($1000)
                          </CheckboxLabel>  
                        </Checkbox>
                        <Checkbox>
                          <CheckboxInput type="checkbox" value="" id="cleaning-10" />
                          <CheckboxLabel htmlFor='cleaning-10'>
                            Deep Cleaning ($1000)
                          </CheckboxLabel>
                        </Checkbox>
                      </Accordion>

                      <Accordion title='Painting' icon={<CoffeeIcon />}>
                      <Checkbox>
                          <CheckboxInput type="checkbox" value="" id="painting-1" />
                          <CheckboxLabel htmlFor='painting-1'>
                            General Painting ($1000)
                          </CheckboxLabel>
                        </Checkbox>
                      </Accordion>

                      <Accordion title='Plumbing' icon={<DropletIcon />}>
                      <Checkbox>
                          <CheckboxInput type="checkbox" value="" id="plumbing-5" />
                          <CheckboxLabel htmlFor='plumbing-5'>
                            Replace Toilet Basin ($100)
                          </CheckboxLabel>
                        </Checkbox>
                      </Accordion>

                      <Accordion title='Electrical' icon={<ZapIcon />}>
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
                    <Divider />
                    <ServiceBox>
                       <FieldLabel>
                        Photos
                      </FieldLabel>
                      <Description>Do you have any photos to describe the condition of your place?</Description>
                      <AttachPhotoButton onClick={handleConfirm}>Add Photo</AttachPhotoButton> 
                      </ServiceBox>
                 
                  </MainContentsInner>
                </MainContents>
              </WidthControl>
              <AccordionFooter className='question-footer'>
                  <p>
                    Total:  $0
                  </p>
                <PrimaryButton onClick={handleConfirm}>Confirm</PrimaryButton>                
              </AccordionFooter>          
     
        </Contents>
      </Container>      
    </AnimationRevealPage>
  )
}

export default QuestionPage
