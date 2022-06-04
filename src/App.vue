<template>
    <section>
        <h2>My Friends</h2>
            <ul>
                <li></li>
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
                email : 'manuel@localhost.com'
            },
                {
                id : 'julie',
                name : 'Julie Jones',
                phone : '+119 934 6734',
                email : 'julie@localhost.com'
            },
            ],
        }
    },

    // methods : {} ,

    // computed : {},

}

</script>