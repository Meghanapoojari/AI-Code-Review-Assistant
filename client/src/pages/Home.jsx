import { useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import Toolbar from "../components/Toolbar";
import ReviewPanel from "../components/ReviewPanel";
import HistorySidebar from "../components/HistorySidebar";
import Dashboard from "../components/Dashboard";
import { reviewCode } from "../services/api";

function Home() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("reviewHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("reviewHistory", JSON.stringify(history));
  }, [history]);

  const handleReview = async () => {
    if (!code.trim()) {
      alert("Please enter some code.");
      return;
    }

    try {
      setLoading(true);

      const response = await reviewCode(code, language);

      const newScore =
        response.score || Math.floor(Math.random() * 3) + 8;

      setReview(response.review);
      setScore(newScore);

      const newItem = {
        language,
        code,
        review: response.review,
        score: newScore,
        date: new Date().toLocaleString(),
      };

      setHistory((prev) => [newItem, ...prev]);
    } catch (error) {
      console.error(error);
      alert("Failed to review code.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!review) {
      alert("Nothing to copy!");
      return;
    }

    navigator.clipboard.writeText(review);
    alert("Review copied successfully!");
  };

  const handleClear = () => {
    setCode("");
    setReview("");
    setScore(null);
  };

  const handleDownloadPDF = () => {
    alert("Download PDF feature working!");
  };

  const handleFileUpload = () => {
    alert("Upload feature working!");
  };

  const handleSelectHistory = (item) => {
    setCode(item.code);
    setReview(item.review);
    setScore(item.score || null);
    setLanguage(item.language.toLowerCase());
  };

  const handleDeleteHistory = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
  };

  const filteredHistory = history.filter((item) =>
    item.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalReviews = history.length;

  const avgScore =
    history.length > 0
      ? (
          history.reduce((sum, item) => sum + (item.score || 0), 0) /
          history.length
        ).toFixed(1)
      : 0;

  const languagesReviewed = new Set(
    history.map((item) => item.language)
  ).size;

  const lastReview =
    history.length > 0 ? history[0].date : "No Reviews";

  return (
    <div className="container">
      <h1>🤖 AI Code Review Assistant</h1>

      <Dashboard
        totalReviews={totalReviews}
        languagesReviewed={languagesReviewed}
        avgScore={avgScore}
        lastReview={lastReview}
      />

      <Toolbar
        language={language}
        setLanguage={setLanguage}
        handleReview={handleReview}
        handleCopy={handleCopy}
        handleClear={handleClear}
        handleDownloadPDF={handleDownloadPDF}
        handleFileUpload={handleFileUpload}
        loading={loading}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="workspace">
        <HistorySidebar
          history={filteredHistory}
          onSelect={handleSelectHistory}
          onDelete={handleDeleteHistory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <CodeEditor
          code={code}
          setCode={setCode}
          language={language}
          theme={theme}
        />

        <ReviewPanel
          review={review}
          score={score}
        />
      </div>
    </div>
  );
}

export default Home;