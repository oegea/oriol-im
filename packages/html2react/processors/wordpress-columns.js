import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const wordpressColumns = {
    name: "wordpress columns",
    priority: 10,
    // Only process the node it if it's a block columns
    test: ({ node }) => { return node.component === "div" && node.props.className === "javascript-code"},
    // Add the display: flex css property
    processor: ({ node }) => {
      return (
        <SyntaxHighlighter language="javascript" style={docco}>
          Hola
        </SyntaxHighlighter>
      );
    }
};

export default wordpressColumns;