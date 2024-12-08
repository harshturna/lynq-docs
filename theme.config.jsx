import Link from "next/link";
import { useConfig } from "nextra-theme-docs";

export default {
  head() {
    const { title } = useConfig();
    return <title>{title}</title>;
  },

  logo: (
    <div className="logo">
      <img src="/logo.png" alt="Lynq" />
      <p>Lynq</p>
    </div>
  ),
  project: {
    link: "https://github.com/harshturna/lynq",
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  footer: {
    content: (
      <div className="footer">
        Lynq{" "}
        <Link href="https://harshturna.com" target="_blank">
          by harsh
        </Link>
      </div>
    ),
  },
  color: {
    hue: 0,
    saturation: 0,
    lightness: {
      dark: 100,
      light: 50,
    },
  },
};
