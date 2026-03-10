import ReactGA from "react-ga4";

const resumeEvent = () => {
  ReactGA.event({
    category: "Resume Click",
    action: "resume_click",
    label: "resume_click",
  });
};

const githubClick = (label: string) => {
  ReactGA.event({
    category: `Github Click (${label})`,
    action: "github_click",
    label: "github_click",
  });
};

const linkedInClick = () => {
  ReactGA.event({
    category: "LinkedIn Click",
    action: "linkedin_click",
    label: "linkedin_click",
  });
};

export { resumeEvent, githubClick, linkedInClick };
