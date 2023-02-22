import React, { useState } from 'react'

export default function About() {

    // eslint-disable-next-line no-undef
    const [myStyle, setMyStyle] = useState({

        color: 'black',
        backgroundColor: 'white'

    })

    // eslint-disable-next-line no-undef
    const [btntext, setBtnText] = useState("Enable Dark Mode")

    // eslint-disable-next-line no-undef
    const toggleStyle = () => {

        if (myStyle.color === 'black') {

            setMyStyle({

                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'

            })
            setBtnText("Enable Light Mode")

        }
        else {

            setMyStyle({

                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black'
            })
            setBtnText("Enable Dark Mode")
        }
    }

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze Your Text</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Translate-text</strong> gives your a way to analyze your text quickly and efficiently. Be it also added a word counter,
                            character counter and how many minutes you can read
                            the reference and a preview of the above textarea reference.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <strong>Free To Use</strong>  
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Translate-text </strong> is a free characters counter tool that provides instant character count & word count statistics for a given text. translate-text reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong>Browser Compatible</strong>  
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word Counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>

            </div>
        </div>
    )
}
