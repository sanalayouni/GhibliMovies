import React, { useState, useEffect } from 'react';
import './GhibliQuiz.css';
import chihiroImg from '../../assets/characters/chihiro.gif';
import AshitakaImg from '../../assets/characters/Ashitaka.gif';
import NausicaaImg from '../../assets/characters/Nausicaä.gif';
import HowlImg from '../../assets/characters/Howl.gif';
import sanImg from '../../assets/characters/san.gif';
import sophieImg from '../../assets/characters/sophie.gif';
import totoroImg from '../../assets/characters/totoro.gif';
import kikiImg from '../../assets/characters/kiki.gif';
import Navbar from '../../components/Navbar/Navbar';

const GhibliQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [ghibliMovies, setGhibliMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);

  // Fetch movies from Ghibli API on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://ghibliapi.vercel.app/films');
        const data = await response.json();
        setGhibliMovies(data);
        setLoadingMovies(false);
      } catch (error) {
        console.error('Error fetching Ghibli movies:', error);
        setLoadingMovies(false);
      }
    };

    fetchMovies();
  }, []);

  const questions = [
    {
      id: 1,
      question: "How do you spend your ideal weekend?",
      options: [
        { text: "Exploring nature and going on adventures", traits: { adventurous: 3, nature: 3 } },
        { text: "Reading books in a cozy corner", traits: { thoughtful: 3, calm: 2 } },
        { text: "Working on creative projects", traits: { creative: 3, independent: 2 } },
        { text: "Helping friends and family", traits: { caring: 3, loyal: 2 } }
      ]
    },
    {
      id: 2,
      question: "When facing a difficult challenge, you:",
      options: [
        { text: "Face it head-on with courage", traits: { brave: 3, determined: 2 } },
        { text: "Think it through carefully", traits: { thoughtful: 3, wise: 2 } },
        { text: "Ask others for help", traits: { caring: 2, loyal: 3 } },
        { text: "Find a creative solution", traits: { creative: 3, independent: 2 } }
      ]
    },
    {
      id: 3,
      question: "What matters most to you?",
      options: [
        { text: "Freedom and independence", traits: { independent: 3, adventurous: 2 } },
        { text: "Family and tradition", traits: { loyal: 3, caring: 2 } },
        { text: "Kindness and compassion", traits: { caring: 3, gentle: 2 } },
        { text: "Knowledge and understanding", traits: { thoughtful: 3, wise: 2 } }
      ]
    },
    {
      id: 4,
      question: "Your connection to nature is:",
      options: [
        { text: "Deep and spiritual", traits: { nature: 3, wise: 2 } },
        { text: "Adventurous and exploratory", traits: { adventurous: 3, nature: 2 } },
        { text: "Peaceful and meditative", traits: { calm: 3, nature: 2 } },
        { text: "Respectful but distant", traits: { thoughtful: 2, independent: 2 } }
      ]
    },
    {
      id: 5,
      question: "When you encounter something mysterious, you:",
      options: [
        { text: "Investigate with curiosity", traits: { adventurous: 2, brave: 2, creative: 1 } },
        { text: "Approach with caution and wisdom", traits: { thoughtful: 3, wise: 2 } },
        { text: "Feel wonder and excitement", traits: { creative: 2, nature: 2, adventurous: 1 } },
        { text: "Trust your instincts", traits: { brave: 2, independent: 2, determined: 1 } }
      ]
    },
    {
      id: 6,
      question: "Your greatest strength is:",
      options: [
        { text: "Your unwavering determination", traits: { determined: 3, brave: 2 } },
        { text: "Your compassionate heart", traits: { caring: 3, gentle: 2 } },
        { text: "Your creative spirit", traits: { creative: 3, independent: 2 } },
        { text: "Your inner wisdom", traits: { wise: 3, thoughtful: 2 } }
      ]
    }
  ];

  const characters = {
    chihiro: {
      name: "Chihiro",
      movie: "Spirited Away",
      description: "Like Chihiro, you possess incredible inner strength and determination. You grow through challenges and never give up, even when things seem impossible.",
      traits: ["brave", "determined", "caring"],
      image: chihiroImg
    },
    sophie: {
      name: "Sophie",
      movie: "Howl's Moving Castle",
      description: "You share Sophie's kind heart and quiet strength. You're thoughtful, caring, and discover your own magic through compassion and self-acceptance.",
      traits: ["caring", "thoughtful", "gentle"],
      image: sophieImg
    },
    san: {
      name: "San",
      movie: "Princess Mononoke",
      description: "Like San, you're fiercely independent and deeply connected to nature. You're brave, loyal, and willing to fight for what you believe in.",
      traits: ["brave", "nature", "independent"],
      image: sanImg
    },
    kiki: {
      name: "Kiki",
      movie: "Kiki's Delivery Service",
      description: "You embody Kiki's adventurous spirit and independence. You're creative, determined, and find your own path while maintaining your kind heart.",
      traits: ["adventurous", "independent", "creative"],
      image: kikiImg
    },
    totoro: {
      name: "Totoro",
      movie: "My Neighbor Totoro",
      description: "Like Totoro, you're gentle, nurturing, and bring calm wherever you go. You have a deep connection with nature and a comforting presence.",
      traits: ["gentle", "nature", "calm"],
      image: totoroImg
    },
    howl: {
      name: "Howl",
      movie: "Howl's Moving Castle",
      description: "You share Howl's creative brilliance and complex nature. You're independent, artistic, and hide a caring heart beneath your mysterious exterior.",
      traits: ["creative", "independent", "caring"],
      image: HowlImg
    },
    ashitaka: {
      name: "Ashitaka",
      movie: "Princess Mononoke",
      description: "Like Ashitaka, you're wise beyond your years, brave, and seek understanding. You bridge different worlds with compassion and inner strength.",
      traits: ["wise", "brave", "thoughtful"],
      image: AshitakaImg
    },
    nausicaa: {
      name: "Nausicaä",
      movie: "Nausicaä of the Valley of the Wind",
      description: "You embody Nausicaä's courage, wisdom, and deep love for all living things. You're a natural leader with a profound connection to nature.",
      traits: ["brave", "nature", "wise"],
      image: NausicaaImg
    }
  };

  const movieRecommendations = {
    adventurous: ["Spirited Away", "Princess Mononoke", "Howl's Moving Castle"],
    brave: ["Princess Mononoke", "Nausicaä of the Valley of the Wind", "Castle in the Sky"],
    caring: ["My Neighbor Totoro", "Kiki's Delivery Service", "Spirited Away"],
    creative: ["Howl's Moving Castle", "The Wind Rises", "Kiki's Delivery Service"],
    nature: ["Princess Mononoke", "Nausicaä of the Valley of the Wind", "My Neighbor Totoro"],
    thoughtful: ["The Wind Rises", "When Marnie Was There", "The Tale of the Princess Kaguya"],
    wise: ["Princess Mononoke", "The Tale of the Princess Kaguya", "Nausicaä of the Valley of the Wind"],
    calm: ["My Neighbor Totoro", "Whisper of the Heart", "From Up on Poppy Hill"],
    gentle: ["My Neighbor Totoro", "Ponyo", "When Marnie Was There"],
    independent: ["Kiki's Delivery Service", "Whisper of the Heart", "Howl's Moving Castle"],
    loyal: ["Castle in the Sky", "Porco Rosso", "Spirited Away"],
    determined: ["Spirited Away", "The Wind Rises", "Castle in the Sky"]
  };

  // Helper function to get movie data from API
  const getMovieData = (movieTitle) => {
    return ghibliMovies.find(movie => movie.title === movieTitle);
  };

  const handleAnswer = (option) => {
    const newAnswers = { ...answers };
    
    Object.entries(option.traits).forEach(([trait, value]) => {
      newAnswers[trait] = (newAnswers[trait] || 0) + value;
    });

    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    // Find matching character
    let bestMatch = null;
    let highestScore = 0;

    Object.entries(characters).forEach(([key, character]) => {
      let score = 0;
      character.traits.forEach(trait => {
        score += finalAnswers[trait] || 0;
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = character;
      }
    });

    // Get top 3 traits
    const topTraits = Object.entries(finalAnswers)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([trait]) => trait);

    // Get movie recommendations
    const movieScores = {};
    topTraits.forEach(trait => {
      movieRecommendations[trait]?.forEach(movie => {
        movieScores[movie] = (movieScores[movie] || 0) + 1;
      });
    });

    const recommendedMovies = Object.entries(movieScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([movie]) => movie);

    setResult({
      character: bestMatch,
      movies: recommendedMovies,
      traits: topTraits
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <>
      <Navbar/>
      <div className="ghibli-quiz">
        <div className="ghibli-quiz-background-glow"></div>
        <div className="ghibli-quiz-particles"></div>

        <div className="ghibli-quiz-container ghibli-quiz-result-container">
          <div className="ghibli-quiz-card">
            <div className="ghibli-quiz-result-card">
              <div className="ghibli-quiz-character-header">
                <div className="ghibli-quiz-character-icon">
                  <img
                    src={result.character.image}
                    alt={result.character.name}
                    className="ghibli-quiz-character-image"
                  />
                </div>
                <h1 className="ghibli-quiz-character-title">You are {result.character.name}!</h1>
                <p className="ghibli-quiz-character-movie">from {result.character.movie}</p>
              </div>

              <div className="ghibli-quiz-character-description">
                <p>{result.character.description}</p>
              </div>

              <div className="ghibli-quiz-traits-section">
                <h3 className="ghibli-quiz-section-label">Your Personality Traits</h3>
                <div className="ghibli-quiz-traits-container">
                  {result.traits.map((trait, index) => (
                    <span
                      key={trait}
                      className="ghibli-quiz-trait-badge"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="ghibli-quiz-recommendations-section">
                <h3 className="ghibli-quiz-section-title">Your Ghibli Movie Recommendations</h3>
                <div className="ghibli-quiz-movies-grid">
                  {result.movies.map((movie, index) => {
                    const movieData = getMovieData(movie);
                    return (
                      <div
                        key={movie}
                        className="ghibli-quiz-movie-card"
                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                      >
                        {movieData && movieData.image && (
                          <div className="ghibli-quiz-movie-image-container">
                            <img 
                              src={movieData.image} 
                              alt={movieData.title}
                              className="ghibli-quiz-movie-image"
                            />
                          </div>
                        )}
                        <div className="ghibli-quiz-movie-content">
                          <div className="ghibli-quiz-movie-icon">🎬</div>
                          <h4>{movie}</h4>
                          {movieData && (
                            <p className="ghibli-quiz-movie-year">{movieData.release_date}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="ghibli-quiz-action-buttons">
                <button onClick={resetQuiz} className="ghibli-quiz-reset-button">
                  Take Quiz Again ✨
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="ghibli-quiz">
      <div className="ghibli-quiz-background-glow"></div>
      <div className="ghibli-quiz-particles"></div>

      <div className="ghibli-quiz-container">
        <div className="ghibli-quiz-card">
          <div className="ghibli-quiz-header">
            <h1 className="ghibli-quiz-title">Studio Ghibli Personality Quiz</h1>
            <p className="ghibli-quiz-subtitle">Discover your Ghibli character and perfect movie matches</p>
          </div>

          <div className="ghibli-quiz-progress-section">
            <div className="ghibli-quiz-progress-info">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="ghibli-quiz-progress-bar">
              <div
                className="ghibli-quiz-progress-fill"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`
                }}
              />
            </div>
          </div>

          <div className="ghibli-quiz-question-section">
            <h2 className="ghibli-quiz-question-text">{questions[currentQuestion].question}</h2>

            <div className="ghibli-quiz-options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="ghibli-quiz-option-button"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default GhibliQuiz;