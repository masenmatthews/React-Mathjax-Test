import * as React from 'react';
import ReactDOM from 'react-dom';
import MathJax from 'react-mathjax';

const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;

const fraction = `\\sqrt{2}`;

export class Math extends React.Component {
    render() {
        return (
            <MathJax.Provider>
                <div>
                    <p>This is an inline math formula:{' '}
                    <MathJax.Node inline formula={'a = b'} />
                    </p>
                    <p>
                    This is a block one:
                    <MathJax.Node formula={tex}/>
                    </p>
                    <p>
                    This is a square root:
                    <MathJax.Node formula={fraction}/>
                    </p>
                </div>
            </MathJax.Provider>
        );
    }
}

export default Math;