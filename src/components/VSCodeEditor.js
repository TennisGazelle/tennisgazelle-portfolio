import { useEffect, useState } from 'react'
import './VSCodeEditor.css'

const potentialJokes = {
  'hotel': 'trivago',
  'everything_else': 'mastercard',
  'yee': 'haw',
  'motivation': 'gone',
  'tired': 'always',
  'coincidence': 'I think not!',
  'were_roommates': 'them',
  'chickens': 'looked_at',
  'does scooby got the booty': 'scooby doo',
  'sha va cado': 'fre',
  'croissant_dropped': 'almost, but no',
  'memes': 'dank'
}

const keys = Object.keys(potentialJokes);
const randKey = keys[Math.floor(Math.random() * keys.length)]

const code = {
  "Daniel Lopez": {
    "Resume": "<- Click that word",
    [randKey]: potentialJokes[randKey],
    // "or click any of these": [
    //   "Linktree",
    //   "Github",
    //   "LinkedIn",
    //   "MuseScore",
    //   "Spotify",
    // ],
    "Education": {
      "Master's Degree": {
        "School": "University of Nevada, Reno",
        "Degree": "Masters of Computer Science",
        "Year": 2018,
        "Graduated": true,
        "Focuses": [
          "Multi CPU/GPU Programming",
          "Graphics Engines",
          "Neural Network Architecture",
        ]
      },
      "Bachelor's Degree": {
        "School": "University of Nevada, Reno",
        "Degree": "Bachelors of Computer Science",
        "Year": 2017,
        "Graduated": true,
        "Minor": "Mathematics",
        "Focuses": [
          "Graphics Engine Implementation",
          "Game Engines",
          "Cryptography",
        ]
      },
    },
    "Work Experience": {
      "Sky Hive AI": {
        "Description": "Workforce Intelligence and Reskilling Startup",
        "Location": "Toronto, Ontario, Canada",
        "Remote": true,
        "Positions": {
          "Senior DevOps Engineer": {
            "StartDate": "11/2022",
            "EndDate": "2/2023",
    
            "Responsabilities": [
              "Architected a robust alerting system to dynamically create and funnal all Cloudwatch, MongoDB alerts to 3rd party services",
              "Developed an extensible DevOps CLI specific to the ecosystem"
            ],
          }
        },
        "Contact": {
          "Name": "Charles Marker",
          "Email": "charles@skyhive.io"
        }
      },

      "NoCap Shows": {
        "Description": "Online Concert Streaming Services Startup",
        "Location": "Malibu, CA",
        "Remote": true, 
        "Positions": {
          "Full Stack Engineer": {
            "StartDate": "8/2021",
            "EndDate": "11/2022",
            "Responsabilities": [
              "Standardized deployment and release engineering across full stack using Github Actions and GCP",
              "Fast paced iterative development on video streaming website and internal tools",
              "Stood up and maintained new APIs that scale and adapt to unstandardized data",
              "Occassional Social Media Manager (Tik Tok)",
            ]
          }
        },
        "Contact": {
          "Name": "Josh Smallman",
          "Email": "js@nocapshows.com"
        }
      },

      "Intuit": {
        "Description": "Turbo Tax, Consumer Group",
        "Location": "San Diego, CA",
        "Remote": false,
        "Positions": {
          "Software Engineer 2": {
            "StartDate": "01/2020",
            "EndDate": "07/2021",
            "Responsabilities": [
              "Gained extensive experience in setting up Jenkins pipelines and developing Jenkins plugins",
              "Templatized Dockerfiles and other deployment files for ease of generation",
              "Led project aimed at enhancing developer Git hooks for automated task progress management"
            ]
          },
          "Software Engineer 1": {
            "StartDate": "08/2018",
            "EndDate": "01/2020",
            "Responsabilities": [
              "Worked on internal tools team for proprietary language support",
              "Enhanced automation for generation of back-end microservices and UI projects",
              "Developing Dev Productivity Tools including customized Githooks and artifact deployment"
            ]
          }
        },
        "Contact": {
          "Name": "Kathiravan Tamilvanan",
          "Email": "kathiravan_tamilvanan@intuit.com"
        }
      }
    },
    "Publications": {
      "Avaler's Adventure": {
        "Description": "Therapeutic Game for Speech Pathology Dept. at University of Nevada, Reno",
        "Citation": "Catherine R. Pollock, Daniel A. Lopez, et al. (2017) “Avaler’s Adventure: An Open Source Game for Dysphagia Therapy”, Proceedings of the ISCA 26th International Conference on Software Engineering and Data Engineering (SEDE 2017)"
      },
      "Capsule Network Optimization": {
        "Description": "Paper derived from Thesis work; building Capsule Networks in raw CUDA",
        "Citation": "Lopez, D. A., Wu, R., Barford, L., & Harris, F.C. (2019) A Memory Layout for Dynamically Routed Capsule Layers. In 16th Iternational Conference on Information Technology New Generations (ITNG 2019) (pp. 317-324)"
      },
      "Today, I Will Fly": {
        "Description": "Original Composition for a YouTube Original",
        "Citation": "Daniel Lopez, Orchestral Score. “Create Together #WithMe”, YouTube Originals, HitRecord series, S1 E4, “Today I Will Fly” (Cold Open)"
      }
    },
    // "Skills": [
    //   ""
    // ]
  }
}



const findLineNumberGivenKeyPath = (jsonObj, key) => {
  let lines = JSON.stringify(jsonObj, null, 3).split('\n');

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].indexOf(key) !== -1) {
      return i;
    }
  }
  return -1;
}

const findScopeGivenLineNumber = (jsonObj, lineNumber) => {
  const lines = JSON.stringify(jsonObj, null, 3).split('\n');
  const openContainerRegex = /[[{]{1}/
  const closeContainerRegex = /[\]}]{1}/

  let stack = [];
  let checkingIndex = lineNumber;

  // console.log(jsonObj, lines[checkingIndex]);
  // console.log('is open, is close', openContainerRegex.test(lines[checkingIndex]), closeContainerRegex.test(lines[checkingIndex]))

  if (openContainerRegex.test(lines[checkingIndex]) && closeContainerRegex.test(lines[checkingIndex])) {
    // if there's no open scope here, then the scope is just the line itself
    return [lineNumber];
  }
  else if (openContainerRegex.test(lines[checkingIndex])) {
    stack.push(lines[checkingIndex]); // push the whole line, screw it
  } else if (closeContainerRegex.test(lines[checkingIndex])) {
    return []; // if it's a close number, just return no scope
  } else {
    // it's both, it's just the line
    return [lineNumber];
  }

  // console.log('stack', stack)

  while(stack.length !== 0 && checkingIndex < lines.length) {
    if (openContainerRegex.test(lines[checkingIndex]) && closeContainerRegex.test(lines[checkingIndex])) {
      // it has both, self contained line, stack is clean
      checkingIndex += 1;
    }
    else if (openContainerRegex.test(lines[checkingIndex]) && stack.indexOf(lines[checkingIndex]) === -1) {
      stack.push(lines[checkingIndex])
      checkingIndex += 1;
    }
    else if (closeContainerRegex.test(lines[checkingIndex])) {
      // pop one off the stack
      stack.pop()
      checkingIndex += 1
    } else {
      //no indicator, just keep going
      checkingIndex += 1;
    }
    // console.log('stack in loop', stack, checkingIndex, lines[checkingIndex]);
  }

  const start = lineNumber + 1;
  const end = checkingIndex - 1;
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const getLineNumbersForKey = (jsonObj, key, path = [], lineNumbers = {}) => {
  for (const [k, v] of Object.entries(jsonObj)) {
    const currentPath = [...path, k];

    if (k === key) {
      lineNumbers[currentPath.join(".")] = lineNumbers[currentPath.join(".")] || [];
      lineNumbers[currentPath.join(".")].push(findLineNumberGivenKeyPath(jsonObj, key));
      // return currentPath.join(".");
    }

    if (typeof v === "object" && v !== null) {
      getLineNumbersForKey(v, key, currentPath, lineNumbers);
    }
  }

  return lineNumbers;
}

// TODO: convert to typescript
const Editor = () => {
  const [mutedLines, setMutedLines] = useState([]);
  const [lines, setLines] = useState([]);
  const manualLineLinks = {
    // findLineNumberGivenKeyPath(code, "Resume").toString(): "http://tennisgazelle.com/resume.pdf",
    "2": "http://tennisgazelle.com/resume.pdf"
  }
  const initialCollapsedLines = [
    findLineNumberGivenKeyPath(code, "Master's Degree"),
    findLineNumberGivenKeyPath(code, "Bachelor's Degree"),
    findLineNumberGivenKeyPath(code, "Sky Hive AI"),
    findLineNumberGivenKeyPath(code, "NoCap Shows"),
    findLineNumberGivenKeyPath(code, "Intuit"),
    findLineNumberGivenKeyPath(code, "Avaler's Adventure"),
    findLineNumberGivenKeyPath(code, "Capsule Network Optimization"),
    findLineNumberGivenKeyPath(code, "Today, I Will Fly"),
    findLineNumberGivenKeyPath(code, "or click any of these"),
  ]

  useEffect(() => {
    setLines(generateCodeAsLines(code));
  }, []);

  useEffect(() => {
    // any times the lines get updated, go through and figure out the muted lines
    let newMutedLines = [];

    lines.forEach(line => {
      if (line.collapsed) {
        const scopedLines = findScopeGivenLineNumber(code, line.index);

        // single lines need not collapse
        if (scopedLines.length > 1) {
          newMutedLines = [...newMutedLines, ...scopedLines];
        }
      }
    });

    setMutedLines(newMutedLines);
  }, [lines, setLines])

  const clickedOnLine = (lineClicked) => {
    // is this line clickable?
    console.log('inside click callback', lineClicked)
    if (!lineClicked.isKeyLine) {
      return;
    }

    // if it was already collapsed, uncollapse it
    if (lineClicked.collapsed) {
      // uncollapse
      // const newLinesToMute = findScope(code, lineClicked.index);
      // setMutedLines(mutedLines.filter(lineNum => newLinesToMute.indexOf(lineNum) === -1));
      setLines(lines.map((line, index) => {
        return { 
          ...line, 
          collapsed: index === lineClicked.index ? false : line.collapsed }
      }))
    } else {
      // collapse
      const newLinesToMute = findScopeGivenLineNumber(code, lineClicked.index);
      // setLines(lines.map((line, index) => {
      //   return { ...line, collapsed: index === lineClicked.index }
      // }));

      if (newLinesToMute.length > 1) {
        // setMutedLines([...mutedLines, ...newLinesToMute]);
        setLines(lines.map((line, index) => {
          return { 
            ...line, 
            collapsed: index === lineClicked.index ? true : line.collapsed }
        }));
      }
    }
  }

  const clearMutedLines = () => {
    setLines(lines.map(line => {
      return {
        ...line,
        collapsed: false
      }
    }));
  }

  const resetMutedLines = () => {
    setLines(lines.map((line, index) => {
      return {
        ...line,
        collapsed: initialCollapsedLines.includes(index)
      }
    }));
  }

  const generateCodeAsLines = (jsonObj) => {
    let codeAsStr = JSON.stringify(jsonObj, null, 3);
    // escape these characters <, >, &
    codeAsStr = codeAsStr
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
    
    // escape preceding spaces
    codeAsStr = codeAsStr
      .split('\n')
      .map(line => {
        return line.replace(/^ +/g, match => {
          return match.replace(/ /g, '&nbsp;')
        })
      }).join('\n');
    
    codeAsStr = codeAsStr.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
      let cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>'
    })
  
    const lines = codeAsStr.split('\n').map((line, index) => {
      const isKeyLine = line.indexOf('class="key"') !== -1;
      let key = null;
      if (isKeyLine) {
        const regex = /<span class="key">"(.*?)":<\/span>/;
        const match = line.match(regex);
        key = match[1] // guaranteed to exist
      }

      // wrap in <a href> if special
      if (manualLineLinks[index.toString()]) {
        line = '<a href="' + manualLineLinks[index.toString()] + '">' + line + '</a>'
      }

      return {
        key,
        htmlLine: line,
        index,
        isKeyLine,
        collapsed: initialCollapsedLines.includes(index)
      }
    })

    // console.log('mutedlines===>', mutedLines);
    return lines;
  }

  return (
    <section className="window">
      <div className="window-top">
        <div className="window__controls">
          <span></span>
          <span onClick={() => resetMutedLines()}></span>
          <span onClick={() => clearMutedLines()}></span>
        </div>
        <div className="window__title">Click on {mutedLines.length !== 0 ? 'green to expand all' : 'yellow to reset'}</div>
      </div>
      <div className="window-main">
        <ol>
          {lines
            .filter((_, index) => {
              return mutedLines.indexOf(index) === -1
            })
            .map((line, index) => {
              let finalHtmlLine = line.htmlLine;
              if (line.collapsed) {
                const closingChar = line.htmlLine[line.htmlLine.length-1] === '[' ? ']' : '}'
                finalHtmlLine += '...' + closingChar;
              }

              return <li
                key={index}
                value={index === 0 ? (line.index-1).toString() : ''}
                onClick={() => {clickedOnLine(line)}} 
                dangerouslySetInnerHTML={{ __html: finalHtmlLine }}
              />
            })
          }
        </ol>
      </div>
    </section>
  )
}

export default Editor;

export {
  code,
}