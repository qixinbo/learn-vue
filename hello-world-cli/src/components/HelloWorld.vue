<template>
  <div>
<!--     <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
import * as imjoyCore from 'imjoy-core'
console.log('************************')
console.log(imjoyCore)
console.log('************************')
const imjoy = new imjoyCore.ImJoy({
    imjoy_api: {},
    //imjoy config
});

imjoy.start({workspace: 'default'}).then(async ()=>{
    console.log('ImJoy started');
    await imjoy.api.alert("hello world");
    // await imjoy.api.prompt('what is your name?')
    await imjoy.api.createWindow(
    {
      name: "My window",
      // type: "imjoy/generic",
      src: "https://raw.githubusercontent.com/imjoy-team/imjoy-plugins/master/repository/welcome.imjoy.html"
    })
    // const grid = await imjoy.api.createWindow({
    //     src: "https://grid.imjoy.io/#/app",
    //     name: "Grid",
    // });
    // await grid.createWindow({ src: "https://kaibu.org" });
});

imjoy.event_bus.on("add_window", w => {
      const container = document.createElement('div');
      container.id = w.window_id; // <--- this is important
      container.style.backgroundColor = '#ececec';
      container.style.height = "800px";
      container.style.width = "100%";
      // Here we simply add to the body
      // but in reality, you can embed it into your UI
      document.body.appendChild(container)
});
// imjoy.api.createWindow({
//     src: "https://grid.imjoy.io/#/app",
//     name: "Grid",
// });
console.log(imjoy)
console.log("------------------")
console.log(window)
// import { imjoyRPC } from 'imjoy-rpc';

// imjoyRPC.setupRPC({name: 'My Awesome App'}).then(() => {

// })
console.log("------------------")


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
