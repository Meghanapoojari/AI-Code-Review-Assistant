function HistorySidebar({
  history,
  onSelect,
  onDelete,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="history-sidebar">
      <h2>📜 History</h2>

      <input
        type="text"
        placeholder="🔍 Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      {history.length === 0 ? (
        <p>No history available.</p>
      ) : (
        history.map((item, index) => (
          <div key={index} className="history-card">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => onSelect(item)}
            >
              <strong>{item.language}</strong>
              <p>{item.date}</p>
            </div>

            <button
              onClick={() => onDelete(index)}
              style={{
                width: "100%",
                marginTop: "8px",
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "6px",
                cursor: "pointer",
              }}
            >
              🗑 Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default HistorySidebar;