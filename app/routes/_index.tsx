import type { MetaFunction } from "@remix-run/node";
import * as config from "../data/config.jsx";
import Introduction from "../components/introduction/introduction.jsx";

export const meta: MetaFunction = () => {
  return [
    { title: config.tabTitle },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <Introduction
      title={config.sections.index.title}
      description={config.sections.index.description}
    />
  );
}
