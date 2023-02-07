import { Container, Row, Col } from "react-bootstrap";

import { useFetch } from "./hooks/useFetch";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";
import Characters from "./components/Characters/Characters";

function App() {
  const { response, loading, error } = useFetch("character", []);

  if (loading) return "loading...";
  if (error) return "Ocurrió un error"
  return (
    <Container fluid style={{ height: '100vh' }}>
      <SearchBar onChange={() => { }} />
      <Row>
        {/* <Favorites /> */}
        <Characters characters={response.results} />
      </Row>
    </Container>
  );
}

export default App;
