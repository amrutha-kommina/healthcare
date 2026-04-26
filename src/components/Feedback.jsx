import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageSquarePlus } from "lucide-react";
import SectionReveal from "./sectionReveal"; // or "./SectionReveal" based on your filename

const initialReviews = [
  {
    name: "Ananya Sharma",
    rating: 5,
    feedback:
      "The doctors were extremely professional and caring. The appointment process was smooth, and the consultation felt very reassuring.",
  },
  {
    name: "Rahul Verma",
    rating: 4,
    feedback:
      "Very clean environment and friendly staff. The guidance provided for my condition was clear and helpful. Highly recommended for students nearby.",
  },
];

const Feedback = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState("");

  const totalReviews = reviews.length;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !feedbackText.trim()) {
      alert("Please fill in your name and feedback.");
      return;
    }

    const newReview = {
      name: name.trim(),
      rating,
      feedback: feedbackText.trim(),
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setRating(5);
    setFeedbackText("");
  };

  const ratingDistribution = [5, 4, 3, 2, 1].map((starValue) => {
    const count = reviews.filter((review) => review.rating === starValue).length;
    const percentage = totalReviews ? (count / totalReviews) * 100 : 0;

    return {
      label: `${starValue} Stars`,
      percentage,
    };
  });

  return (
    <section id="feedback" className="py-24 bg-white">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-sky-500 font-semibold tracking-[0.25em] mb-3">
              PATIENT REVIEWS
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Rating & Feedback
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto leading-7">
              Read what patients say about their experience and share your own
              feedback to help others.
            </p>
          </div>

          {/* Rating Summary */}
          <div className="bg-gray-50 rounded-3xl border border-slate-200 p-6 md:p-8 mb-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
              {/* Left: Big Rating */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-5xl md:text-6xl font-bold text-blue-900">
                  {averageRating}
                </h3>

                <div className="flex gap-1 mt-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={22}
                      className={`${
                        star <= Math.round(Number(averageRating))
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 mt-2">
                  Based on {totalReviews} patient review{totalReviews > 1 ? "s" : ""}
                </p>
              </div>

              {/* Right: Dynamic Rating Bars */}
              <div className="md:col-span-2 space-y-4">
                {ratingDistribution.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="w-16 text-sm font-medium text-blue-900">
                      {item.label}
                    </span>

                    <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sky-400 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>

                    <span className="w-12 text-sm text-gray-500 text-right">
                      {Math.round(item.percentage)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feedback Form + Reviews */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Form */}
            <motion.div
              whileHover={{ y: -4 }}
              className="lg:col-span-1 bg-blue-900 text-white rounded-3xl p-6 md:p-8 shadow-xl h-fit"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <MessageSquarePlus size={22} />
                </div>
                <h3 className="text-2xl font-bold">Leave Your Feedback</h3>
              </div>

              <p className="text-blue-100 mb-6 leading-7 text-sm">
                Share your experience so other patients can benefit from honest
                and helpful reviews.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/60 text-white outline-none focus:ring-2 focus:ring-sky-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex gap-2 flex-wrap">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="transition"
                      >
                        <Star
                          size={28}
                          className={`${
                            star <= rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-white/40"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Feedback</label>
                  <textarea
                    rows="5"
                    placeholder="Write your feedback here..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/60 text-white outline-none focus:ring-2 focus:ring-sky-300"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-sky-300 text-blue-900 py-3 rounded-xl font-semibold hover:bg-sky-200 transition"
                >
                  Submit Feedback
                </motion.button>
              </form>
            </motion.div>

            {/* Right: Reviews */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <div className="bg-blue-100 text-blue-900 p-2 rounded-xl">
                      <Quote size={18} />
                    </div>
                  </div>

                  <p className="text-gray-700 leading-7 mb-6">
                    “{review.feedback}”
                  </p>

                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-semibold text-blue-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">Patient Review</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Feedback;