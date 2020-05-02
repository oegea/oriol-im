import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";

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
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
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
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  /* Gutenberg styles */
  .wp-block-columns {
    display: flex;
    margin-bottom: 28px;
    flex-wrap: wrap; }
    @media (min-width: 782px) {
      .wp-block-columns {
        flex-wrap: nowrap; } }
    .wp-block-columns.has-background {
      padding: 20px 30px; }
      
      .wp-block-column {
    flex-grow: 1;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: break-word; }
    @media (min-width: 1282px) {
      .wp-block-column {
        padding: 25px;
        flex-basis: 0;
        flex-grow: 1; }
        .wp-block-column[style] {
          flex-grow: 0; }
        .wp-block-column:not(:first-child) {
          margin-right: 32px; } }
      
      /**
       * All Columns Alignment
       */
      .wp-block-columns.are-vertically-aligned-top {
    align-items: flex-start; }
      
      .wp-block-columns.are-vertically-aligned-center {
    align-items: center; }
      
      .wp-block-columns.are-vertically-aligned-bottom {
    align-items: flex-end; }
      
      /**
       * Individual Column Alignment
       */
      .wp-block-column.is-vertically-aligned-top {
    align-self: flex-start; }
      
      .wp-block-column.is-vertically-aligned-center {
    -ms-grid-row-align: center;
        align-self: center; }
      
      .wp-block-column.is-vertically-aligned-bottom {
    align-self: flex-end; }
      
      .wp-block-column.is-vertically-aligned-top, .wp-block-column.is-vertically-aligned-center, .wp-block-column.is-vertically-aligned-bottom {
    width: 100%; }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
