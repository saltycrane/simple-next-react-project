import { useState } from "react";
import { Container, Button } from "reactstrap";

/**
 * Index
 */
export default function Index() {
  return (
    <Container>
      <ButtonClickingDemo />
    </Container>
  );
}

/**
 * ButtonClickingDemo
 */
function ButtonClickingDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Button clicking demo</h1>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </Button>
      <div>Count: {count}</div>
    </div>
  );
}
