<script>
    import Counter from './Counter.svelte';
    import nnetfast from '$lib/images/nnetfast.gif';
    import nnetslow from '$lib/images/nnetslow.gif';    
    import hyperplane from '$lib/images/hyperplane.gif';
    import hyperplane2 from '$lib/images/hyperplanelowdim2.gif';
    import charts2 from '$lib/images/charts2.png';
    import workdesk from '$lib/images/workdesk2.png';
    import portfolio from '$lib/images/portfopt.png';
    import portfolio2 from '$lib/images/portfopt2.png';
    import riskml from '$lib/images/riskclusters.png';
    import oracle from '$lib/images/oracle.gif';
    import code from '$lib/images/code.gif';
    import logo from '$lib/images/logo-desktop.png';
    import graph1 from '$lib/images/datagraph1.gif';
    import graph2 from '$lib/images/datagraph2.gif';
    import bggraphic from '$lib/images/hand-analytics.png';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<!--
<section>
    <div class="cols-3">
        <h1>Shaping your <b>Investments</b> with <b>AI</b></h1>
        <picture>
            <img class="small-image" src={nnetfast} alt="Welcome" />
        </picture>      
        <picture>
            <img class="small-image" src={nnetslow} alt="Welcome" />
        </picture>      
        <picture>
            <img class="small-image" src={'src/lib/images/hyperplane.gif'} alt="Welcome" />
        </picture>
    </div>
    
    <h2>
        try editing <strong>src/routes/+page.svelte</strong>
    </h2>
    <Counter />
</section>  -->

<div class="top-area"> <!-- Added a div to center content -->
    <!--<h1>Unlock <b>Investment Intelligence</b></h1>-->
    <h1>Shaping the <b>Future</b> of <b>DeFi</b></h1>
    <span>with Data and AI</span> <!-- This will now be centered -->
</div>

<div>
    <!--
    <section class="graphic">
        <img class="overlay" alt="alt" src={hyperplane} style="width:300px; height:auto;">
        <img class="overlay" alt="alt" src={graph1} style="width:200px; height:auto;">
        <img src={graph2} alt="alt" style="width:200px; height:auto;">   
        <link href="tablogo">
    </section>
    <br>
    <br>-->
    <section class="graphic" style="pointer-events: none;">
        <img class="overlay" alt="alt" src={nnetfast} draggable=False style="width:280px; height:auto;">
        <img src={hyperplane} alt="alt" style="width:280px; height:auto;">   
        <link href="tablogo">
    </section>
    <br>
    <!--
    <section class="graphic">
        <img class="overlay" alt="alt" src={nnetslow} style="width:280px; height:auto;">
        <img src={hyperplane2} alt="alt" style="width:280px; height:auto;">   
        <link href="tablogo">
    </section>
    -->
</div>

  

<svg width="200" height="50"> 
    <rect id="box" x="0" y="0" width="100" height="20"/>
    <text x="110" y="15" font-size="14" fill="white">About</text>
</svg>
<section>
    <div class="text-column">
        <div>
            <h3>Embrace the change </h3>
            <p>
                The continuous stream of emerging technologies challenges both investors and
                regulators rethink establish conventions. 
                In a game of survival the needs of of adopting new ways to mee
                by a of innovations aiming to disrupt the underlying 
                infrastructure modern economies rely on. 
                In this process, laymen are left behind.
            <p>
                XYZ help its customers to navigate dynamic market environments. We
                push/adopt state-of-the art technologies to the limit and latest 
                frontiers scientific research. 
            </p> <!--forefront frontline-->
        </div>
        <!--
        <a href="mailto:youremail@example.com?subject=HARP-Beta&body=Hi,%0D%0A%0D%0A 
        I would like to get in touch.
        %0D%0A%0D%0A Regards,
        %0D%0A y" class="email-button">Contact Us
        </a>
        -->
    </div>
</section>

<img class="zoom" src={bggraphic} alt="alt" style="width:450px; height:auto;">





<svg width="200" height="50"> 
    <rect id="box" x="0" y="0" width="100" height="20"/> 
    <text x="110" y="15" font-size="14" fill="white">Solutions</text> 
</svg>
<section>
    <div class="text-column">
        <div>
            <h3>Unlock Investment Intelligence</h3>
            <p>
                An investment analytics platform equipping investors with modern analytics for the digital age. 
                It spans toolkits for asset selection, portfolio optimization and strategy development. 
                HARP makes use of state-of-the-art algorithms enabling models with enhanced returns and
                limited risk. It is characterized by diversificaiton and robust out-of-sample performance
                when compared to hitherto techniques used in portfolio management. 
            </p>
            <img class="zoom" src={workdesk} alt="alt" style="width:250px; height:auto;">
        </div>
        <div>
            <h3>Go autopilot.</h3>
            <p>
				Automate alpha research and development platform for professional asset managers.
				 salpha automation for . Automate
				 your operations to avoid headaches related to strategy research and 
				 development. 
				your trading operations

				edge 

				<!---
                Build feature engineering pipelines and reinforcement learning environments with a single line code. 
                Our library eliminates the hassle of preprocessing and populating of financial time series data.
                It currently serves as backbone for machine learning models providing accuracy, performance and convenience. 
                
                Automate the boring stuff and focus on finding alpha. Create feature engineering
                pipelines and reinforcement learning environments with a single line code. 
                Our library eliminates the hassle of preprocessing and populating of financial time series data.
                It currently serves as backbone for machine learning models providing accuracy, performance and convenience.    
            	-->
			</p>
        </div>
    </div>
</section>




<svg width="200" height="50"> 
    <rect id="box" x="0" y="0" width="100" height="20"/> 
    <text x="110" y="15" font-size="14" fill="white">Products</text> 
</svg>
<section>
    <div class="text-column">
        <table>
            <tbody>
                <tr>
                    <td>
						<h4>HARP</h4>
							<p>
                                Step up your game with data and AI. HARP is an asset management platform 
                                equipping investors for the digital age. with modern analytics  
                            jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                            </p>
                        </td> 
                        <td>
                        <img class="zoom" src={logo} alt="alt" draggable=False style="width:200px; height:auto; pointer-events: none;">
                    </td>
                </tr>
                <tr>
                    <td>        
                        <img class="zoom" src={code} alt="alt" draggable=False style="width:200px; height:auto;">
                    </td>
                    <td>
						<h4>QADR</h4>
						<p>
							 A solution for asset managers to eliminate the hassle of time consuming manual labor
							in quantitative research. Build systematic trading systems with a handful of lines of code. 

								convenient performant
								<!--
								#quantitative/quantum alpha/adaptive/autonomous/advantage/art
								#diversification #research/reasoning
								-->
						</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</section>


<svg width="200" height="50"> 
    <rect id="box" x="0" y="0" width="100" height="20"/> 
    <text x="110" y="15" font-size="14" fill="white">Access</text> 
</svg>
<section>
<div class="text-column">
        <div>
            <!--<h2><b>Get in Touch </b></h2>-->
            <h3>Get in Touch</h3>
            <p>
                Join the waiting list to gain early access.
                Join the waiting list and win a spot in our closed beta and secure 
                access to our reward program. 
                limited spots, 
                Become a beta user and secure deals when we go live.
				Join the waiting list for early asses, rewards and offers. We offer 
				limited spot for early users by invite only
            </p>
        </div>
        <div class="newsletter-container">
            <div class="icon">
              &#9993; <!-- Envelope icon      &body=Hi,-->
            </div>
            <h1>Join Our Beta</h1>
            <p>Subscribe to get the latest updates and news.</p>
			<form 
			action="mailto:newsletter@proton.me?subject=Beta" 
			method="GET" 
			enctype="text/plain"
		>
			<input type="email" name="email" placeholder="Enter your email" required>
			<input type="text" name="name" placeholder="Name" required>
			<select id="products" name="products" style="height: 40px;">
				<option value="HARP" selected>HARP</option>
				<option value="d4t">d4t</option>
			</select>
			<br>
			<fieldset>
				<legend>Personalia:</legend>
				<input type="text" id="firstname" name="firstname" placeholder="Your Name">
				<br>
				<input type="text" id="message" name="message" value="I want to join the waiting list.">
				<br><br>
			</fieldset>
			<button type="submit">Join</button>
		</form>
		
        </div>
    </div>
    <br>    
    <!---
        <div class="image-grid" style="pointer-events: none;">
            <img class="zoom" src={portfolio} alt="alt" draggable="false" style="width:250px; height:auto;">
            <img class="zoom" src={riskml} alt="alt" draggable="false" style="width:250px; height:auto;">
            <img class="zoom" src={charts2} alt="alt" draggable="false" style="width:250px; height:auto;">
        </div>-->
</section>


<style>
    section {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.3;
        /*text-align: justify;*/
    }

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .overlay {
        position: absolute;
        width: 100%;
        height: 100vh;
    }
    
    #box {
        fill: var(--color-theme-1);
        stroke: black;
    }

    .zoom {
    padding: 20px;
    transition: transform .2s; /* Animation */
    width: 130px;
    height: 100px;
    margin: 0 auto;
    border-radius: 15px;
    /*margin-right: 100px;*/
    }

    .zoom:hover {
    transform: scale(1.3); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }

    .image-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Default to 3 columns */
        gap: 5px; /* Space between grid items */
        padding-top: 40px;
        padding-bottom: 40px;
    }

    @media (max-width: 768px) { /* Adjust the max-width as needed */
        .image-grid {
            grid-template-columns: 1fr; /* Change to 1 column for smaller screens */
        }
        section {
            /*margin-right: 15px;*/
        }
    }

    .email-button {
        display: inline-block;
        padding: 10px 20px;
        background-color: var(--color-theme-1);
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        height:40px;
        width: 140px;
        text-align: center;
        margin-left: auto; /* Added to push the button to the right */
        }

    .email-button:hover {
        /*background-color: var(--color-theme-2);*/
        scale: 1.05;
        }

    .newsletter-container {
      /*background-color: #d1d0d0;*/
      background-color: var(--color-theme-2);
      border-radius: 10px;
      box-shadow: 10px 10px 30px 0px rgba(7, 190, 175, 0.534), 
                  0px 8px 12px 0px rgba(10, 4, 63, 0.08);
      padding: 30px;
      text-align: center;
      width: 350px;
      justify-self: center;
      margin: auto;
      margin-top: 40px;
      margin-bottom: 110px;
    }

    .newsletter-container h1 {
      font-size: 24px;
      /*color: #333;*/
      color: var(--color-theme-1);
      margin-bottom: 10px;
    }

    .newsletter-container p {
      font-size: 16px;
      /*color: #666;*/
      color: white;
      margin-bottom: 20px;
      margin-top: 10px;
    }

    .newsletter-container .icon {
      font-size: 50px;
      color: var(--color-theme-1);
      margin-bottom: 20px;
    }

    .newsletter-container form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .newsletter-container input {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
      transition: border 0.3s;
      height: 40px;
    }

    .newsletter-container input:focus {
      border-color: var(--color-theme-1);
    }

    .newsletter-container button {
      padding: 10px;
      font-size: 16px;
      background-color: var(--color-theme-1);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 20px;
    }

    .newsletter-container button:hover {
      background-color: #005bb5;
    }

</style>