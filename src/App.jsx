import React, { useState } from "react";

function App() {
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState(null);

  const calculateAge = () => {
    if (!birthYear || !birthMonth || !birthDay) {
      setError("Please fill in all fields.");
      return;
    }

    const birthDate = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
    const currentDate = new Date();

    const millisecondsDiff = currentDate - birthDate;
    const secondsDiff = Math.floor(millisecondsDiff / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);
    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();

    setAge({
      years: yearsDiff,
      days: daysDiff,
      hours: hoursDiff,
      minutes: minutesDiff,
    });
    setError(null);
  };

  return (
    <div className="section">
      <h1 className="title">Simple Age Calculator</h1>
      <div className="container glass">
        <div>
          <label>Year:</label>
          <input
            type="number"
            value={birthYear}
            placeholder="1890"
            onChange={(e) => setBirthYear(e.target.value)}
          />
        </div>
        <div>
          <label>Month:</label>
          <input
            type="number"
            value={birthMonth}
            placeholder="12"
            onChange={(e) => setBirthMonth(e.target.value)}
          />
        </div>
        <div>
          <label>Day:</label>
          <input
            type="number"
            value={birthDay}
            placeholder="2"
            onChange={(e) => setBirthDay(e.target.value)}
          />
        </div>
        <button onClick={calculateAge}>calculate</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {age && (
        <div className="result-container glass">
          <h3>Result:</h3>
          <span>
            <p>How many years have passed until now:</p> {age.years}
          </span>
          <span>
            <p>How many days have passed until now:</p> {age.days}
          </span>
          <span>
            <p>How many hours have passed so far:</p> {age.hours}
          </span>
          <span>
            <p>How many minutes have passed so far:</p> {age.minutes}
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
