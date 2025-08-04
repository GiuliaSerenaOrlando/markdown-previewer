import React, { useState } from "react"
import "./styles/App.scss"
import { marked } from "marked"

marked.setOptions({
  breaks: true,
})

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here is some inline code: \`<div></div>\`

\`\`\`
// This is a code block
function sayHello(name) {
  return "Hello, " + name;
}
\`\`\`

You can also make text **bold**!  
> Block quotes look like this.

- List item 1
- List item 2
- List item 3

[Visit freeCodeCamp](https://www.freecodecamp.org)

![Image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)

  return (
    <div className="App">
      <div className="section">
        <label htmlFor="editor">Markdown Editor</label>
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>

      <div className="section">
        <label htmlFor="preview">Preview</label>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  )
}

export default App
