<script>
	import About from "./components/About.svelte";                         /* importe About*/
	import Text from "./components/Text.svelte";
	import Person from "./components/Person.svelte";
	import Skills from "./components/Skills.svelte";
	import Input from "./components/Input.svelte";
	import Photos from "./components/Photos.svelte";
	import ButtonCount from "./components/ButtonCount.svelte";



	export let name;
	export let lastName;
	

	let svelteLogo = "https://openexpoeurope.com/wp-content/uploads/2019/09/svelte-logo.jpg";                   /*variable del logo*/


	const data ={
		name: "Miller",
		lastName: "Bohorquez",
		age: 32

	}

</script>



<style>

:global(body){                                            /* estos son estilos globales*/
	background-color: #f2eee2;
	color: #0084f6;
}


:global(:root){                                          /* variables globales */
 --theme-color: purple;

}


:global(body.dark-mode){
	background-color: #1d3040;
	color: #bfc2c7;
}



	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	main img{
		width: 20%;                                                   /* manipulacion de la imagen */
		
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About/>                                             <!-- traer a About importa About dentro de mi documento -->  
	<Text anotherText="hola trabajando en svelte" />   
	<Text />   
	<Person {...data} /> 
	<Skills/>  
	<Input/>  
	<Photos/> 
	<ButtonCount/>        
	<img src={svelteLogo} alt="Svelte"/>                <!-- aca llamamos el logo -->  <!-- Esto es un comentario en HTML -->            
</main>