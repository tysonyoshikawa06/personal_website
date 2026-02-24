import { Linkedin, Github, ArrowUpRight } from "lucide-react";

export const LinkedInIcon = () => <Linkedin size={20} />;
export const GitHubIcon = () => <Github size={20} />;
export const ArrowUpRightIcon = ({
  style,
}: {
  style?: React.CSSProperties;
}) => <ArrowUpRight size={18} style={style} />;
