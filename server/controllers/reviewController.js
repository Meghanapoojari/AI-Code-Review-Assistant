const { reviewCode } = require("../services/geminiService");

const review = async (req, res) => {
  try {
    const { code, language } = req.body;

    const review = await reviewCode(code, language);

    res.json({
      success: true,
      review,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { review };