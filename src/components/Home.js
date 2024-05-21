import React from "react";
import styled from 'styled-components'
import Section from "./section";
function Home (){
    return(
        <Container>
            <Section
            title='Model S'
            description='Order Online for Touchless Delivery'
            backgroundImg='model-s.jpg'
            leftbtntext='custom order'
            rightbtntext='existing Inventory'
            />
            <Section
              title='Model Y'
            description='Order Online for Touchless Delivery'
            backgroundImg='model-y.jpg'
            leftbtntext='custom order'
            rightbtntext='existing Inventory'/>
            <Section
              title='Model X'
            description='Order Online for Touchless Delivery'
            backgroundImg='model-x.jpg'
            leftbtntext='custom order'
            rightbtntext='existing Inventory'/>
            <Section
              title='Model 3'
            description='Order Online for Touchless Delivery'
            backgroundImg='model-3.jpg'
            leftbtntext='custom order'
            rightbtntext='existing Inventory'/>
            <Section
              title='Lowest Cost Solar Panels in America'
            description='Money Back quarantee'
            backgroundImg='solar-panel.jpg'
            leftbtntext='Order Now'
            rightbtntext='Learn More'/>
            <Section
              title='Solar for New Roofs'
            description='Solar Roof Costs Less Than a New '
            backgroundImg='solar-roof.jpg'
            leftbtntext='Order Now'
            rightbtntext='Learn More'/>
            <Section
              title='Accessories'
            description=''
            backgroundImg='accessories.jpg'
            leftbtntext='Shop Now'
            // rightbtntext=''
            />
        </Container>
    )
}
export default Home
const Container=styled.div`
height:100vh;`
