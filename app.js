/**
 * Created by schafferstewart on 1/12/17.
 */
Vue.component('contacts', {
    props: {
        contacts: {},
    },
    template:`
            <ul class="list-group">
                <li v-for="contact in contacts" class="list-group-item">{{contact.first_name}} {{contact.last_name}}</li>
            </ul>
`
});

new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                'first_name': 'John',
                'last_name': 'Smith',
                'nick_name': 'johnny',
                'phone': '888-888-8888',
                'email': 'john.smith@example.com',
            }, {
                'first_name': 'Janet',
                'last_name': 'Doe',
                'nick_name': 'Jan',
                'phone': '999-999-9999',
                'email': 'Janet.Doe@example.com',
            }
        ],
        new_contact: {
            'first_name': '',
            'last_name': '',
            'nick_name': '',
            'phone': '',
            'email': '',
        },
    },
    methods: {
        add_contact: function(){
            this.contacts.push(this.new_contact);
            this.new_contact = {};
        }
    }
});