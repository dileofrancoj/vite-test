import * as React from "react";
import { Container, Row } from "react-bootstrap";

import { useFetch } from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading"

import Characters from "./components/Characters/Characters";
import { isNotEmptyString } from "./utils/strings";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  const fetcherEP = `character${isNotEmptyString(inputValue) ? "?name=" + inputValue : ""}`
  const { response, loading, error } = useFetch(fetcherEP, [debouncedValue]);
  const results = response.results || [];

  if (loading) return <Loading />
  if (error) return "Ocurrió un error";

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <Container fluid style={{ height: "100vh" }}>
      <SearchBar onChange={onSearch} value={inputValue} />
      <Row>
        {/* <Favorites /> */}
        <Characters characters={results} />
      </Row>
    </Container>
  );
}

export default App;
