import './css/portfolio.css'
import useBodyColor from './hooks/changeBgColor'


const Portfolio = () => {
  useBodyColor('darkblue')
  return (
    <div className="wrapper2">
      <div className="card1">
        <aside className="description">
          <img className="image" src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="img1" />

        </aside>

      </div>


    </div>
  )
}

export default Portfolio
