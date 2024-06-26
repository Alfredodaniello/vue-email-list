const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: []
    };
  },
  mounted() {
    for (let i=0; i <= 9 ; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          this.emailList.push(response.data.response);
            })
        }
    }
}).mount('#app');