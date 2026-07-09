function Dashboard({
  totalReviews,
  languagesReviewed,
  avgScore,
  lastReview,
}) {
  return (
    <div className="dashboard">
      <div className="card">
        <h3>Total Reviews</h3>
        <p>{totalReviews}</p>
      </div>

      <div className="card">
        <h3>Languages</h3>
        <p>{languagesReviewed}</p>
      </div>

      <div className="card">
        <h3>Average Score</h3>
        <p>{avgScore} ⭐</p>
      </div>

      <div className="card">
        <h3>Last Review</h3>
        <p>{lastReview}</p>
      </div>
    </div>
  );
}

export default Dashboard;