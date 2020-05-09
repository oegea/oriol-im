import React from "react";
import { connect } from "frontity";
import Disqus from 'disqus-react';

const Comments = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

    const disqusShortname = "oriol-im";

    const threadConfig = {
        url: `https://${disqusShortname}.com${state.router.link}`,
        identifier: post.id,
        title: post.title.rendered,
    };

    return ( 
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={threadConfig} />
    )
}
export default connect(Comments);