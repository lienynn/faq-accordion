import Question from "./Question";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>FAQ: Lien Nguyen 🌍 👩🏻‍💻 </h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "Who is Lien?",
    info:
      "A fullstack developer with an acuity for problem solving. She tells creative, compelling stories through innovative design and efficient code. In her spare time she's either melting in hot yoga or attempting a master chef disaster. Always up for an adventure, and trying new things."
  },
  {
    id: 2,
    title: "Would Lien be an asset to my team/company?",
    info:
      "No question. Of course! She's a cooperative team player, autonomous and always ready to tackle challenges and ask questions. Always eager to continuously grow her skills in order to keep up to date with the fast-changing trends within the industry and further her skillset."
  },
  {
    id: 3,
    title: "How do I contact her?",
    info:
      "You can reach her at ✉️ lienhnguyen@outlook.com or send her a quick message on Linkedin @liennyn"
  }
];

