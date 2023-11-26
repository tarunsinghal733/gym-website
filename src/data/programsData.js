import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import '@mui/material/styles';
import MonitorHeartSharpIcon from '@mui/icons-material/MonitorHeartSharp';
import RunCircleSharpIcon from '@mui/icons-material/RunCircleSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';

export const programsData = [
  {
    icon: (
      <FitnessCenterIcon />
    ),
    heading: "Strength Training",
    details:
      "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    icon: (
      <RunCircleSharpIcon />
    ),
    heading: "Cardio Training",
    details:
      "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    icon: (
      <WhatshotSharpIcon />
    )
    ,
    heading: "Fat Burning",
    details:
      "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
  {
    icon: (
      <MonitorHeartSharpIcon />
    )
    ,
    heading: "Health Fitness",
    details:
      "This programs is designed for those who exercises only for their body fitness not body building.",
  },
];



