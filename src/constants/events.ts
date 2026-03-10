import ReactGA from "react-ga4";

const resumeEvent = () => {
  ReactGA.event({
    category: "Resume Click",
    action: "click",
    label: "resume_click",
  });
};

const githubClick = (label: string) => {
  ReactGA.event({
    category: `Github Click (${label})`,
    action: "click",
    label: "github_click",
  });
};

const linkedInClick = () => {
  ReactGA.event({
    category: "LinkedIn Click",
    action: "click",
    label: "linkedin_click",
  });
};

export { resumeEvent, githubClick, linkedInClick };
