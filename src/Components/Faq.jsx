import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Faq() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const data = [
    {
      title: "What is resid?",
      description: "Learn about Resid, a user-friendly online platform designed to simplify and streamline the process of booking and managing your residential accommodations."
    },
    {
      title: "How do I Create an Account on Resid?",
      description: "Step-by-step guidance on setting up your Resid account, so you can start exploring and booking residences effortlessly."

    },
    {
      title: "What Types of Residences Are Available on Resid?",
      description: "Discover the variety of residences available on Resid, including apartments, houses, dormitories, and more."
    },
    {
      title: "How Do I Book a Residence on Resid?",
      description: "A comprehensive guide on the booking process, from selecting your preferred residence to making secure online payments."
    },
    {
      title: "What Payment Methods Are Accepted on Resid?",
      description: "Find out which payment methods are supported by Resid to make the booking process as convenient as possible."
    },
    {
      title: "How Do I Contact Resid Customer Support?",
      description: "Contact details and guidelines for reaching out to the Resid customer support team in case you have questions, concerns, or need assistance with your reservation."
    }
  ]

  return (
    <div>
      {data.map((e, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{e.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {e.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}


    </div>
  );
}
