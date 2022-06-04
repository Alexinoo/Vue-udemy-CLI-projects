
<template>
    <li>
        <h2> {{ name }}</h2>
        <button @click="toggleDetails"> {{ areDetailsVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="areDetailsVisible">
            <li><strong>Phone : </strong>{{ phoneNumber }}</li>
            <li><strong>Email : </strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default {

        /*  ****** PROPS **********

        - in its simplest form we can pass anything, object/array number etc

        - use camelCase for props in the props object

        - But in the template - use kebab-case

        -Props are accessible anywhere in the config object / or even in the template

        - We can use this.property to access/set the property values

        */

            props : [
                'name' ,
                'phoneNumber',
                'emailAddress'  
                 ],

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