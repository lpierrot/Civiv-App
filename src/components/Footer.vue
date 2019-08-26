<template>
    <footer class="footerpage">
        <p>{{ footerText }}</p>
    </footer>
</template>
<script>
import axios from "axios";
export default {
    name: 'Footerpage',
    data() {
        return {
            footerText: "Copyright &copy; Lionel Pierrot 2019"
        }
    }
}
</script>
<style scoped>
    .footerpage {
        background-color: black;
    } 
</style>