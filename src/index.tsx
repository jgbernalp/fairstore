import { h, render } from "preact";
import { App } from "./App";

const mainNode = document.getElementById("app") as HTMLElement;

render(<App />, mainNode, mainNode);
