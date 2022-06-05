import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footer";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";

//Custom pages
import About from './about';
import Contact from './contact';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content={state.frontity.description} />
        <html lang="es" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/components/prism-core.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/plugins/autoloader/prism-autoloader.js"></script>
        <script>Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/components/'</script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism-coy.min.css" />
        <link rel="stylesheet" type="text/css" href="https://rsms.me/raster/raster.grid.css?v=20" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <About when={data.isAbout} />
          <Contact when={data.isContact} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 1.7em;
  }

  h2{
    font-size: 2em;
  }
  
  h1, h2, h3, h4, strong {
    color: rgba(12,17,43);
  }


  p, li {
    font-size: 17px;
  }

  p {
    text-align: justify;
  }

  /* PrismJS small customization */
  pre[class*=language-]>code {
    border-left: 10px solid #fccb0b;
    box-shadow: -1px 0 0 0 #fccb0b, 0 0 0 1px #dfdfdf;
  }

  /*Chips*/
  /*.md-chip {
    display: inline-block;
    background: #e0e0e0;
    padding: 0 12px;
    border-radius: 32px;
    font-size: 13px;
  }*/
  .md-chip {
    display: block;
    background: #e0e0e0;
    padding: 0 12px;
    border-radius: 32px;
    font-size: 13px;
    width: fit-content;
  }
  .md-chip.md-chip-hover:hover {
    background: #ccc;
  }
  
  .md-chip-clickable {
    cursor: pointer;
  }
  
  .md-chip,
  .md-chip-icon {
    height: 32px;
    line-height: 32px;
  }
  
  .md-chip-icon {
    display: block;
    float: left;
    /*background: #009587;*/
    background: #e4bb1c;
    width: 32px;
    border-radius: 50%;
    text-align: center;
    color: white;
    margin: 0 8px 0 -12px;
  }
  
  .md-chip-remove {
    display: inline-block;
    background: #aaa;
    border: 0;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    padding: 0;
    margin: 0 -4px 0 4px;
    cursor: pointer;
    font: inherit;
    line-height: 20px;
  }
  .md-chip-remove:after {
    color: #e0e0e0;
    content: "x";
  }
  .md-chip-remove:hover {
    background: #999;
  }
  .md-chip-remove:active {
    background: #777;
  }
  
  .md-chips {
    padding: 12px 0;

    max-height: 415px;
    overflow-x: visible;
    overflow-y: scroll;
  }
  .md-chips .md-chip {
    margin: 0 5px 3px 0;

    text-overflow: ellipsis;
    /* Needed to make it work */
    overflow: hidden;
    white-space: nowrap;
    max-width: calc(100% - 30px);
  }
  
  .md-chip-raised {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }

  /*Technologies animation*/
  @keyframes slideshow {
    0%    { left: 0px; }
    100%  { left: -600px; }
  }

  /* Gutenberg styles */
  .wp-block-columns {
    display: flex;
    margin-bottom: 28px;
    flex-wrap: wrap; }
    @media (min-width: 782px) {
      .wp-block-columns {
        flex-wrap: nowrap; 
      } 
    }
    .wp-block-columns.has-background {
      padding: 20px 30px; 
    }
      
    .wp-block-column {
      flex-grow: 1;
      min-width: 0;
      word-break: break-word;
      overflow-wrap: break-word; 
    }
    @media (min-width: 1282px) {
      .wp-block-column {
        padding: 25px;
        flex-basis: 0;
        flex-grow: 1; 
      }
      .wp-block-column[style] {
        flex-grow: 0; 
      }
      .wp-block-column:not(:first-child) {
        margin-right: 32px; 
      } 
    }
      
    /**
     * All Columns Alignment
     */
    .wp-block-columns.are-vertically-aligned-top {
      align-items: flex-start; 
    }
      
    .wp-block-columns.are-vertically-aligned-center {
      align-items: center; 
    }
      
    .wp-block-columns.are-vertically-aligned-bottom {
      align-items: flex-end; 
    }
      
    /**
     * Individual Column Alignment
     */
    .wp-block-column.is-vertically-aligned-top {
      align-self: flex-start; 
    }
    
    .wp-block-column.is-vertically-aligned-center {
      -ms-grid-row-align: center;
      align-self: center; 
    }
    
    .wp-block-column.is-vertically-aligned-bottom {
      align-self: flex-end; 
    }
    
    .wp-block-column.is-vertically-aligned-top, .wp-block-column.is-vertically-aligned-center, .wp-block-column.is-vertically-aligned-bottom {
      width: 100%; 
    }
`;

//Old version of the head nav
/*const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70px;
  border-top: 0.5em solid rgb(252, 203, 11);
`;*/

//Fixed version of the head nav
const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70px;

  position: fixed;
  width: 100%;
  z-index: 99;
  background: white;
  webkit-box-shadow: 0 0 26px -7px rgba(57, 63, 72, 0.36) !important;
  box-shadow: 0 0 26px -7px rgba(57, 63, 72, 0.36) !important;
  height: 75px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  padding-top: 78px;
`; 


const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70px;
`;