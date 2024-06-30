<script>
    import {count} from "../store/store.js"
    
    function handlClick (){
        count.update(n => n + 1)
    }


</script>


<style>
    button {
        background-color: #f76027;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>



<button on:click={handlClick}>
    Click {$count === 0 ? '' : $count }       <!--simbolo de pesos para el manejo reactivo de la variable -->
</button>

