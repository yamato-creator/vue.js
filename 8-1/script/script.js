// コンポーネント：ある特定の機能を保有した再利用な「部品」のこと
//　取り込む側の親コンポーネント（サムネイル）、取り込まれる側の子コンポーネント（モーダル）がある

//親子関係のコンポーネント同士はデータを受け渡す
//親→子 props
//子→親 emit
const imageThumbnail = Vue.component('image-thumbnail', {
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  template: `
    <div
      class="img-box"
      :style="{ backgroundImage: 'url(' + path + ')' }"
      @click="$emit('clickimage')"
    ></div>`
});

const modal = Vue.component('modal', {
  props: {
    isShown: {
      type: Boolean,
      default: false
    },
    imagePath: {
      type: String,
      default: ''
    }
  },
  template: `
    <div
      v-if="isShown"
      class="modal"
      @click="$emit('close')"
    >
      <img
        class="modal-img"
        :src="imagePath"
        alt="selectedImage"
      />
    </div>`
});

const app = new Vue({
  el: '#app',
  components: {
    'image-thumbnail': imageThumbnail,
    modal
  },
  data() {
    return {
      isShown: false,
      selectedImage: '',
      images: [{
        path: './img/img1.jpg',
      }, {
        path: './img/img2.jpg',
      }, {
        path: './img/img3.jpg',
      }, {
        path: './img/img4.jpg',
      }, {
        path: './img/img5.jpg',
      }, {
        path: './img/img6.jpg',
      }, {
        path: './img/img7.jpg',
      }, {
        path: './img/img8.jpg',
      }, {
        path: './img/img9.jpg'
      }]
    };
  },
  methods: {
    onSelectImage(path) {
      this.setImage(path);
      this.openModal();
    },
    openModal() {
      this.isShown = true;
    },
    closeModal() {
      this.isShown = false;
    },
    setImage(path) {
      this.selectedImage = path;
    }
  }
});