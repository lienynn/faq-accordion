import { useState } from "react";

export default function Question({ question }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <div className={isOpen ? "open" : "closed"}>
        <h3>{question.title}</h3>
        <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
}