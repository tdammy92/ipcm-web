import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { ScreenSize } from "../../Config";
import { useMediaQuery } from "react-responsive";

const ExamTimer = ({ examtime,closeExam }) => {
  const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });

  const [time, setTime] = useState(()=>+examtime * 60);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          closeExam()
          return 0;
        } else return time - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <Typography variant={isMobile ? "body1" : "h6"}>
      {`${Math.floor(time / 3600)}`.padStart(2, "0")}:
      {`${Math.floor((time % 3600) / 60)}`.padStart(2, "0")}:
      {`${time % 60}`.padStart(2, "0")}
    </Typography>
  );
};

export default ExamTimer;
