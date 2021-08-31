import { useState } from 'react'
import { PortContainer, PortH1, PortWrapper, PortCard, PortIcon, PortH2, Overlay, PortLinkButton, TopLine, Description, CarouselWrapper, Features, DetailsWrapper, Heading, Wrapper, IconWrapper } from './PortfolioElements'
import { SiJavascript, SiHtml5, SiMongodb, SiReact, SiNodeDotJs, SiFirebase, SiGithub } from 'react-icons/si'
import { TiCss3 } from 'react-icons/ti'
import { HiDatabase, HiLink } from 'react-icons/hi'
import { FaPassport } from 'react-icons/fa'
import Modal from '../Modal/Modal'
import { Carousel } from 'react-carousel-minimal'
import { Tooltip } from '@material-ui/core'

const Portfolio = ({ projects, font }) => {

  const [isModalOpen, setModalOpen] = useState(false)

  const [focus, setFocus] = useState('')

  const toggleModal = (title) => {
    setModalOpen(!isModalOpen)
    setFocus(title)
  }

  const toolsToIcons = (tool) => {
    switch (Tooltip) {
      case 'JavaScript':
        return
      case 'CSS':
        return
      case 'HTML':
        return
      case 'Axios':
        return
      case 'HttpRequest':
        return
      case 'NodeJS':
        return
      default:
        return <p>{tool}</p>
    }
  }

  return (
    <PortContainer id='portfolio'>
      <TopLine>My Portfolio</TopLine>
      <PortH1 font={font.main}>Experience</PortH1>

      <PortWrapper>
        {projects.map(project => {
          return (

            <PortCard PortCard key={project.title}>
              <PortIcon src={project.image} bgColor={`linear-gradient(21deg, ${project.background})`} fit={project.fit} />
              <Overlay>
                <PortH2>{project.title}</PortH2>

                {project.deploy &&
                  <PortLinkButton href={project.deploy} target='_blank' aria-label={project.title}>
                    <HiLink />
                  </PortLinkButton>}

                {project.github &&
                  <PortLinkButton href={project.github} target='_blank' aria-label={`Github - ${project.github.split('/')[project.github.length - 1]}`}>
                    <SiGithub />
                  </PortLinkButton>
                }

                <PortLinkButton size='full' onClick={() => toggleModal(project.title)}>View More</PortLinkButton>
                {(isModalOpen && focus === project.title) && (
                  <Modal
                    id="modal"
                    isOpen={isModalOpen}
                    onClose={toggleModal}
                    title={project.title}
                  >
                    <CarouselWrapper>
                      <Carousel
                        data={project.images}
                        time={5000}
                        width="850px"
                        height="500px"
                        captionStyle={{
                          fontSize: '2em',
                          fontWeight: 'bold',
                          color: project.background.slice(0, 7),
                          textShadow: `0px 0px 4px rgb(255 255 255)`
                        }}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: project.background.slice(0, 7),
                          textShadow: `0px 0px 4px rgb(255 255 255)`
                        }}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        // pauseIconColor="white"
                        // pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={false}
                        // thumbnailWidth="100px"
                        style={{
                          textAlign: "center",
                          maxWidth: "800px",
                          maxHeight: "450px",
                          margin: "40px auto",
                        }}
                      />
                    </CarouselWrapper>
                    <DetailsWrapper>
                      <Wrapper>
                        <Heading>Description</Heading>
                        <Description>{project.description}</Description>
                      </Wrapper>
                      <Wrapper>
                        <Heading>Features</Heading>
                        <Features>{project.features}</Features>
                      </Wrapper>
                    </DetailsWrapper>
                    <IconWrapper>
                      <Heading>Tools</Heading>
                      {project.tools.map(tool => <p>{tool}</p>)}
                    </IconWrapper>
                  </Modal>
                )}

              </Overlay>
            </PortCard>
          )
        })}

        {/* <PortCard>
          <PortIcon src={p1.image} bgColor={'linear-gradient(21deg, #d1a6ff, #ffd5d5)'} />
          <Overlay>
            <PortH2>{p1.title}</PortH2>
            <PortLinkButton href={p1.deploy} target='_blank' aria-label="Bartender's Friend">
              <HiLink />
            </PortLinkButton>
            <PortLinkButton href={p1.github} target='_blank' aria-label='Github - Bartender'>
              <SiGithub />
            </PortLinkButton>
            <PortLinkButton onClick={console.log('test')}>View More</PortLinkButton>
          </Overlay>
        </PortCard> */}





      </PortWrapper>
    </PortContainer >
  )
}

export default Portfolio
