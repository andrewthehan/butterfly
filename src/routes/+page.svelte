<script lang="ts">
  import { onMount } from "svelte";
  import { draw } from "svelte/transition";

  type Point = { x: number; y: number };

  const width = 600;
  const height = 600;

  const center: Point = { x: width / 2, y: height / 2 };

  const initialRadius = 10;
  const initialSideCount = 3;
  const count = 1000;
  const radiusRatio = 100;

  // The radius is calculated using the formula:
  // f(x) = f(x - 1) + radiusRatio / f(x - 1) where f(1) = initialRadius
  // Rewriting this in a non-recursive form, we get:
  // f(x) = sqrt(initialRadius^2 + 2 * radiusRatio * (x - 1))
  const radii = Array.from({ length: count }, (_, i) =>
    Math.sqrt(initialRadius ** 2 + 2 * radiusRatio * i)
  );

  let render = $state(false);

  onMount(() => {
    render = true;
  });
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

{#snippet regularPolygon(center: Point, radius: number, sideCount: number)}
  {@const angle = (2 * Math.PI) / sideCount}
  {@const points = Array.from({ length: sideCount }, (_, i) => {
    const x = center.x + Math.round(radius * Math.sin(i * angle));
    const y = center.y + Math.round(radius * Math.cos(i * angle));
    return `${x},${y}`;
  }).join(" ")}
  {@const index = sideCount - initialSideCount}
  <polygon
    transition:draw|global={{
      duration: 1000 / (index + 1), // C / x
      delay: 1000 * Math.log(index + 1), // Integral of C / x = C * ln(x)
    }}
    {points}
    stroke="white"
    stroke-width="1"
    fill="none"
    shape-rendering="crispEdges"
  />
{/snippet}

<section>
  <svg {height} {width} xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="black" />
    {#if render}
      {#each Array(count) as _, i}
        {@render regularPolygon(center, radii[i], i + initialSideCount)}
      {/each}
    {/if}
  </svg>
  <a
    class="label"
    href="https://github.com/andrewthehan/butterfly"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>Andrew Han</h2>

    <b>Butterfly, 2015</b>

    <br />
    <br />

    <b><i>An artwork utilizing regular polygons</i></b>
  </a>
</section>

<style>
  :global(html) {
    background: #999;
  }

  :root {
    --light-swing-speed: 2s;
    --light-width: 700px;
    --light-sway: 20px;
  }

  section {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  section:after {
    content: "";
    position: absolute;
    width: var(--light-width);
    transform-origin: top center;
    background: linear-gradient(0deg, transparent, rgba(255, 255, 255, 0.4));
    height: 100%;
    filter: blur(16px);
    animation: lightMovement var(--light-swing-speed) infinite alternate
      ease-in-out;
    pointer-events: none;
  }

  @keyframes lightMovement {
    0% {
      left: calc(50% - var(--light-width) / 2 - var(--light-sway));
    }

    100% {
      left: calc(50% - var(--light-width) / 2 + var(--light-sway));
    }
  }

  svg {
    margin: 16px;
    border: 16px solid;
    border-top-color: #333;
    border-bottom-color: #333;
    border-right-color: black;
    border-left-color: black;

    animation: artShadowMovement var(--light-swing-speed) infinite alternate
      ease-in-out;
  }

  @keyframes artShadowMovement {
    0% {
      box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.6);
    }

    100% {
      box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.6);
    }
  }

  .label {
    font-family: "Trebuchet MS", sans-serif;
    text-decoration: none;
    color: black;
    background: white;
    padding: 24px 80px 80px 24px;

    animation: labelShadowMovement var(--light-swing-speed) infinite alternate
      ease-in-out;
  }

  @keyframes labelShadowMovement {
    0% {
      box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.6);
    }

    100% {
      box-shadow: -6px 6px 4px rgba(0, 0, 0, 0.6);
    }
  }

  h2 {
    margin: 0;
  }
</style>
