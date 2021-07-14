import logo from './logo.svg';
import './App.css';
import LinkCard from './components/LinkCard';
import styled from 'styled-components';
import IconCard, {Icons} from './components/IconCard';

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

const makeIcons = () => {
  const iconData = [
    {
      "link": "https://www.github.com",
      "icon": 'github'
    },
    {
      "link": "https://www.facebook.com",
      "icon": 'facebook'
    }
  ]

  return iconData.map(datum => {
    const IconToRender = Icons[datum.icon];
    const size = "100px"

    return datum.link ? <IconCard link={datum.link}>
      <IconToRender width={size} height={size} dropshadow="100px"/>
    </IconCard> : <div></div>
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
        </CardHolder>

        {makeIcons()}

      </header>




    </div>
  );
}

export default App;
