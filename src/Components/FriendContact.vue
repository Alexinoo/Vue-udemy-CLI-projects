
<template>
    <li>
        <h2> {{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : ''}}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>

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

        - But in the template - use kebab-case ( Parent component )

        -Props are accessible anywhere in the config object / or even in the template

        - We can use this.property to access/set the property values

        -Props cannot be mutated - Vue uses Unidirectional data flow - Their values cannot be changed as forwarded by Parent COmponent

        -But if we would like to change  we have to let the parent know that we would like to change the value of the property
            -Therefore we need to add a data property that receives the property from the Parent

        */

            props : [ 'name' ,     'phoneNumber',  'emailAddress' ,  'isFavorite' ],

            data(){

                return {
                    areDetailsVisible : false ,
                    friend : {
                        id: 'manuel',
                        name: 'Manuel Lorenz',
                        phone: '+254 4934 6734 783',
                        email: 'manuel@localhost.com'
                    },
                    friendIsFavorite : this.isFavorite ,
                }
            },

            methods : {
                toggleDetails(){
                    this.areDetailsVisible = !this.areDetailsVisible
                } ,

                toggleFavorite(){
                    
                    if(this.friendIsFavorite === '1'){
                        this.friendIsFavorite = '0'
                    }else{
                        this.friendIsFavorite = '1'
                    }
                },
            }

    }
</script>