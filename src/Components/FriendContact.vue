<template>
    <li>
        <h2> {{ friend.name }}</h2>
        <button @click="toggleDetails"> Show Details</button>
        <ul v-if="areDetailsVisible">
            <li><strong>Phone : </strong>{{ friend.phone }}</li>
            <li><strong>Email : </strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
    export default {

    data(){

        return {
            areDetailsVisible : false ,
            friend : {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '+254 4934 6734 783',
                email: 'manuel@localhost.com'
            }
        }
    },

    methods : {
        toggleDetails(){
            this.areDetailsVisible = !this.areDetailsVisible
        }
    }

    }
</script>