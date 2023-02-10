import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useFetch } from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import Pagination from "./components/Pagination";

import Characters from "./components/Characters/Characters";
import { isNotEmptyString } from "./utils/strings";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  const fetcherEP = `character${isNotEmptyString(inputValue) ? "?name=" + inputValue : ""
    }`;
  const { response, loading, error } = useFetch(fetcherEP, [debouncedValue]);

  if (loading) return <Loading />;
  if (error) return "Ocurrió un error";

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <Container fluid style={{ height: "100vh" }}>
      <SearchBar onChange={onSearch} value={inputValue} />
      <Row>
        {/* <Favorites /> */}
        <Characters characters={response.results} />
      </Row>
      <Row className="justify-content-center">
        <Col md={12} sm={12} lg={4}>
          <Pagination
            pages={response.info?.pages}
            currentPage={1}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
