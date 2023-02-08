import { Container, Row } from "react-bootstrap";

import { useFetch } from "./hooks/useFetch";
import SearchBar from "./components/SearchBar";

import Characters from "./components/Characters/Characters";

function App() {
  const { response, loading, error } = useFetch("character", []);
  const results = response.results || []

  if (loading) return "loading...";
  if (error) return "Ocurrió un error"
  return (
    <Container fluid style={{ height: '100vh' }}>
      <SearchBar onChange={() => { }} />
      <Row>
        {/* <Favorites /> */}
        <Characters characters={results} />
      </Row>
    </Container>
  );
}

export default App;
