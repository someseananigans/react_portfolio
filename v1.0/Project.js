import overlay from "../images/halfOverlay.png"
import styled from 'styled-components'

const Project = () => {
  return (
    <>
      <ProjectWrapper>
        <Card>
          <Overlay>
          </Overlay>
          <Img src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="img1" />
          <BadgesWrapper>
            {/* need a map for the badge */}
            <Badge></Badge>
            <Deploy></Deploy>
            <Github></Github>
          </BadgesWrapper>
        </Card>
      </ProjectWrapper>
    </>
  )
}

export default Project


const ProjectWrapper = styled.div`
display: inline-flex;
`

const Card = styled.div`
display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  width: 300px;
  height: 300px;
`

const Overlay = styled.aside`
  display: inline-block;
  height: 100%;
  width: 100%;
  

  &:after {
    content: '';
    position: absolute;
  
    top: 0;
    right: 0;
    bottom: 3px;
    left: 0;
    background: transparent url('http://www.purepleasuredesign.com/wp-content/themes/ppd2012/images/square-instagram.png') 50% 50% no-repeat;
    transition-duration: .5s;
  }

  &:hover:after {
    background: transparent url('http://www.purepleasuredesign.com/wp-content/themes/ppd2012/images/square-instagram.png') 40% 0% no-repeat;
  }

`

const Img = styled.img`
width: 300px;
  height: 300px;
  cursor: zoom-in;
  object-fit: cover;
`

const BadgesWrapper = styled.div`

`

const Badge = styled.div`

`
const Deploy = styled.div`

`
const Github = styled.div`

`
