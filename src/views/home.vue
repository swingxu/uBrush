<template>
  <div id='home'>
    <h1>Home</h1>
    <p>deecamp 21  niubi!</p>
    <my-image-cropper v-model="myCroppa"
                      :width="512"
                      :height="512"
                      placeholder="Upload"
                      :show-loading="true"
                      :prevent-white-space="true"
                      :show-remove-button="false">
    </my-image-cropper>
    <button @click="myCroppa.remove()">REMOVE</button>
    <button @click="uploadCroppedImage('image/jpeg')">Upload JPEG</button>

  </div>
</template>

<script>
import Vue from "vue";
import Croppa from 'vue-croppa';
Vue.use(Croppa, { componentName: 'my-image-cropper' });

export default {
  name: 'home',
  data: function() {
		return {
      croppa: {},
      dataUrl: ''		
    }
  },
  methods: {
    uploadCroppedImage() {
      this.myCroppa.generateBlob(
        blob => {
          var url = URL.createObjectURL(blob)
          console.log(url)
          // write code to upload the cropped image file (a file is a blob)
        },
        'image/jpeg',
        0.8
      ); // 80% compressed jpeg file
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}c
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
.croppa-container {
    margin: auto;
    background-color: lightblue;
    border: 2px solid grey;
    border-radius: 8px;
    width: 512px;
    height: 512px;
 }
 .croppa-container:hover {
   opacity: 1;
   background-color: #f4f4f4;
 }

</style>
