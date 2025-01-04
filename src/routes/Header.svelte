<script>
	import { page } from '$app/stores';
	//import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import logo from '$lib/images/eagle.png'
</script>


<!---https://fontawesome.com/v6/search?q=chart&o=r&m=free-->

<header>

	<div class="corner">
		<a href="/">
			<img src={logo} alt="Seljuq" />
		</a>
	</div>


	<div class="corner">
		<!--<SideBarNav></SideBarNav>-->
		<br>
	</div>

	<!--
	<i class="fa-solid fa-brain"></i><i class="fa-solid fa-magnifying-glass-chart"></i>
	<i class="fa-solid fa-bars"></i><i class="fa-solid fa-dice-d6"></i><i class="fa-brands fa-ethereum"></i>
	filter noise <i class="fa-regular fa-map"></i> <i class="fa-brands fa-btc"></i><i class="fa-brands fa-bitcoin"></i>
	<i class="fa-solid fa-robot"></i><i class="fa-solid fa-share-nodes"></i>
	<i class="fa-solid fa-percent"></i><i class="fa-solid fa-bullseye"></i>
	<i class="fa-solid fa-tent"></i><i class="fa-regular fa-life-ring"></i>
	<i class="fa-solid fa-brain-circuit"></i><i class="fa-regular fa-trash-can"></i><i class="fa-solid fa-money-bill"></i>
	<i class="fa-duotone fa-solid fa-square-binary"></i>
	<i class="fa-solid fa-toolbox"></i><i class="fa-solid fa-tornado"></i>
	<i class="fa-duotone fa-solid fa-chart-diagram"></i> multistrat
	<i class="fa-solid fa-info"></i><i class="fa-solid fa-exclamation"></i>
	<i class="fa-regular fa-map"></i><i class="fa-solid fa-user-secret"></i>
	<i class="fa-solid fa-toilet"></i> <i class="fa-solid fa-ban"></i><i class="fa-solid fa-poop"></i><i class="fa-solid fa-eye"></i>
	<i class="fa-solid fa-stroopwafel"></i><i class="fa-solid fa-car-burst"></i><i class="fa-solid fa-burst"></i>
	<i class="fa-solid fa-square-root-variable"></i><i class="fa-solid fa-greater-than-equal"></i>
	<i class="fa-solid fa-money-bill"></i><i class="fa-solid fa-shekel-sign"></i><i class="fa-solid fa-manat-sign"></i>
	<i class="fa-solid fa-q"></i>
	<i class="fa-solid fa-kaaba"></i><i class="fa-solid fa-book-quran"></i><i class="fa-brands fa-ussunnah"></i>
	<i class="fa-solid fa-person-praying"></i><i class="fa-solid fa-people-roof"></i><i class="fa-solid fa-life-ring"></i>
	-->
	
	<div class="w3-sidebar w3-bar-block w3-large" style="width:42px; right: 0; position: fixed; background-color: transparent;">		
		<a href="/" class="w3-bar-item w3-button" aria-label="Home"><i class="fa fa-home"></i></a> 
		<a href="/" class="w3-bar-item w3-button" aria-label="Messages"><i class="fa fa-envelope"></i></a> 
		<a href="http://d4t-e2h8.onrender.com" class="w3-bar-item w3-button" aria-label="Portfolio"><i class="fa fa-pie-chart"></i></a> 
		<a href="http://d4t-e2h8.onrender.com" class="w3-bar-item w3-button" aria-label="ff"><i class="fa-solid fa-chart-line"></i></a> 
		<a href="http://d4t-e2h8.onrender.com" class="w3-bar-item w3-button" aria-label="ff"><i class="fa fa-solid fa-chart-simple"></i></a> 
	</div>
	


</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 4em;
		height: 4em;
		position: fixed;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
	/**	body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }

    .hamburger {
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 1000;
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hamburger span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: black;
      margin: 5px 0;
      transition: 0.3s;
    }



    .w3-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: 50px;
      background-color: #f4f4f4;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 999;
    }

    .w3-bar-item {
      padding: 15px 20px;
      color: black;
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 18px;
      border-bottom: 1px solid #ddd;
    }

    .w3-bar-item i {
      margin-right: 10px;
    }

    .w3-bar-item:hover {
      background-color: #ddd;
    }

    #menu-toggle {
      display: none;
    }

    #menu-toggle:checked ~ .w3-sidebar {
      transform: translateX(0);
    }
	  */

</style>
