<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>

        <new-friend @add-contact ="addContact">

        </new-friend>

        <ul>
            <!-- WORKING WITH DYNAMIC PROP VALUES

                -Just like any HTML elements we can bind attributes of our components to dynamic values using v-bind or just ( : )

                e.g isFavorite currently works with a boolean value and thus we can bind it 
                as v-bind:isfavorite = "true" or just :isFavorite = "true"

                -We can also execute a javascipt conditions / or even call a method that returns truthy/falsy values

                - We can use v-for , v-if to render data dynamically

                -If you use v-for , You always have to use :key attribute

                -Then we can bind every property dynamically since now we are looping using v-for

                 -->

            <!-- 
                ****LISTENING TO  CUSTOM EVENTS EMMITED FROM CHILD COMPONENT 
            ( Child => Parent Communication )
            ************* 

            -We can listen to them (custom events) just like how we listen to click buttons using v-on or @click directives

            e.g v-on:toggle-favorite or just use the shorthand @toggle-favorite

            -And bind them to any javascript code/method which should be executed when this event is emitted
            
            -In our case, we add toggleFavoriteStatus as a method and bind to it
            
            
            
            -->


            <friend-contact
                 v-for="friend in friends"
                 :key="friend.id"
                 :id="friend.id"
                 :name="friend.name"
                 :phone-number="friend.phone"
                 :email-address="friend.email"
                 :is-favorite="friend.isFavorite"
                @toggle-favorite="toggleFavoriteStatus"
                @delete="deleteContact"
                >
            </friend-contact>
        </ul>
    </section>
</template>


<script>
/*
 - We create a standard JavaScript Object

 - We can store it in a variable if we want to;

 -But instead we can export it directly by using export default

*/

export default {

    data(){

        return {

            friends : [
                {
                id : 'manuel',
                name : 'Manuel Lorenz',
                phone : '+254 4934 6734 783',
                email : 'manuel@localhost.com',
                isFavorite : true,
            },
                {
                id : 'julie',
                name : 'Julie Jones',
                phone : '+119 934 6734',
                email : 'julie@localhost.com',
                isFavorite: false,
            },
            ],
        }
    },

    methods : {

        toggleFavoriteStatus(friendId){

        const identifiedFriend =  this.friends.find( friend => friend.id === friendId )
        
            identifiedFriend.isFavorite = !identifiedFriend.isFavorite
        } ,

        addContact(name , phone, email ) {

            const newFriendContact = {
                id : new Date().toISOString() ,
                name: name,
                phone: phone,
                email: email,
                isFavorite: false,
            }

            this.friends.push(newFriendContact)
        },

        deleteContact(friendId){

            this.friends = this.friends.filter(friend => friend.id !== friendId )

        }
    },

}

</script>


<style>


/* @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap'); */

* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li ,
#app form{
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
    font: inherit;
    padding: 0.15rem;
}

#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}

#app form div {
    margin: 1rem 0;
}
</style>