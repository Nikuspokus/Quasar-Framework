<template>
  <q-page padding>
    <button style="position: absolute; right: 10px" @click="counter++">
      {{ counter }}
    </button>
    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-autofocus
      :style="errorStyle" />

    <button @click="clearMessage">Clear</button>

    <div> {{ message.length }} </div>

    <h5 v-if="message.length" class="border-grey">{{ message }}</h5>
    <h6 v-else>Aucun Message saisi 😟</h6>
    <hr />

    <p>Uppercase message: {{ messageUppercase }}</p>
    <p>Lowercase message: {{ message | messageLowercase }}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "I love Vue.JS so hard !!",
      counter: 0
    };
  },
  computed: {
    messageUppercase() {
      console.log("messageUppercase was fired");
      return this.message.toUpperCase() + " " + this.counter;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    errorStyle() {
      if (this.message.length > 22) {
        return {
          'color' : 'red',
          'background' : 'pink'          
        }
      }
    }
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
    alertMessage() {
      alert(this.message);
    }
  },
  filters: {
    messageLowercase(value) {
      return value.toLowerCase()
    }
  },
  directives: {
    autofocus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('Mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  }
};
</script>

<style>
  .border-grey {
    border: 1px solid grey;
  }
  input, button {
    font-size: 23px;
  }
  .error {
    color: red;
    background: pink;
  }

</style>
