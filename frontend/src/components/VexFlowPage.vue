<template>
  <div>
    <h1>{{ title }}</h1>
    <div id="output"></div>
  </div>
</template>

<script>
import { Factory } from "vexflow";

export default {
  data: () => {
    return {
      title: "Vex Flow Sample Page",
    };
  },
  mounted() {
    const vf = new Factory({ renderer: { elementId: "output" } });
    const score = vf.EasyScore();
    const system = vf.System();

    system
      .addStave({
        voices: [
          score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })),

          score.voice(score.notes("C#4/h, C#4", { stem: "down" })),
        ],
      })
      .addClef("treble")
      .addTimeSignature("4/4");

    vf.draw();
  },
};
</script>
