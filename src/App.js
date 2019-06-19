import React from 'react';
//import tournamentsBg from './tournaments.jpg';
//import seriesBg from './series.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BayesTournaments from './bayes-tournaments.json';
import BayesSeries from './bayes-series.json';
import './App.css';

class App extends React.Component {
  state = {
    //isLoading: true,
    //tournaments: [],
    //error: null
  }

  //var series = [... new Set(BayesTournaments.map(tournament => tournament.series.id))]

  render () {
    //const { isLoading, tournaments, error } = this.state;

    return (
      <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/tournaments" component={Tournaments} />
        <Route path="/tournamentDetails/:id" component={TournamentDetails} />
        <Route path="/series" component={Series} />
        <Route path="/seriesDetails/:id" component={SeriesDetails} />

      </div>
    </Router>
    )
  }
}

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Link to="/tournaments" className="App-link tournaments-link">Tournaments</Link>  
        <Link to="/series" className="App-link series-link">Series</Link>  
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>
        <Link to="/" className="">Bayes E-Sports</Link>
      </h1>
    </header>
  );
}

function Tournaments() {
  return (
    <div className="App">
      <Header></Header>
      <h2>Tournaments Overview</h2>
      <main>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Series</th>
          </tr>
        {BayesTournaments.map((tournament, index)=>{
          return (
            <tr key={tournament.id}>
              <td><Link to={`/tournamentDetails/${tournament.id}`} className="">{tournament.name}</Link></td>
              <td>{tournament.date_start}</td>
              <td>{tournament.date_end}</td>
              <td><Link to={`/seriesDetails/${tournament.series.id}`} className="">{tournament.series.name}</Link></td>
            </tr>
          )
        })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

function TournamentDetails(props) {
  let tournamentId = parseInt(props.match.params.id)
  let tournamentDetails = BayesTournaments.find(tournament => tournament.id === tournamentId)

  return (
      <div className="App">
        <Header></Header>
        <h2>Tournaments Details</h2>
        <main>
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <td>{tournamentDetails.id}</td>
              </tr>  
              <tr>
                <th>Name</th>
                <td>{tournamentDetails.name}</td>
              </tr> 
              <tr>
                <th>Country</th>
                <td>{tournamentDetails.country}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{tournamentDetails.city}</td>
              </tr>
              <tr>
                <th>Start</th>
                <td>{tournamentDetails.date_start}</td>
              </tr>
              <tr>
                <th>End</th>
                <td>{tournamentDetails.date_end}</td>
              </tr>
              <tr>
                <th>Series</th>
                <td>{tournamentDetails.series.name}</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
  )
}

function Series() {
  return (
    <div className="App">
      <Header></Header>
      <h2>Series Overview</h2>
      <main>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        {BayesSeries.map((series, index)=>{
          return (
            <tr key={series.id}>
              <td><Link to={`/seriesDetails/${series.id}`} className="">{series.name}</Link></td>
              <td>{series.date_start}</td>
              <td>{series.date_end}</td>
            </tr>
          )
        })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

function SeriesDetails(props) {
  let seriesId = parseInt(props.match.params.id)
  let seriesDetails = BayesSeries.find(series => series.id === seriesId)

  return (
      <div className="App">
        <Header></Header>
        <h2>Tournaments Details - TODO</h2>
        <main>
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <td>{seriesDetails.id}</td>
              </tr>  
              <tr>
                <th>Name</th>
                <td>{seriesDetails.name}</td>
              </tr> 
              <tr>
                <th>Start</th>
                <td>{seriesDetails.date_start}</td>
              </tr>
              <tr>
                <th>End</th>
                <td>{seriesDetails.date_end}</td>
              </tr>
              <tr>
                <th>Tournaments</th>
                <td>List of tournaments (TODO)</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
  )
}

export default App;
