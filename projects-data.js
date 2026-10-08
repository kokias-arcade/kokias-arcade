/**
 * =========================================================================
 * 🎮 KOKIA'S PROJECT REGISTRY
 * =========================================================================
 * Whenever Kokia creates a new project:
 * 1. Build the project inside: projects/<folder-name>/index.html
 * 2. Add its info to the window.KOKIA_PROJECTS list below!
 *
 * Each project has:
 * - Play Link (folder)
 * - "How It Was Built" steps (1, 2, 3, 4, 5...) in simple 6-year-old English!
 * =========================================================================
 */

window.KOKIA_PROJECTS = [
  {
    title: "Snowy Woodcutter & Base",
    tag: "Tycoon Game 🪓",
    emoji: "🪓",
    color: "#ff4757",
    folder: "projects/01-snowy-woodcutter/index.html",
    description: "Chop snowy pine trees, fill your sled with timber logs, and sell wood to friendly villagers for shiny gold coins!",
    howItWasBuilt: [
      {
        step: 1,
        title: "Kokia's Super Detailed Idea 💡",
        text: "Kokia asked for a man in red living in the snow with his base, cutting trees, and selling the wood to people for money!"
      },
      {
        step: 2,
        title: "Painting the Snowy World ❄️",
        text: "We coded falling white snowflakes, towering pine trees covered in snow, and distant frozen mountains!"
      },
      {
        step: 3,
        title: "Dressing the Hero in Red 🧥",
        text: "We gave our woodcutter hero a warm red winter jacket with white fur trim, a red pom-pom beanie, and a sturdy woodchopping axe!"
      },
      {
        step: 4,
        title: "Building the Cozy Base & Shop 🏠",
        text: "We drew a cozy wooden cabin with smoke puffing out of the chimney and a shop sign where villagers come to buy wood."
      },
      {
        step: 5,
        title: "Chopping, Selling & Upgrading! 🪙",
        text: "We added sounds for 'CHOP!', 'TIMBER!', and 'CHA-CHING!' coins, plus an upgrade shop for Iron Axes and even a fluffy Husky puppy dog!"
      }
    ]
  },
  {
    title: "Defend the Base",
    tag: "Action Defense 🐴🛡️",
    emoji: "🛡️",
    color: "#0984e3",
    folder: "projects/02-polar-bear-defense/index.html",
    description: "Pick your fighter (Boy/Girl), choose a Golden or Pink horse, wield a Sword or Bow, and defend your circular campfire base with wooden walls and wood floor from 3 waves of polar bears!",
    howItWasBuilt: [
      {
        step: 1,
        title: "Kokia's Master Strategy Idea 💡",
        text: "Kokia designed an entire defense game: choose boy or girl, ride a golden or pink horse, pick sword or bow, and protect a circular campfire base with wooden walls from 3 polar bear waves!"
      },
      {
        step: 2,
        title: "The Hero Armory & Character Choices 👦👧",
        text: "We built an armory screen where Kokia can pick between Boy or Girl, Golden or Pink steed, and Sword or Bow before galloping into battle."
      },
      {
        step: 3,
        title: "Building the Circular Base & Campfire 🔥🪵",
        text: "We coded math angles to draw a full unbroken 360-degree circle of wooden wall logs, a cozy wooden plank deck floor, and a warm crackling campfire in the middle!"
      },
      {
        step: 4,
        title: "Galloping Horse & Weapon Physics 🐴⚔️",
        text: "We created real galloping horse animations with bobbing heads, swishing tails, hoof prints in the snow, swooshing sword slashes, and flying arrows!"
      },
      {
        step: 5,
        title: "The 3 Waves of Polar Bears & Victory! 🐻‍❄️🏆",
        text: "We coded 3 waves of polar bears, culminating in the giant King Frosty Bear with an ice crown! Beating all 3 waves triggers a victory fanfare!"
      }
    ]
  },
  {
    title: "Solar Circle Pop",
    tag: "Space Reflexes 🪐⏱️",
    emoji: "🪐",
    color: "#00d2d3",
    folder: "projects/03-circle-pop/index.html",
    description: "Zoom through space as the Sun, Moon, and 8 planets turn around! Features dual device modes (💻 PC Mouse vs 📱 Phone Turbo), extra bonus time, size-cycling circles, clapping cheers, and a cute surprise Gummy Bear face at game over!",
    howItWasBuilt: [
      {
        step: 1,
        title: "Kokia's Solar System & Speed Vision 💡",
        text: "Kokia designed an entire solar system upgrade: the Sun, Moon, and all 8 planets turning in space, cycling circle sizes (Big, Small, Medium), a clapping cheer every 5 points, and a 3-stage speed ramp!"
      },
      {
        step: 2,
        title: "The Orbiting Planets & Moon ☀️🌍🌕",
        text: "We coded trigonometry orbits (sine & cosine angles) so the Sun radiates golden light in the middle while Mercury, Venus, Earth with Moon, Mars, Jupiter, Saturn with rings, Uranus, and Neptune turn around in space!"
      },
      {
        step: 3,
        title: "Dynamic Sizing: Big, Small & Medium 🐘🐜🦊",
        text: "We built an automatic size-cycling system. Every turn shifts between an easy 130px Big circle, a tiny 52px Small dot for sharp aim, and a 88px Medium circle!"
      },
      {
        step: 4,
        title: "Click-by-Click Speed Progression (Super Slow ➡️ Faster Every Click!) 🐢⚡",
        text: "Kokia play-tested his game like a lead engineer and noticed it was too fast at the start! So we tuned it to start super slow (0.2 speed) so he can comfortably click the first circle, and then accelerates a little bit faster with every single mouse click!"
      },
      {
        step: 5,
        title: "+1s Extra Time & The Surprise Gummy Bear! ⏱️🐻🍬",
        text: "Kokia added two genius features: every circle you pop adds extra time to the clock, and when the game finishes, a shiny, colorful candy Gummy Bear face smiles and celebrates your score!"
      },
      {
        step: 6,
        title: "Kokia's Cross-Platform Balance (PC vs Phone Turbo!) 💻📱⚡",
        text: "Kokia discovered during playtesting that tapping on a phone screen was way too easy compared to aiming with a mouse! So we engineered dual modes: PC Mouse Mode (gentle start, larger circles, +1s bonus) and Phone Turbo Mode (starts fast, ninja-small targets, snappy +0.4s bonus, and supersonic hyper speed up to 10.0)!"
      }
    ]
  }
];

