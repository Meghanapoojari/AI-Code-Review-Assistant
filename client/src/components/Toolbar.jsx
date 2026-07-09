function Toolbar({
  language,
  setLanguage,
  handleReview,
  handleCopy,
  handleClear,
  handleDownloadPDF,
  handleFileUpload,
  loading,
   theme,
  setTheme,
}) {
  return (
    <div className="toolbar">
      <select
        className="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="javascript">JavaScript</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="c">C</option>
        <option value="csharp">C#</option>
        <option value="go">Go</option>
        <option value="php">PHP</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>

      <div className="toolbar-buttons">
        <label className="upload-btn">
          📂 Upload File
          <input
            type="file"
            accept=".js,.java,.py,.cpp,.c,.html,.css,.php,.go"
            hidden
            onChange={handleFileUpload}
          />
        </label>

        <button onClick={handleReview}>
          {loading ? "Reviewing..." : "Review Code"}
        </button>

        <button onClick={handleCopy}>
          📋 Copy
        </button>

        <button onClick={handleClear}>
          🗑 Clear
        </button>

        <button onClick={handleDownloadPDF}>
          📄 Download PDF
        </button>

        <button
  onClick={() =>
    setTheme(theme === "light" ? "dark" : "light")
  }
>
  {theme === "light" ? "🌙 Dark" : "☀️ Light"}
</button>
      </div>
    </div>
  );
}

export default Toolbar;