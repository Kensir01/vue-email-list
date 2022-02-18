const app = new Vue(
    {
        el: '#app',
        data: {
            emails: []
        },
        mounted() {

            for (let i= 0; i <= 9; i++) {
                axios.get('https://flynn.boolean.carreers/exercises/api/random/mail')
                .then((response) =>{
                    this.emails.push(reposnse.data.response);
                })
            }
        }
    }
);