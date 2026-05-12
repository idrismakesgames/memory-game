# Memory Game (React + Typescript + Next.js)

Memory Game (React, Typescript, Next.js, Redux Toolkit)

### Game Link

[Play the game now](https://refill-game.netlify.app) (Still features to be added)

### Figma Link

[Full Figma Design And Technical Details](https://www.figma.com/design/1ajIDGUNbZ6kH3JgDBj0Fh/Memory-Game?node-id=0-1&t=cwOJGSE2bAdZOWp8-1)

### Details

- Coded using latest react and typescript design principles
- Dynamic frontend, using endpoints to provide configuration, and patterns.
- Usage of local storage to keep track of user streak. (reset when retrying)
- Three separate difficulties to provide greater accessibility.
- Authored patterns for each difficulty to make them more memorable and provide a more fun user experience.
- Illustrates just how flexible and useful React and Typescript can be with a unique use case.

  ## How it works

  1. A brief tutorial runs on first load
  2. You pick a difficulty
  3. A coloured grid pattern appears for a couple of seconds, then disappears
  4. You fill in the grid from memory
  5. If you match it, you win — retry if not

  Three difficulty levels with different grid sizes and timings:

  - Easy — 2×3 grid, 2.5 seconds
  - Medium — 3×3 grid, 3 seconds
  - Hard — 4×4 grid, 3.2 seconds

  ## Stack

  React 18 · TypeScript · Redux Toolkit · Vite · Glamor

  ## Running locally

  ```bash
  yarn
  yarn dev
  ```
