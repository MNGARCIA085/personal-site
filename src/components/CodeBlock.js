import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({codestring,language}) => {
    return (
        <SyntaxHighlighter language={language} style={docco}>
            {codestring}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;