import { useEffect, useState } from "react";
import dayjs from "dayjs";

function Clock() {
  const [time, setTime] = useState(dayjs().format("ddd MMM D h:mm A"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("ddd MMM D h:mm A"));
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return <p>{time}</p>;
}

export default Clock;
