import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"
import { ExamplesWrapper } from "./styled.components"
import Button from "../../components/Button"
import { Link } from "gatsby"

const examples = {
  title: "See what makes us different",
  text: "Want early access? Join the waitlist below.",
  bars: [
    {
      title: "Find movies and TV shows",
      to: "",
      icon: (
        <StaticImage
          src="../../images/icons/content.png"
          width={40}
          quality={30}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="content"
        />
      ),
    },
    {
      title: "See what friends are watching",
      to: "",
      icon: (
        <StaticImage
          src="../../images/icons/business.png"
          width={40}
          quality={30}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="peers"
        />
      ),
    },
    {
      title: "Personal Library",
      to: "",
      icon: (
        <StaticImage
          src="../../images/icons/digital.png"
          width={40}
          quality={30}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Library"
        />
      ),
    },
    {
      title: "Custom content",
      to: "",
      icon: (
        <StaticImage
          src="../../images/icons/goal.png"
          width={40}
          quality={30}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Personalized"
        />
      ),
    },
  ],
}

const ExamplesContainer = props => {
  return (
    <ExamplesWrapper {...props}>
      <div className="container">
        <div className="examples">
          <div className="title">
            <Fade bottom cascade duration={600}>
              <span>
                <h2 className="section_title">{examples.title}</h2>
              </span>
              <span>
                <p>{examples.text}</p>
              </span>
              <Button alt style={{ fontSize: 17 }}>
                Join the Waitlist!
              </Button>
            </Fade>
          </div>
          <div className="bars">
            <Fade bottom cascade duration={600}>
              {examples.bars.map(item => (
                <div className="bar" key={item.title}>
                  {item.icon}
                  <h4>{item.title}</h4>
                  <Link to={`/${item.to}`}>Learn More</Link>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </ExamplesWrapper>
  )
}

export default ExamplesContainer
