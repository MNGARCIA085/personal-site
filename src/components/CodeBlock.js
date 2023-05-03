import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


//#E6E6E6

const CodeBlock = ({codestring,language}) => {
    return (
        <SyntaxHighlighter language={language} style={docco} customStyle={{backgroundColor: "transparent"}}>
            {codestring}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;