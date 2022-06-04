<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name"> Name</label>
            <input type="text" name="name" id="name" v-model="enteredName"/>
        </div>
        <div>
            <label for="Phone"> Phone</label>
            <input type="text" name="Phone" id="Phone" v-model="enteredPhone"/>
        </div>
        <div>
            <label for="Email"> E-mail</label>
            <input type="email" name="Email" id="Email" v-model="enteredEmail"/>
        </div>

        <div>
            <button>Add Contact</button>
        </div>

    </form>
</template>


<script>

export default {

    emits : ['add-contact'],

    data(){
        return {
            enteredName : '',
            enteredPhone : '',
            enteredEmail : '',
        }
    } ,
    methods : {

        submitData(){
            this.$emit('add-contact',this.enteredName ,this.enteredPhone ,this.enteredEmail)
        }
    },

}

</script>