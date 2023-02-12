import logo from './logo.svg';
import './App.css';
import LinkCard from './components/LinkCard';
import styled from 'styled-components';
import IconCard, {Icons} from './components/IconCard';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';
import css from './glowing.module.scss';
import Editor from './components/VSCodeEditor';

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

    return <div>{datum.link}</div>

    // return datum.link ? <IconCard link={datum.link}>
    //   <IconToRender width={size} height={size} dropshadow="100px"/>
    // </IconCard> : <div></div>
  })
}

function App() {

  const code = {
    "Daniel Lopez": {
      "resume": "<- Click that word",
      "links": [
          "github",
          "twitter",
          "musescore",
          "hitrecord"
      ],
      "jobs": {
          "Intuit Turbo Tax" : {
              "role": "DevOps Engineer",
              "experience": "2 years"
          }
      },
      "school": {
          "University of Nevada, Reno": {
              "M.S.": 2018,
              "B.S.": 2017
          }
      }
    }
  }

  const [codeAsString, setCodeAsString] = useState(JSON.stringify(code, {}, 3));

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* <CardHolder>
          {makeLinks()}
        </CardHolder> */}

        {/* {makeIcons()} */}

        {/* <div className={`${css['shadow']}`}>hi there</div>

        <CodeEditor
          value={codeAsString}
          language="json"
          placeholder="Please enter JS code."
          onChange={(evn) => setCodeAsString(evn.target.value)}
          padding={15}
          style={{
            fontSize: 12,
            backgroundColor: "#f5f5f5",
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        /> */}

      </header>


        {/* <PhoneChat /> */}


    </div>
  );
}

export default App;
