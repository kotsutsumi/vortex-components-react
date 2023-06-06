// page.tsx

import Link from "next/link";

export default function IndexPage() {
  return (
    <main>
      <h1>Vortex Components for React</h1>

      <ul>
        <li>
          <Link href="./caption">Caption</Link>{" "}
        </li>
        <li>
          <Link href="./card-container">CardContainer</Link>{" "}
        </li>
        <li>
          <Link href="./color-box">ColorBox</Link>{" "}
        </li>
        <li>
          <Link href="./dictionary">Dictionary</Link>{" "}
        </li>
        <li>
          <h2>Layouts</h2>
          <ul>
            <li>
              <Link href="./layouts/breakpoint">Breakpoint</Link>{" "}
            </li>
            <li>
              <Link href="./layouts/form">Form</Link>{" "}
            </li>
            <li>
              <Link href="./layouts/grid">Grid</Link>{" "}
            </li>
            <li>
              <Link href="./layouts/rows">Rows</Link>{" "}
            </li>
            <li>
              <Link href="./layouts/cols">Cols</Link>{" "}
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}

// EOF
