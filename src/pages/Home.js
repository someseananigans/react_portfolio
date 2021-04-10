import './css/home.css'
import useBodyColor from './hooks/changeBgColor'

const Home = () => {
  useBodyColor('darkgray')
  return (
    <>
    <h1>Hi, I'm Sean</h1>
    <p>I'm a full-stack web application developer located in Orange County, California. My passion for learning new things and problem solving keeps me driven and self motivated.  </p>
    {/* discuss with mom and people */}
    <p>I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases and best code practices. My objective is to be the best web developer I can be and to contribute to the technology industry all that I know and can do. I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn al the I can about development. While a student at Cal State Fullerton, I studied Business Development and Finance, and I believe that my understanding of problem solving, financial algorithisms, structure and psychology are all also skills that have and will continue to contribute to my overall success as a developer</p>
    </>
  )
}

export default Home
