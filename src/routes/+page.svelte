<script lang="ts">
  import { ModeWatcher, toggleMode, mode } from "mode-watcher";

  type Point = { x: number; y: number };

  const width = 600;
  const height = 600;

  const center: Point = { x: width / 2, y: height / 2 };

  const initialRadius = 10;
  const count = 1000;
  const radiusRatio = 100;

  function* radiiGenerator(
    initialRadius: number,
    radiusRatio: number,
    count: number
  ): Generator<number> {
    let radius = initialRadius;
    for (let i = 0; i < count; i++) {
      yield radius;
      radius += radiusRatio / radius;
    }
  }

  const radii = Array.from(radiiGenerator(initialRadius, radiusRatio, count));
</script>

<svelte:head>
  <title>Butterfly</title>
  <meta name="description" content="An artwork utilizing regular polygons." />

  <meta property="og:url" content="https://butterfly.andrewhan.dev/" />
  <meta property="og:type" content="art" />
  <meta property="og:title" content="Butterfly" />
  <meta
    property="og:description"
    content="An artwork utilizing regular polygons."
  />
  <meta
    property="og:image"
    content="https://raw.githubusercontent.com/andrewthehan/butterfly/master/static/butterfly-light.png"
  />
</svelte:head>

<svelte:window on:click={toggleMode} />

<ModeWatcher themeColors={{ dark: "black", light: "white" }} />

{#snippet regularPolygon(center: Point, radius: number, sideCount: number)}
  {@const angle = (2 * Math.PI) / sideCount}
  {@const points = Array.from({ length: sideCount }, (_, i) => {
    const x = center.x + Math.round(radius * Math.sin(i * angle));
    const y = center.y + Math.round(radius * Math.cos(i * angle));
    return `${x},${y}`;
  }).join(" ")}
  <polygon
    {points}
    stroke={$mode === "light" ? "white" : "black"}
    stroke-width="1"
    fill="none"
    shape-rendering="crispEdges"
  />
{/snippet}

<svg {height} {width} xmlns="http://www.w3.org/2000/svg">
  <rect
    width="100%"
    height="100%"
    fill={$mode === "light" ? "black" : "white"}
  />
  {#each Array(count) as _, i}
    {@render regularPolygon(center, radii[i], i + 3)}
  {/each}
</svg>

<style>
  :global(html) {
    background-color: white;
  }

  :global(html.dark) {
    background-color: black;
  }
</style>
