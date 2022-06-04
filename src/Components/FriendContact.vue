
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

        -e.g. props : [ 'name' , 'phoneNumber', 'emailAddress' ,'isFavorite' ], 

        - use camelCase for props in the props object

        - But in the template - use kebab-case ( Parent component )

        -Props are accessible anywhere in the config object / or even in the template in the same file

        - We can use this.property to access the props from the props object

        -Props cannot be mutated - Vue uses Unidirectional data flow - Their values cannot be changed as forwarded by Parent COmponent

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

            // props : [ 'name' ,     'phoneNumber',  'emailAddress' ,  'isFavorite' ], 

            props : {
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
                    type: String,
                    required: false,
                    default : '0' ,
                    validator : function(value){
                        return value === '1' || value === '0';
                    }

                },
            },

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