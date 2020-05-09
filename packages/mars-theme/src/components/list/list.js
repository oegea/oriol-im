import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import newsletterForm from "../../../../newsletter-form";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);


  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      <SectionTitle>📬 ¡Mantente al día!</SectionTitle>
      <div dangerouslySetInnerHTML={{ __html: newsletterForm }}  />
      <SectionTitle>📝 Últimas publicaciones</SectionTitle>
      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
    </Container>
  );
};

export default connect(List);

const SectionTitle = styled.h1`
  font-size: 1.7em;
  margin-bottom: 0;
  border-bottom: 1px solid #9e9e9e;
  padding-bottom: 10px;
`;

const Container = styled.section`
  max-width: 100%;
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
  word-wrap: line-break;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
