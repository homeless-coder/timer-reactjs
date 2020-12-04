import React, { useState, useEffect } from "react";
import { Navbar, Footer, Timer } from "./components";
import "./App.css";

function App() {
  const [duration, setDuration] = useState(15000);
  const [time, setTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    let progress = 100 - (timeLeft / duration) * 100;
    if (timeLeft < 0 && time >= 30000) return;
    const timer = setInterval(() => {
      if (time < duration) setTime(time + 100);
      setTimeLeft(duration - time);
      setProgressBarWidth(time > duration ? 100 : progress);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, duration, time]);

  return (
    <div className="App">
      <Navbar title="Timer" />
      <Timer
        time={time}
        setTime={setTime}
        duration={duration}
        setDuration={setDuration}
        progressBarWidth={progressBarWidth}
      />
      <Footer />
    </div>
  );
}

export default App;
