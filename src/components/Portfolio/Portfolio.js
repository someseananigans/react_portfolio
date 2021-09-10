import { useState } from 'react'
import { PortContainer, PortH1, PortWrapper, PortCard, PortIcon, PortH2, Overlay, PortLinkButton, TopLine, Description, CarouselWrapper, Features, DetailsWrapper, Heading, VertWrapper, IconWrapper, Icon, TipText, Next, Fixed, Prev, HorWrapper, Selection } from './PortfolioElements'
import { SiJavascript, SiHtml5, SiMongodb, SiReact, SiNodeDotJs, SiFirebase, SiGithub, SiDiscord, SiReplDotIt, SiStyledComponents } from 'react-icons/si'
import { TiCss3 } from 'react-icons/ti'
import { HiDatabase, HiLink } from 'react-icons/hi'
import { FaPassport } from 'react-icons/fa'
import { MdHttp } from 'react-icons/md'
import Modal from '../Modal/Modal'
// import { Carousel } from 'react-carousel-minimal'
import { Carousel } from '../'

const Portfolio = ({ projects, font }) => {

  const [isModalOpen, setModalOpen] = useState(false)

  const [focus, setFocus] = useState('')

  const toggleModal = (title) => {
    setModalOpen(!isModalOpen)
    setFocus(title)
  }
  const changeModal = (title) => {
    setModalOpen(true)
    setFocus(title)
  }

  const toolsToIcons = (tool, color, key) => {
    switch (tool) {
      case 'JavaScript':
        return <Icon key={key} color={color}><SiJavascript></SiJavascript><TipText color={color}>{tool}</TipText></Icon>
      case 'CSS':
        return <Icon key={key} color={color}><TiCss3></TiCss3><TipText color={color}>{tool}</TipText></Icon>
      case 'HTML':
        return <Icon key={key} color={color}><SiHtml5></SiHtml5><TipText color={color}>{tool}</TipText></Icon>
      case 'Axios':
        return <Icon key={key} color={color} size={'40px'} top={'-6px'} topText={'43px'}><MdHttp></MdHttp><TipText color={color}>{tool}</TipText></Icon>
      case 'HttpRequest':
        return <Icon key={key} color={color} size={'40px'} top={'-6px'} topText={'43px'}><MdHttp></MdHttp><TipText color={color}>{tool}</TipText></Icon>
      case 'NodeJS':
        return <Icon key={key} color={color}><SiNodeDotJs></SiNodeDotJs><TipText color={color}>{tool}</TipText></Icon>
      case 'MySQL':
        return <Icon key={key} color={color}><HiDatabase></HiDatabase><TipText color={color}>{tool}</TipText></Icon>
      case 'MongoDB':
        return <Icon key={key} color={color}><SiMongodb></SiMongodb><TipText color={color}>{tool}</TipText></Icon>
      case 'ReactJS':
        return <Icon key={key} color={color}><SiReact></SiReact><TipText color={color}>{tool}</TipText></Icon>
      case 'Passport JWT':
        return <Icon key={key} color={color}><FaPassport></FaPassport><TipText color={color}>{tool}</TipText></Icon>
      case 'DiscordJS':
        return <Icon key={key} color={color}><SiDiscord></SiDiscord><TipText color={color}>{tool}</TipText></Icon>
      case 'Replit':
        return <Icon key={key} color={color}><SiReplDotIt></SiReplDotIt><TipText color={color}>{tool}</TipText></Icon>
      case 'Styled-Components':
        return <Icon key={key} color={color}><SiStyledComponents></SiStyledComponents><TipText color={color}>{tool}</TipText></Icon>
      case 'ExpressJS':
        return <Icon key={key} color={color} top={'-6px'} topText={'43px'}>EX<TipText color={color}>{tool}</TipText></Icon>
      default:
        return <p>{tool}</p>
    }
  }

  return (
    <PortContainer id='portfolio'>
      <TopLine>My Portfolio</TopLine>
      <PortH1 font={font.main}>Experience</PortH1>

      <PortWrapper>
        {projects.map((project, key) => {
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
                    <Fixed>

                      <Selection>
                        <Prev color={project.background.slice(8)} onClick={() => changeModal(projects[key === 0 ? projects.length - 1 : key + 1].title)}>❮</Prev>
                        <Next color={project.background.slice(8)} onClick={() => changeModal(projects[key < projects.length - 1 ? key + 1 : 0].title)}>❯</Next>
                      </Selection>
                    </Fixed>
                    {/* <CarouselWrapper> */}
                    {/* <Carousel
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
                      /> */}
                    <Carousel images={project.images} color={project.background.slice(0, 7)} />
                    {/* </CarouselWrapper> */}
                    <DetailsWrapper>
                      <VertWrapper margin={'false'}>
                        <Heading>Description</Heading>
                        <Description>{project.description}</Description>
                        <HorWrapper>

                          <VertWrapper>
                            <Heading>Tools</Heading>
                            <IconWrapper>
                              {project.tools.map((tool, key) => toolsToIcons(tool, project.background.slice(8), key))}
                            </IconWrapper>
                          </VertWrapper>
                        </HorWrapper>
                      </VertWrapper>
                      <VertWrapper min={'true'}>
                        <Heading>Features</Heading>
                        {project.features.map(feature => {
                          return (
                            <p>- {feature}</p>
                          )
                        })}
                        {/* <Features>{project.features}</Features> */}
                      </VertWrapper>
                    </DetailsWrapper>

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
