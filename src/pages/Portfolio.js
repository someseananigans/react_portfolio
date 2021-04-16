import useBodyColor from '../hooks/useBodyColor'
import Project from '../components/Project'

const Portfolio = ({colorScheme, projects}) => {
  useBodyColor('darkblue')
  return (
    <>
      {/* <Display>
        <Container>
          <Row>
            <SkillColumn>
              <SkillsWrapper>
                <Heading></Heading>
                <SkillsIconWrapper>
                  <SkillIcons></SkillIcons>
                </SkillsIconWrapper>
              </SkillsWrapper> */}

              {/* <ExtrasWrapper>

              </ExtrasWrapper> */}

            {/* </SkillColumn>
            <ProjectColumn>
              <ProjectWrapper>
                <Project />
              </ProjectWrapper>
            </ProjectColumn>
          </Row>
        </Container>
      </Display> */}
      <Project />
    </>
  )
}

export default Portfolio


// make card1 position relative and aside position absolute