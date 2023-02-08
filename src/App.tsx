import * as React from "react";
import { Container, Row } from "react-bootstrap";

import { useFetch } from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import SearchBar from "./components/SearchBar";

import Characters from "./components/Characters/Characters";
import { isNotEmptyString } from "./utils/strings";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  const fetcherEP = `character${isNotEmptyString(inputValue) ? "?name=" + inputValue : ""}`
  const { response, loading, error } = useFetch(fetcherEP, [debouncedValue]);
  const results = response.results || [];

  React.useEffect(() => {

    // console.log("fetch with: ", debouncedValue);
  }, [debouncedValue]);

  if (loading) return "loading...";
  if (error) return "Ocurrió un error";

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // COMMENT
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
