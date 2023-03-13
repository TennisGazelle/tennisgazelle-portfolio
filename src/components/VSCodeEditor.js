/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import "./VSCodeEditor.css";

const potentialJokes = {
    "hotel": "trivago",
    "everything_else": "mastercard",
    "yee": "haw",
    "motivation": "gone",
    "tired": "always",
    "coincidence": "I think not!",
    "were_roommates": "them",
    "chickens": "looked_at",
    "does scooby got the booty": "scooby doo",
    "sha va cado": "fre",
    "croissant_dropped": "almost, but no",
    "memes": "dank",
    "Two Bros": {
        "chillin": true,
        "location": "hot tub",
        "distance": "5ft",
        "reason": "not gay"
    },
    "This Mans": {
        "career": "about to end",
        "reason": "me"
    },
    "Grape": "had surgery done",
    "is_there_cake": false,
    "Rick Astley": {
        "give you up": false,
        "let you down": false,
        "run around and desert you": false,
        "make you cry": false,
        "say goodbye": false,
        "tell a lie and hurt you": false,
    },
    "Obi-Wan Kenobi": {
        "has": ["high ground"],
        "underestimates": ["not anakin's power"],
        "has_bad_feeling_about": "this"
    },
    "Anakin": {
        "hates": ["sand", "the jedi"],
        "overestimates": ["his own power", "palpatine"]
    },
    "Tween with Naruto Headband": {
        "has_power_of": ["God", "Anime"],
        "on_his_side": true
    },
    "Tom Holland's Spiderman": {
        "feel_so_good": false
    },
    "Antoine Dodson": {
        "recommends_hiding": ["kids", "wife"]
    },
    "Kid in Zombie Makeup": {
        "likes": ["turtles"]
    },
};

const keys = Object.keys(potentialJokes);
const randKey = keys[Math.floor(Math.random() * keys.length)];

const code = {
    "Daniel Lopez": {
        "Resume": "{{resume}}",
        "other quick links": [
            "{{ql_linktree}}",
        ],
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
            "Simple Rose": {
                "Description": "High Performance Computing and Solver Optimization Startup",
                "Location": "St. Louis, Missouri",
                "Remote": true,
                "Homepage": "{{simplerose_homepage_link}}",
                "Positions": {
                    "Full Stack Engineer": {
                        "Start Date": "3/2023",
                        "End Date": undefined,

                        "Responsabilities": []
                    }
                }
            },
            "Sky Hive AI": {
                "Description": "Workforce Intelligence and Reskilling Startup",
                "Location": "Toronto, Ontario, Canada",
                "Remote": true,
                "Homepage": "{{skyhive_homepage_link}}",
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
                "Homepage": "{{nocap_homepage_link}}",
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
                "Homepage": "{{intuit_homepage_link}}",
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
                "Citation": "Catherine R. Pollock, Daniel A. Lopez, et al. (2017) “Avaler’s Adventure: An Open Source Game for Dysphagia Therapy”, Proceedings of the ISCA 26th International Conference on Software Engineering and Data Engineering (SEDE 2017)",
                "Paper": "{{avalers_adventure}}"
            },
            "Capsule Network Optimization": {
                "Description": "Paper derived from Thesis work; building Capsule Networks in raw CUDA, then using a Genetic Algorithm to determine hyperparameters",
                "Citation": "Lopez, D. A., Wu, R., Barford, L., & Harris, F.C. (2019) A Memory Layout for Dynamically Routed Capsule Layers. In 16th Iternational Conference on Information Technology New Generations (ITNG 2019) (pp. 317-324)",
                "Paper": "{{capsule_network}}"
            },
            "Today, I Will Fly": {
                "Description": "Original Composition for a YouTube Original",
                "Citation": "Daniel Lopez, Orchestral Score. “Create Together #WithMe”, YouTube Originals, HitRecord series, S1 E4, “Today I Will Fly” (Cold Open)",
                "YouTube": "{{today_i_will_fly_youtube_link}}",
                "MuseScore": "{{today_i_will_fly_musescore_link}}"
            },
            "Logan's Memory": {
                "Description": "Single, Classical Music, 2023, DistroKidd",
                "Citation": "Lopez, Daniel. “Logan's Memory”, 4582490 Records DK, ISRC QZTB32209522, 2022.",
                "Spotify": "{{spotify}}"
            }
        },
    },
    [randKey]: potentialJokes[randKey],
};

const raw_lines = JSON.stringify(code, null, 3).split("\n");


const findLineNumberGivenKeyPath = (jsonObj, key) => {
    for (let i = 0; i < raw_lines.length; i++) {
        if (raw_lines[i].indexOf(key) !== -1) {
            return i;
        }
    }
    return -1;
};

const findScopeGivenLineNumber = (jsonObj, lineNumber) => {
    const openContainerRegex = /[[{]{1}/;
    const closeContainerRegex = /[\]}]{1}/;

    let stack = [];
    let checkingIndex = lineNumber;

    // console.log(jsonObj, lines[checkingIndex]);
    // console.log('is open, is close', openContainerRegex.test(lines[checkingIndex]), closeContainerRegex.test(lines[checkingIndex]))

    if (openContainerRegex.test(raw_lines[checkingIndex]) && closeContainerRegex.test(raw_lines[checkingIndex])) {
    // if there's no open scope here, then the scope is just the line itself
        return [lineNumber];
    }
    else if (openContainerRegex.test(raw_lines[checkingIndex])) {
        stack.push(raw_lines[checkingIndex]); // push the whole line, screw it
    } else if (closeContainerRegex.test(raw_lines[checkingIndex])) {
        return []; // if it's a close number, just return no scope
    } else {
    // it's both, it's just the line
        return [lineNumber];
    }

    // console.log('stack', stack)

    while(stack.length !== 0 && checkingIndex < raw_lines.length) {
        if (openContainerRegex.test(raw_lines[checkingIndex]) && closeContainerRegex.test(raw_lines[checkingIndex])) {
            // it has both, self contained line, stack is clean
            checkingIndex += 1;
        }
        else if (openContainerRegex.test(raw_lines[checkingIndex]) && stack.indexOf(raw_lines[checkingIndex]) === -1) {
            stack.push(raw_lines[checkingIndex]);
            checkingIndex += 1;
        }
        else if (closeContainerRegex.test(raw_lines[checkingIndex])) {
            // pop one off the stack
            stack.pop();
            checkingIndex += 1;
        } else {
            //no indicator, just keep going
            checkingIndex += 1;
        }
    // console.log('stack in loop', stack, checkingIndex, lines[checkingIndex]);
    }

    const start = lineNumber + 1;
    const end = checkingIndex - 1;
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
};

// const getLineNumbersForKey = (jsonObj, key, path = [], lineNumbers = {}) => {
//     for (const [k, v] of Object.entries(jsonObj)) {
//         const currentPath = [...path, k];
//         if (k === key) {
//             lineNumbers[currentPath.join(".")] = lineNumbers[currentPath.join(".")] || [];
//             lineNumbers[currentPath.join(".")].push(findLineNumberGivenKeyPath(jsonObj, key));
//             // return currentPath.join(".");
//         }
//         if (typeof v === "object" && v !== null) {
//             getLineNumbersForKey(v, key, currentPath, lineNumbers);
//         }
//     }
//     return lineNumbers;
// };

const VSCodeEditorAsPage = () => {
    return <div className="window_page">
        <VSCodeEditor />
    </div>;
};

// TODO: convert to typescript
const VSCodeEditor = () => {
    const [mutedLines, setMutedLines] = useState([]);
    const [lines, setLines] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDoingBarrelRoll, setIsDoingBarrelRoll] = useState(false);
    const lineLinks = {
        "resume": {
            link: "http://tennisgazelle.com/resume.pdf",
            displayText: "<- Clickable lines will be in orange ->"
        },
        "ql_linktree": {
            link: "https://linktr.ee/tennisgazelle",
            displayText: "Link Tree"
        },
        "spotify": {
            link: "https://open.spotify.com/track/1m0usc3bqJnlDREUqU3REb?si=725fb8b7a51a499e",
            displayText: "Stream my first single here"
        },
        "capsule_network": {
            link: "https://www.cse.unr.edu/~fredh/papers/conf/194-amlfdrcl/paper.pdf",
            displayText: "Paper (PDF)"
        },
        "avalers_adventure": {
            link: "https://www.cse.unr.edu/~fredh/papers/conf/180-aaaosgfdt/paper.pdf",
            displayText: "Paper (PDF)"
        },
        "today_i_will_fly_youtube_link": {
            link: "https://www.youtube.com/watch?v=-fl6HTIRjOg&t=46s&ab_channel=HITRECORD",
            displayText: "The Video (Sample)",
            embed: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/-fl6HTIRjOg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen>Youtube</iframe>"
        },
        "today_i_will_fly_musescore_link": {
            link: "https://musescore.com/user/4187496/scores/6267911",
            displayText: "The Score (Full; Sample starts at )"
        },
        "simplerose_homepage_link": {
            link: "https://simplerose.com/index.html",
            displayText: "Simple Rose Home Page"
        },
        "skyhive_homepage_link": {
            link: "https://www.skyhive.ai/",
            displayText: "Sky Hive Page"
        },
        "nocap_homepage_link": {
            link: "https://nocapshows.com/",
            displayText: "No Cap Page"
        },
        "intuit_homepage_link": {
            link: "https://www.intuit.com/",
            displayText: "Intuit Home Page"
        }
    };
    const initialCollapsedLines = [
        findLineNumberGivenKeyPath(code, "Education"),
        findLineNumberGivenKeyPath(code, "Master's Degree"),
        findLineNumberGivenKeyPath(code, "Bachelor's Degree"),

        findLineNumberGivenKeyPath(code, "Work Experience"),
        findLineNumberGivenKeyPath(code, "Simple Rose"),
        findLineNumberGivenKeyPath(code, "Sky Hive AI"),
        findLineNumberGivenKeyPath(code, "NoCap Shows"),
        findLineNumberGivenKeyPath(code, "Intuit"),

        findLineNumberGivenKeyPath(code, "Publications"),
        findLineNumberGivenKeyPath(code, "Avaler's Adventure"),
        findLineNumberGivenKeyPath(code, "Capsule Network Optimization"),
        findLineNumberGivenKeyPath(code, "Today, I Will Fly"),
        findLineNumberGivenKeyPath(code, "Logan's Memory"),
        // findLineNumberGivenKeyPath(code, "or click any of these"),

        findLineNumberGivenKeyPath(code, randKey),
    ];
    const [indentSize, setIndentSize] = useState(3);
    const [lastLineClicked, setLastLineClicked] = useState(-1);

    useEffect(() => {
        setLines(generateCodeAsLines(code, indentSize));
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
        setIsLoading(false);
    }, [lines]);

    useEffect(() => {
        let timer;
        if (isDoingBarrelRoll) {
            timer = setTimeout(() => {
                setIsDoingBarrelRoll(false);
            }, 2000); // turn off animation after 2 seconds
        }
        return () => clearTimeout(timer);
    }, [isDoingBarrelRoll]);

    const clickedOnLine = (lineClicked) => {
    // is this line clickable?
        console.log("inside click callback", lineClicked);
        setLastLineClicked(lineClicked.index);
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
                    collapsed: index === lineClicked.index ? false : line.collapsed };
            }));
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
                        collapsed: index === lineClicked.index ? true : line.collapsed };
                }));
            }
        }
    };

    const clearMutedLines = () => {
        setLines(lines.map(line => {
            return {
                ...line,
                collapsed: false
            };
        }));
    };

    const resetMutedLines = () => {
        setLines(lines.map((line, index) => {
            return {
                ...line,
                collapsed: initialCollapsedLines.includes(index)
            };
        }));
    };

    const handleIndentSizeDropdown = (event) => {
        setIndentSize(Number(event.target.value));
        // console.log(typeof event.target.value);
        setLines(generateCodeAsLines(code, Number(event.target.value)));
    };

    const generateCodeAsLines = (jsonObj, indent=3) => {
        // indent matters, so let's redo this one
        let codeAsStr = JSON.stringify(jsonObj, null, indent);
        // escape these characters <, >, &
        codeAsStr = codeAsStr
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    
        // escape preceding spaces
        codeAsStr = codeAsStr
            .split("\n")
            .map(line => {
                return line.replace(/^ +/g, match => {
                    return match.replace(/ /g, "&nbsp;");
                });
            }).join("\n");
    
        // tag string with their html corresponding color a span
        codeAsStr = codeAsStr.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, (match) => {
            let cls = "number";
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = "key";
                } else {
                    cls = "string";
                }
            } else if (/true|false/.test(match)) {
                cls = "boolean";
            } else if (/null/.test(match)) {
                cls = "null";
            }
            return "<span class=\"" + cls + "\">" + match + "</span>";
        });

        // wrap lines with links (without whitespace)
        codeAsStr = codeAsStr.replace(/\{\{(.*)\}\}/g, (match) => {
            const mustache_key = match.replace("{{", "").replace("}}", "");
            const displaytext = lineLinks[mustache_key]["displayText"];
            const link = lineLinks[mustache_key]["link"];
            const embed = lineLinks[mustache_key]["embed"];

            if (embed) {
                return embed;
            }

            return "<a class=\"line-link\" href=\"" + link + "\">" + displaytext + "</a>";
        });

        // add metadata, line by line
        // ex: isKeyLine - is this a key for yaml or json?
        // ex: link
        const keySpanRegex = /<span class="key">"(.*?)":<\/span>/;
        const lines = codeAsStr.split("\n").map((line, index) => {
            const isKeyLine = line.indexOf("class=\"key\"") !== -1;

            let key = null;
            if (isKeyLine) {
                const match = line.match(keySpanRegex);
                key = match[1]; // guaranteed to exist
            }

            return {
                key,
                htmlLine: line,
                index,
                isKeyLine,
                collapsed: initialCollapsedLines.includes(index),
            };
        });

        // console.log('mutedlines===>', mutedLines);
        return lines;
    };

    return !isLoading && (
        <section className={`window ${isDoingBarrelRoll ? "animate" : ""}`}>
            <div className="window-top">
                <div className="window__controls">
                    <span></span>
                    <span onClick={() => resetMutedLines()}></span>
                    <span onClick={() => clearMutedLines()}></span>
                </div>
                <div className="window__title">Click on {mutedLines.length !== 0 ? "green to expand all" : "yellow to reset"}</div>
            </div>
            <div className="window-main">
                <ol>
                    {lines
                        .filter((_, index) => {
                            return mutedLines.indexOf(index) === -1;
                        })
                        .map((line, index) => {
                            let finalHtmlLine = line.htmlLine;
                            if (line.collapsed) {
                                const penultimateChar = line.htmlLine[line.htmlLine.length-1];

                                if (["[", "{"].indexOf(penultimateChar) !== -1) {
                                    const closingChar = penultimateChar === "[" ? "]" : "}";
                                    finalHtmlLine += "..." + closingChar;
                                }
                            }
                            // console.log(typeof index);
                            return <li
                                key={"text-li-" + index.toString()}
                                value={line.index}
                                onClick={() => {clickedOnLine(line);}} 
                                dangerouslySetInnerHTML={{ __html: finalHtmlLine }}
                            />;
                        })
                    }
                </ol>
            </div>
            <div className='window-bottom'>
                <div className='window-bottom-statictext'>
                    master<super>*</super>
                    {" "}
                    <BsArrowRepeat onClick={() => {setIsDoingBarrelRoll(true);}}/>
                </div>

                <div className='window-bottom-statictext'></div>

                {lastLineClicked !== -1 && <div className='window-bottom-statictext'>Ln {lastLineClicked}</div>}

                <div className='window-bottom-statictext'>

                    {"Spaces: "}
                    <select value={indentSize} onChange={handleIndentSizeDropdown}>
                        {[1, 2, 3, 4, 8].map(num => {
                            return <option key={"option-indent-size-" + num.toString()} value={num}>{num}</option>;
                        })}
                    </select>

                    <select defaultValue={"UTF-8"}>
                        {["UTF-8", "What", "else", "could", "possibly", "be", "here?"].map((val, index) => {
                            return <option key={"option-indent-utf-" + index.toString()} value={val}>{val}</option>;
                        })}
                    </select>

                    <select defaultValue={"JSON"}>
                        {["JSON", "YAML"].map((val, index) => {
                            let disabled = false;
                            if (val !== "JSON") {
                                disabled = true;
                            }
                            return <option key={"option-indent-language-" + index.toString()} value={val} disabled={disabled}>{val}</option>;
                        })}
                    </select>
                </div>
            </div>
        </section>
    );
};

export default VSCodeEditor;

export {
    code,
    VSCodeEditorAsPage
};