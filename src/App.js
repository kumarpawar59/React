import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { Page1 } from "./Pages/Page1";
// import { Page2 } from "./Pages/Page2";

export default function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/Page1" component={Page1}/>
      <Route exact={true} path="/Page2" component={Page2}/>
      <Route exact={true} path="/Page3" component={Page3}/>
      
      
    </BrowserRouter>
  );
}

// function Hello() {
//   return <h1>Hello India</h1>;
// }


 function Page1() {
  return (
    <div classname="p-1 ">
      <h3 className="bg-success p-1 my-3 text-light">Goa</h3>
      <p className="bg-warning p-1 my-3 ">
        A well-organized paragraph supports or develops a single controlling
        idea, which is expressed in a sentence called the topic sentence. A
        topic sentence has several important functions: it substantiates or
        supports an essay’s thesis statement; it unifies the content of a
        paragraph and directs the order of the sentences; and it advises the
        reader of the subject to be discussed and how the paragraph will discuss
        it. Readers generally look to the first few sentences in a paragraph to
        determine the subject and perspective of the paragraph. That’s why it’s
        often best to put the topic sentence at the very beginning of the
        paragraph. In some cases, however, it’s more effective to place another
        sentence before the topic sentence—for example, a sentence linking the
        current paragraph to the previous one, or one providing background
        information.
      </p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h3 className="bg-danger p-1 my-3 text-light ">Pune</h3>
      <p className="bg-primary p-1 my-3 ">
        Parallel structures are created by constructing two or more phrases or
        sentences that have the same grammatical structure and use the same
        parts of speech. By creating parallel structures you make your sentences
        clearer and easier to read. In addition, repeating a pattern in a series
        of consecutive sentences helps your reader see the connections between
        ideas. In the paragraph above about scientists and the sense of sight,
        several sentences in the body of the paragraph have been constructed in
        a parallel way. The parallel structures (which have been emphasized)
        help the reader see that the paragraph is organized as a set of examples
        of a general statement.
      </p>
    </div>
  );
}


function Page3() {
  return (
    <div>
      <h3 className="bg-danger p-1 my-3 text-light ">Nashik</h3>
      <p className="bg-primary p-1 my-3 ">
        Parallel structures are created by constructing two or more phrases or
        sentences that have the same grammatical structure and use the same
        parts of speech. By creating parallel structures you make your sentences
        clearer and easier to read. In addition, repeating a pattern in a series
        of consecutive sentences helps your reader see the connections between
        ideas. In the paragraph above about scientists and the sense of sight,
        several sentences in the body of the paragraph have been constructed in
        a parallel way. The parallel structures (which have been emphasized)
        help the reader see that the paragraph is organized as a set of examples
        of a general statement.
      </p>
    </div>
  );
}
