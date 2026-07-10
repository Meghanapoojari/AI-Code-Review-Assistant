const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const reviewCode = async (code, language) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `
You are a Senior Software Engineer.

Review the following ${language} code.

Return your answer in Markdown.

Structure your response as:

# Code Review

## Bugs

## Performance Improvements

## Best Practices

## Security Issues

## Improved Code

Wrap all code examples using triple backticks and specify the language like:

\`\`\`${language}
// improved code here
\`\`\`

Code:
${code}
`,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};

module.exports = { reviewCode };