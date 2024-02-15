import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Form ,{FormHandle} from "./components/Form";
import { useRef } from "react";

function App() {
  const costumForm = useRef<FormHandle>(null)
  const handleSave = (data: unknown)=>{
    const extractedDate = data as {name: string, age: string}
    console.log(extractedDate);
    costumForm.current?.clear()
  }
  const input = useRef(null);
  return (
    <main>
      <Form onSave={handleSave} ref={costumForm}>
        <Input id="name" label="Your name" type="text"></Input>
        <Input id="age" label="Your age" type="number" ref={input}></Input>
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
      <p>
        <Button el="button">Its a button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://www.netflix.com/browse">
          Its a link
        </Button>
      </p>
      <Container as={Button} el="button">
        Click me
      </Container>
    </main>
  );
}

export default App;
