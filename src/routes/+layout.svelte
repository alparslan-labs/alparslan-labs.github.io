<script>
	import Header from './Header.svelte';
	import '../app.css';
	//import Footer from './Footer.svelte'
	import logo from '$lib/images/eagle.png';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>

		<div class="footer-container">
			<!-- Column 2 -->
			<div class="footer-column">
				<h3>Topics</h3>
				<ul>
					<li><a href="{ base }/company">Company</a></li>
					<li><a href="{ base }/products">Products</a></li>
					<li><a href="{ base }/research">Research</a></li>
				</ul>
			</div>
			<!-- Column 1 -->
			<div class="footer-column">
				<h3>Solutions</h3>
				<ul>
					<li><a href="{ base }/HARP">HARP</a></li>
					<li><a href="{ base }/QADR">QADR</a></li>
				</ul>
			</div>
		
			<!-- Column 3 -->
			<div class="footer-column">
				<h3>Company</h3>
				<ul>
					<li><a href="{ base }/about">About</a></li>
					<li><a href="{ base }/blog">Blog</a></li>
					<li><a href="{ base }/codex">Codex</a></li>
					<!--<li><a href="#">Carreers </a></li>
					<li><a href="#">Roadmap</a></li>https://userwell.com/software-release-life-cycle
					<li><a href="#">Legal</a></li>
					<li><a href="#">Branded Assets</a></li>
					<li><a href="#">Trademark Policy</a></li>
					<li><a href="#">Privacy Policy</a></li>					
					<li><a href="#">Terms of Service</a></li>			
					impressum
					datenschutz
					risikohinweis
					-->
				</ul>
			</div>
		  			<!-- Column 4 -->
			<div class="footer-column">
				<h3>Support</h3>
				<ul>
					<li><a href="{ base }/">Help Center</a></li>
					<li><a href="{ base }/">Contact</a></li>	
					<li><a href="{ base }/">Feedback</a></li>
					<li><a href="{ base }/">Help Center</a></li>
				</ul>
			</div>

			<div class="footer-column">

				<a href="{ base }/">
					<img src={logo} alt="Seljuq" width="25px"/>
				</a>
			</div>
			<!--<div class="footer-column">

				<a href="/">
					<img src={logo} alt="Seljuq" width="30px"/>
				</a>
			</div>-->
		</div>
	
		<hr width="90%" size="1" noshade>

		<!--<p>
			visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>-->
		<div class="footer-bottom">
			<p>
				<a href="https://github.com" aria-label="GitHub"><i class="fa fa-brands fa-github"></i></a>
				<a href="https://x.com" aria-label="Twitter"><i class="fa fa-brands fa-x-twitter"></i></a>
				<a href="https://x.com" aria-label="Facebook"><i class="fa fa-brands fa-facebook"></i></a>
				<a href="https://linkedin.com" aria-label="LinkedIn"><i class="fa fa-brands fa-linkedin"></i></a>
				<a href="https://github.com" aria-label="Telegram"><i class="fa fa-brands fa-telegram"></i></a>
				<a href="https://github.com" aria-label="Instagram"><i class="fa fa-brands fa-instagram"></i></a>
				<a href="https://svelte.dev/docs/kit" aria-label="Twitch"><i class="fa fa-brands fa-twitch"></i></a>
				<a href="https://svelte.dev/docs/kit" aria-label="YouTube"><i class="fa fa-brands fa-youtube"></i></a>
				<a href="https://svelte.dev/docs/kit" aria-label="TikTok"><i class="fa fa-brands fa-tiktok"></i></a>
				<a href="https://svelte.dev/docs/kit" aria-label="Discord"><i class="fa fa-brands fa-discord"></i></a>
			</p>
			&copy; 2025 YourCompany. All Rights Reserved.
		  </div>	
	</footer>	
</div>


<style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    footer {
      background-color: #333;
      color: #fff;
      padding: 20px 0;
    }

    .footer-container {
      max-width: 1800px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 70px;
      padding: 15px;
    }

    .footer-column {
      flex: 1;
      min-width: 180px;
    }

    .footer-column h3 {
      font-size: 18px;
      margin-bottom: 10px;
      color: #f4f4f4;
    }

    .footer-column ul {
      list-style: none;
      padding: 0;
    }

    .footer-column ul li {
      margin-bottom: 10px;
    }

    .footer-column ul li a {
      text-decoration: none;
      color: #ccc;
	  font-weight: normal; /* Ensures the links are not bold */
      transition: color 0.3s;
    }

    .footer-column ul li a:hover {
      color: #fff;
    }

    .footer-bottom {
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
      color: #bbb;
    }

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}	

	.fa {
		color: white;
		/*color: var(--color-theme-1);*/
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		/*max-width: 64rem;*/
		max-width: 90rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	#wrap {
		display: flex;
			flex-direction: column;
			min-height: 100%
	  }
	  /*
		main {
		flex: 1 0 auto;
			/* styling 
			padding: 3rem;
			border: 2px solid #eee;
	  }
	  */
		footer {
		flex: 0 0 auto;
			/* styling */
			padding-top: 2rem;
			/*background: #eee;*/
			background: var(--color-theme-2);
	  }

	.footer-links {
		display: grid;
		justify-items: center;
		grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
		line-gap-override: 150px; /* Optional: adds space between the grid items */
	}
	.footer-links a {
		color: white; /* Set the font color to white */
		text-decoration: none; /* Optional: remove underline from links */
	}
	.socials {
		color: white; /* Set the font color to white */
		text-decoration: none; /* Optional: remove underline from links */
	}

</style>
