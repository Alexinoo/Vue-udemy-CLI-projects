
<template>
    <li>
        <h2> {{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>

        <button @click="toggleDetails"> {{ areDetailsVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="areDetailsVisible">
            <li><strong>Phone : </strong>{{ phoneNumber }}</li>
            <li><strong>Email : </strong> {{ emailAddress }}</li>
        </ul>
        <button v-on:click="$emit('delete' , id )">Delete</button>
    </li>
</template>

<script>
    export default {

        /*  ****** PROPS **********

        - in its simplest form we can pass anything, object/array number etc

        -e.g. props : [ 'name' , 'phoneNumber', 'emailAddress' ,'isFavorite' ], 

        - use camelCase for props in the props object

        - But in the template - use kebab-case ( Parent component )

        -Props are accessible anywhere in the config object / or even in the template in the same file

        - We can use this.property to access the props from the props object

        -Props cannot be mutated - Vue uses UNIDIRECTIONAL data flow - Their values cannot be changed as forwarded by Parent COmponent

        -But if we would like to change  we have to let the parent know that we would like to change the value of the property by adding a data property that receives the property from the Parent

        -We can also use props as objects with names as property and values as DATATYPES

        props : { name : String ,    phoneNumber : String,  emailAddress : String ,  isFavorite : String }, 

        -Datatypes can also be object {}

        - WE CAN ALSO ADD MORE INFO ABOUT VALIDATION OF THAT PROPERTY AS FOLLOWS

        isFavorite : {
                    type : String ,
                    required : true
                },

        -If you have a non required field , we can add a default value to be used;

         isFavorite : {
                    type : String ,
                    required : false ,
                    default : '0'
                },

        -Default can also take in a function which executes and return basically some default values

          isFavorite : {
                    type : String ,
                    required : false ,
                    default : function(){
                        return (default value)
                    }
                },

        -We can also have a validator - takes in a function that takes in a value provided  and returns Truthy/Falsy values

          isFavorite : {
                    type : String ,
                    required : false ,
                    default : function(){
                        return (default value)
                    },
                     validator : function(value){
                        return value === '1' || value === '0';
                    }
                },

        -Supported Value types
            -String
            -Number
            -Boolean
            -Array
            -Object
            -Date
            -Function
            -Symbol
        But type can also be any constructor function (built-in ones like Date or custom ones).

        */


       /* ****EMITTING CUSTOM EVENTS  ( Child => Parent Communication )*************

        -Props allows us to send contacts from  Parent to Child App.vue to FriendContact.vue

        -Now we need to tell our parent that the status of our isFavorite changed - SINCE WE ARE TOGGLING IT by toggleFavorite
        - and the parent has no idea of whether it's changing - It's only happenning at the Child level

        -So instead of changing the internal friendIsFavorite to the opposite of what it was
         e.g  this.friendIsFavorite = !this.friendIsFavorite

         -We can use this.$emit() just like we used this.$refs.userText.value in our behind the scenes module

         -this.$emit() is a built-in method which we can use inside ANY VUE COMPONENT (CHILD) AND THIS ALLOWS YOU TO EMIT YOUR OWN CUSTOM EVENTS TO WHICH YOU CAN THEN LISTEN FROM INSIDE THE PARENT COMPONENT

         -this.$emit() - TAKES IN AT LEAST ONE ARGUMENT - AND THAT IS THE NAME OF THE CUSTOM EVENT

         -WE CAN NAME THIS CUSTOM EVENT HOWEVER WE WANT BUT THE CONVENTION IS ALWAYS USE A KEBAB-CASE
         e.g. this.$emit('toggle-favourite')  - NO MATTER WHERE WE USE IT

         -We can also add data to it by passing it as an argument - we can pass as many arguments as possible

         -How do we pass this:

         Add another property to our props then pass it to this.$emit(, this.id  )

         -And now when the toggle-favorite is emitted will carry along the id prop which was supplied as an extra data

         -*****OPTIONS FOR EMITTING***

         <button v-on:click="deleteFriend"></button>

         -You can call a deleteFriend function that emit
           // deleteFriend(){
                //     this.$emit('delete')
                // }

        -OR JUST EMIT directly

          <button v-on:click="$emit('delete')"></button>

         -AND NOW WE ARE USING UNIDIRECTION DATA FLOW IN BOTH DIRECTIONS
          I.E. We are using it to pass props data from our App.vue to child component and we are also using it the other way round to emit a custom event from the child component with $emit()  and listening to this custom event in the App.vue to then make changes to the data in the App.vue and then Vue sees something has changed and then updates the UI

        */

       /* ****DEFINING AND VALIDATING CUSTOM EVENTS *************

        -Add another emits property in our config object as an array that defines which custom events will be emitted by the Child component

        -This is useful because it makes it easier for other developers to understand your component and know which custom events are emitted from that component

       emits : ['toggle-favorite' ]

       - And you can take this to another level where you can add emits as an object where you add it as a key and provide a more detailed configuration

       - You can pass a function with parameters that the emitter will pass to the Parent component

       -You can also validate if the Id is passed and return true if that is the case;otherwise log a warning that probably that the ID was not Found



       */







            // props : [ 'name' ,     'phoneNumber',  'emailAddress' ,  'isFavorite' ], 

            props : {
                id : {
                    type : String ,
                    required : true
                },
                name : {
                    type : String ,
                    required : true
                },
                phoneNumber: {
                    type: String,
                    required: true
                },
                emailAddress: {
                    type: String,
                    required: true
                },
                isFavorite: {
                    type: Boolean,
                    required: false,
                    default : false ,
                    // validator : function(value){
                    //     return value === '1' || value === '0';
                    // }

                },
            },

             emits: [ 'toggle-favorit' , 'delete'],

            // emits: {
            //     'toggle-favorite' : function(id){

            //         if(id){
            //             return true
            //         }else{
            //             console.warn('Id not found');
            //             return false
            //         }
            //     }
            // },

            data(){

                return {
                    areDetailsVisible : false ,          
                }
            },

            methods : {
                toggleDetails(){
                    this.areDetailsVisible = !this.areDetailsVisible
                } ,

                toggleFavorite(){
                    
                    this.$emit('toggle-favorite',this.id) 
                },
            }

    }
</script>