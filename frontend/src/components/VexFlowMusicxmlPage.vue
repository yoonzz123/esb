<template>
  <div>
    <h1>{{ title }}</h1>
    <div id="output"></div>
    <canvas id="canvas" width="300" height="150"></canvas>
  </div>
</template>

<script>
// import test from "vexflow-musicxml";
// import file from "@/assets/files/xmlsamples/ActorPreludeSample.musicxml";

export default {
  data: () => {
    return {
      title: "Vex Flow & MusicXml Sample Page",
    };
  },
  mounted() {
    // console.log(test);
    // let canvasReference = document.getElementById("canvas");
    // let renderer = new Vex.Flow.MusicXmlRenderer(file, canvasReference);
    // console.log(renderer);
  },
};
</script>
