import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Hero = ({ type }) => {
  if (type === "partners") {
    return (
      <div className="hero">
        <StaticImageWrapper>
          <StaticImage
            src="../assets/img/front2-artisloft.jpg"
            alt="zdjęcie mapy okolic"
            layout="fullWidth"
            placeholder="tracedSVG"
          />
        </StaticImageWrapper>
      </div>
    )
  } else if (type === "testimonials") {
    return (
      <div className="hero">
        <StaticImageWrapperThree>
          <StaticImage
            src="../assets/img/referencje-hero.jpg"
            alt="zdjęcie referencje"
            layout="fullWidth"
            placeholder="tracedSVG"
          />
        </StaticImageWrapperThree>
      </div>
    )
  } else if (type === "about") {
    return (
      <div className="hero">
        <StaticImageWrapperFour>
          <StaticImage
            src="../assets/img/bus-zielony-szeroki@2x.jpg"
            alt="zdjęcie referencje"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </StaticImageWrapperFour>
      </div>
    )
  } else if (type === "services") {
    return (
      <div className="hero">
        <StaticImageWrapperFive>
          <StaticImage
            src="../assets/img/bus-pomaranczowy-szeroki@2x.jpg"
            alt="zdjęcie referencje"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </StaticImageWrapperFive>
      </div>
    )
  } else {
    return (
      <div className="hero">
        <StaticImageWrapperTwo>
          <StaticImage
            src="../assets/img/kontakt-hero.jpg"
            alt="zdjęcie kontakt"
            layout="fullWidth"
            placeholder="tracedSVG"
          />
        </StaticImageWrapperTwo>
      </div>
    )
  }
}

const StaticImageWrapper = styled.div`
  margin-top: -200px;
  opacity: 0.9;
`

const StaticImageWrapperTwo = styled.div`
  margin-top: -450px;
  opacity: 0.9;
`

const StaticImageWrapperThree = styled.div`
  margin-top: -200px;
  opacity: 0.9;
`

const StaticImageWrapperFour = styled.div`
  margin-top: -600px;
  opacity: 0.9;
`

const StaticImageWrapperFive = styled.div`
  margin-top: -350px;
  opacity: 0.9;
`

export default Hero
