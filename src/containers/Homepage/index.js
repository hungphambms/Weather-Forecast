import React from "react";
import ForecastList from "../../components/ForecastList";
import SearchForm from "../../components/SearchForm";
import LoadingIndicator from "../../components/LoadingIndicator";

import { Container, Row, Col } from "reactstrap";

import useRequest from "../../hooks/useRequest";

import styles from "./Homnepage.module.css";
import ErrorMessage from "../../components/ErrorMessage";
import SearchSummary from "../../components/SearchSummary";

function Homepage() {
  const [query, setQuery, state] = useRequest();
  const { isLoading, isError, data } = state;

  return (
    <Container fluid>
      <Row>
        <Col md="6" xs="12" className={styles.leftContainer}>
          <section>
            <SearchForm query={query} onSearch={setQuery} />
            {isError && (
              <ErrorMessage message="No results containing all your search terms were found" />
            )}

            <LoadingIndicator isLoading={isLoading}>
              <SearchSummary summary={data} />
            </LoadingIndicator>
          </section>
        </Col>

        <Col md="6" xs="12" className={styles.rightContainer}>
          <LoadingIndicator isLoading={isLoading}>
            <ForecastList items={data.daily} />
          </LoadingIndicator>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
