import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <Title title={'About Me'}/>
      <StaticImage src={'../../assets/banner-about.jpeg'} alt={'about'}
                   layout={'fixed'} height={100} width={100} className={'img'}/>
      <p>Kaldi is the coffee store for everyone who believes that great coffee shouldn't just taste good, it should do good too.</p>
      <SocialLinks styleClass={'banner-icons'}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About
