import { css } from "frontity";

const wordpressColumns = {
    name: "wordpress columns",
    priority: 10,
    // Only process the node it if it's a block columns
    test: ({ node }) => node.component === "div" && node.props.className.includes("wp-block-columns"),
    // Add the display: flex css property
    processor: ({ node }) => {
      node.props.css = css`display: flex;`;
      return node;
    }
};

export default wordpressColumns;