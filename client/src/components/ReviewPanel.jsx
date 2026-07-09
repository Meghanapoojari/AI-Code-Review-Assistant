import ReactMarkdown from "react-markdown";

function ReviewPanel({ review ,score}) {
  return (
    <div className="review-section">
      <h2>AI Review</h2>
      {score && (
  <div
    style={{
      background: "#2563eb",
      color: "white",
      padding: "10px",
      borderRadius: "8px",
      marginBottom: "15px",
      textAlign: "center",
      fontWeight: "bold",
    }}
  >
    ⭐ Code Quality Score: {score}/10
  </div>
)}

      <div className="markdown">
        {review ? (
          <ReactMarkdown>{review}</ReactMarkdown>
        ) : (
          <p>Your AI review will appear here...</p>
        )}
      </div>
    </div>
  );
}

export default ReviewPanel;