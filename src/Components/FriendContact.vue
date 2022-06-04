
<template>
    <li>
        <h2> {{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
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

         -AND NOW WE ARE USING UNIDIRECTION DATA FLOW IN BOTH DIRECTIONS
          I.E. We are using it to pass props data from our App.vue to child component and we are also using it the other way round to emit a custom event from the child component with $emit()  and listening to this custom event in the App.vue to then make changes to the data in the App.vue and then Vue sees something has changed and then updates the UI

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
                    
                    this.$emit('toggle-favorite' , this.id) 
                },
            }

    }
</script>