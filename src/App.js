import logo from './logo.svg';
import './App.css';
import LinkCard from './components/LinkCard';
import styled from 'styled-components';

const CardHolder = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
`

const makeLinks = () => {
  const linkData = [
    {
      "link": "https://www.tennisgazelle.com",
      "title": "TennisGazelle"
    },
    {
      "link": "https://www.linktr.ee/tennisgazelle",
      "title": "Link Tree"
    },
    {
      "link": "https://www.musescore.com",
      "title": "Musescore"
    },
  ]

  return linkData.map(datum => {
    return datum.link ? <LinkCard link={datum.link}>
        {datum.title}
    </LinkCard> : <div></div>
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <CardHolder>
          {makeLinks()}
          <LinkCard>
            Some Link Goes Here!
          </LinkCard>
        </CardHolder>

      </header>




    </div>
  );
}

export default App;
