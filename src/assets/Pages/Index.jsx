import React, { useState } from 'react'
import { Button } from '../Components/Bulb'
import { AllDiv,RowContainer,Container } from '../Components/Bulb'

export const Index = () => {
  const [Bulb1On,setBulb1On] = useState(false)
  const [Bulb2On,setBulb2On] = useState(false)
  const BulbHandler1 = () => {
    setBulb1On((prevBulb1On) => !prevBulb1On);
  }
  const BulbHandler2 = () => {
    setBulb2On((prevBulb2On) => !prevBulb2On);
  }
  return (
    <>
    <AllDiv>
     <RowContainer>
     <Container ison={Bulb1On} onClick={BulbHandler1}></Container>
     <Container ison={Bulb2On} onClick={BulbHandler2}></Container>
     </RowContainer>
   
     <RowContainer>
     <Button ison={Bulb1On} onClick={BulbHandler1}> {Bulb1On ? 'Turn Off 1' : 'Turn On 1'}</Button>
      <Button ison={Bulb2On} onClick={BulbHandler2}> {Bulb2On ? 'Turn Off 2' : 'Turn On 2'}</Button>
     </RowContainer>
     </AllDiv>
    </>
  )
}
