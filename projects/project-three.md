---
layout: spacebarvr.njk
title: SpacebarVR
imagePath: /media/spacebarvr/spacebarvr.png
description: A full-scale room VR game combining fitness and gaming.
detailedDescription: SpacebarVR transforms aerobic exercise into an engaging VR game, where players hit virtual buttons at a high pace, aiming to maintain a heart rate between 90 - 125 BPM. Evolving from a research project and an initial archery game iteration, the final game challenges users in a full-scale room, offering various events and combinations for a dynamic and competitive exercise experience.
technologies:
- Hyperate API
- C#
- Unity
inlineImages:
  - src: /media/spacebarvr/editroomsize.gif
    alt: "Edit Play Area Size"
    description: "Edit the Size of the Play Area"
  - src: /media/spacebarvr/editgametype.gif
    alt: "Edit Game Type"
    description: "Change game types to basic, or choatic. Debug mode was also added"
  - src: /media/spacebarvr/editphysicstype.gif
    alt: "Test Game Mechanics"
    description: "Test Game Mechanics without playing in VR"
---

{% block content %}
<div class="{{ pageClass }}">
  <h2>Gameplay Video</h2>
  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ag36CTusAA8?si=716RjYFVdTu0jEaX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <br>
  <h2>Scene Manipulation Tools</h2>
  <p>I needed a way to manipulate the scene without much work. With this in mind, I created an environment change tool, swapping required game events for gameplay and visual altertions like materials. This gave me the ability to test the base button pushing game versus the chaotic SpaceBar version with enemies and weapons. This sped up development and opened up oppurtnties for new and exciting ways to use the game.</p>
</div>
{% endblock %}