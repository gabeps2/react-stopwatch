import React, { useEffect, useState } from "react";

import { Container } from "./styles";

const date = new Date();
const Clock: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);

  const [timeNow, setTimeNow] = useState(`00:00:00:00`);

  useEffect(() => {
    const interval = setInterval(() => {
      if (miliseconds > 98) {
        setMiliseconds(0);
        if (seconds > 59) {
          setSeconds(0);

          if (minutes > 59) {
            setMinutes(0);

            if (hours > 23) {
              setHours(0);
            } else {
              setHours(hours + 1);
            }
          } else {
            setMinutes(minutes + 1);
          }
        } else {
          setSeconds(seconds + 1);
        }
      } else {
        setMiliseconds(miliseconds + 1);
      }

      setTimeNow(
        (hours < 10 ? "0" + hours : hours) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ":" +
          (seconds < 10 ? "0" + seconds : seconds) +
          ":" +
          (miliseconds < 10 ? "0" + miliseconds : miliseconds)
      );
    }, 10);

    return () => clearInterval(interval);
  }, [timeNow, minutes, seconds, hours, miliseconds]);

  return <Container>{timeNow}</Container>;
};

export default Clock;
