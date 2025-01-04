<script>
	let isOpen = false;

	function toggleSidebar() {
		isOpen = !isOpen;
		if (isOpen) {
			// Focus the first link when the sidebar opens
			document.getElementById('first-link').focus();
		}
	}
</script>



<div class="relative">
	<button on:click={toggleSidebar} class="hamburger absolute top-4 right-4 z-51" aria-label="Toggle sidebar">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
			<path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
		</svg>
	</button>

	<div class={`sidebar ${isOpen ? 'open' : ''}`} role="navigation" aria-hidden={!isOpen}>
		<h2 class="p-2 text-xl dark:text-white">Navigation</h2>
		<ul>
			<li class="p-4 hover:bg-gray-200 dark:hover:bg-gray-700"><a href="#home">Home</a></li>
			<li class="p-4 hover:bg-gray-200 dark:hover:bg-gray-700"><a href="#about">About</a></li>
			<li class="p-4 hover:bg-gray-200 dark:hover:bg-gray-700"><a href="#services">Services</a></li>
			<li class="p-4 hover:bg-gray-200 dark:hover:bg-gray-700"><a href="#contact">Contact</a></li>
		</ul>
		<button id="close-button" on:click={toggleSidebar} class="absolute top-2 right-2" aria-label="Close sidebar">Close</button>
	</div>

	{#if isOpen}
		<div class="overlay" on:click={toggleSidebar} role="button" aria-hidden="true"></div>
	{/if}
</div>


<style>
	.sidebar {
		position: fixed;
		top: 0;
		right: 0;
		width: 250px;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.7);
		box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
		transform: translateX(100%);
		transition: transform 0.3s ease;
		z-index: 1000;
	}

	.sidebar.open {
		transform: translateX(0);
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}

	.hamburger {
		width: 30px;
		height: 30px;
		background: none;
		border: none;
		cursor: pointer;
	}

	.hamburger svg {
		fill: var(--color-text);
	}

</style>
