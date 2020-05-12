var app = new Vue({
    el: '#app',
    data : {
        message: 'hello world'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Bạn đã mở trang này vào ' + new Date().toLocaleString()
    }
  })

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen : true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Hoc js'},
            { text: 'Hoc html'},
            { text: 'Hoc css'}
        ]
    }
})

app4.todos.push({ text: 'Hoc VueJs'})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'qua lại khách chờ sông lặng sóng'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split(' ').reverse().join(' ')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Sửa ở đây'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'ca chua'},
            {id: 1, text: 'khoai'},
            {id: 2, text: '123'}
        ]
    }
})

var app8 = new Vue ({
    el: '#app-8',
    data: {
        message: 'người đông bến đợi thuyền xuôi ngược'
    },
    computed: {
        reverseMessage: function() {
            return this.message.split(' ').reverse().join(' ')
        }
    }
})

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Ban da an {{ count }} lan</button>'
})

new Vue({
    el: '#components-demo'
})

Vue.component('blog-post', {
    props: ['title'],
    template: '<h5>{{ title }}</h5>'
  })

new Vue({
    el: '#blog-post-list',
    data: {
        posts: [
            { id: 1, title: 'title1'},
            { id: 2, title: 'title2'},
            { id: 3, title: 'title3'}
        ],
    }
})

new Vue({
    el: '#vue-app',
    data: {
        age: '',
        name: '',
        x: 0,
        y: 0,
        available: true,
        nearby: false,
    },
    methods: {
        add : function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('you clicked')
        },
        logName: function() {
            console.log('you entered your name')
        },
        logAge: function() {
            console.log('you entered your age')
        }
    },
    computed: {
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
})

new Vue({
    el: '#vue-app1',
    data: {
        error: false,
        success: false,

        characters: ['mario','Luigi','Yoshi'],
        ninjas: [
            { name: 'Ryu', age: 25},
            { name: 'Yoshi', age: 35},
            { name: 'Ken', age: 55}
        ]
    },
    methods: {

    },
    computed: {
        
    }
})

Vue.component('greeting', {
    data: function() {
        return {
            name: 'hai'
        }
    },
    template : '<p>I am {{ name }} . <button v-on:click="changeName">Change name</button></p> ',
    methods : {
        changeName: function() {
            this.name = 'haidz'
        }
    }
})

var one = new Vue({
    el: '#appvue-1',
    data: {

    }
})

var two = new Vue({
    el: '#appvue-2',
    data: {
            
        }
})

