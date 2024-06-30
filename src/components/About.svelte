<script>
    import Button from "./Button.svelte";


    let someText= `Frontend Developer`                                      /* las comillas francesas que literal son streams`para concatenar y hacer elementos dentro del javascript */

    let count = 0;                                                  /*contador inicializado en 0  variable */

    let styles = {darkMode: false}

    function handleClick(){                                         /* funcion para incrementar en 1 el contador*/
        count +=1;
    }

    function toggle(){
        styles.darkMode = !styles.darkMode;                         /* lo que hace es si esta falso lo convierte a verdadero y si es verdadero a falso*/
        window.document.body.classList.toggle("dark-mode");
    }


</script>


<style>
p{
    color: var(--theme-color);
}

</style>


<div class="About">


{#if !styles.darkMode}
<p>{someText}</p>
{:else}
<p>
    <span>Hola DarkMode</span>
</p>

{/if}




<Button text="Click" {count} on:click={handleClick}/>
<Button text="DarkMode" on:click={toggle}/>
<button on:click={handleClick}>Click{count === 0 ? '' : count}</button>                                             <!--boton para el contador-->
<button on:click={toggle}>DarkMode</button>                                                <!--boton para darkmode-->                                    

    
</div>