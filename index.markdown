---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: custom_layout
---

<!-- Sections -->
<div class="home-container" id="home">
    <div class="home-description">
        <h2>Hello, I'm Gaston, Game Developer</h2>
		  <p>
			I have a Bachelor's degree in Computer Science, and I'm a passionate game programmer with over fourteen years of experience in software development.  
			I love working on games because they create emotions in people, and that's amazing!  
			I've worked with Unreal Engine 5, Unity3D, and custom engines, and I have extensive experience in C#, C++, and other programming languages.  
			I would love to collaborate with you on your next game!
		</p>
    </div>
	<div class="home-image">
        <img src="{{ site.baseurl }}/assets/images/image_test.jpg" alt="Presentation Image">
    </div>
</div>


   
<section class="section-container" id="about">
  <div class="about-container">
     <div class="about-left">
      <h2 class="section-title">I’m a Professional and Experienced Software Developer.</h2>
      <p>
       I hold a Bachelor's degree in Computer Science and have over fourteen years of experience working in the software industry. Throughout my career, I've worked with a wide range of technologies — from web 
	   and backend development to, in recent years, game development.
	   I have hands-on experience with Unreal Engine, Unity 3D, and custom-built engines. I'm proactive, highly 
	   communicative, and known for my strong interpersonal skills. I've also led multiple teams as a technical leader across various projects and tech stacks.
      </p>
    </div>
  <div class="about-right">
      <h3>Technologies I’ve been working with:</h3>
      <div class="tech-columns">
	       <div>
          <h4 class="section-title">Game Engines</h4>
          <ul>
			<li>Unreal Engine 5</li>
			<li>Unity 3D</li>
            <li>Custom Engines</li>            
          </ul>
        </div>
        <div>
          <h4 class="section-title">Languages</h4>
          <ul>
            <li>C#</li>
            <li>C++</li>
            <li>Typescript</li>
          </ul>
        </div>
		
		<div>
          <h4 class="section-title">Other Technologies</h4>
          <ul>
            <li>MongoDB</li>
            <li>SQLServer</li>
            <li>Angular</li>
            <li>.NET</li>
			<li>Python</li>
          </ul>
        </div>
   
      </div>
    </div>
  </div>
</section>


<section class="section-container" id="projects">
    <h2>Projects</h2>
	<p> This are some of the games and projects I had the chance to work on during my carrer. There are more!</p>
	 <div class="grid-container">
        <div class="grid-item">
			<h3>Star Trek: Infinite </h3>
            <img 
				src="{{ site.baseurl }}/assets/images/startrek.jpg" 
				alt="Star Trek" 
				class="clickable-image"
				data-title="Star Trek: Infinite"
				data-client="Paradox Interactive, Nimble Giant"
				data-genre="Grand Strategy/4X"
				data-tech="C++, Clausewitz Engine (proprietary)"
				data-duration="3 Years"
				data-state="Released October 12th, 2023"
				data-links='[
				  {"href": "https://store.steampowered.com/app/1622900/Star_Trek_Infinite/", "label": "Steam"},
				  {"href": "https://www.paradoxinteractive.com/", "label": "Paradox Interactive"},
				  {"href": "https://www.nimblegiant.com/", "label": "Nimble Giant Entertainment"}
				]'
			  >
            <p>Worked on several gameplay mechanics for Star Trek infinte using Paradox Engine. </p>
			<p>Developed using c++ and Paradox Engine </p>
        </div>
        <div class="grid-item">
			<h3>Tomorrow Falls </h3>
            <img src="{{ site.baseurl }}/assets/images/tomorrowfalls.jpg" alt="Tomorrow Falls"
				class="clickable-image"
				data-title="Tomorrow Falls"
				data-client="DPS Games, Wargaming, MPG"
				data-genre="Action / Combat"
				data-tech="C++, Blueprints, Unreal Engine 4"
				data-duration="Worked for almost a year"
				data-state="Currently Cancelated"
				data-links='[
				  {"href": "https://store.steampowered.com/app/2023130/Tomorrow_Falls/", "label": "Steam"},
				  {"href": "https://dpsgames.com/", "label": "DPS Games"},
				  {"href": "https://www.wargaming.net/en", "label": "Wargaming"},
				  {"href": "https://www.themultiplayergroup.com/", "label": "The Multiplayer group"}
				]'
			  >
		    <p>Worked on multiplayer gameplay mechanics and UI systems.</p>
			<p>Developed using C++, Blueprints and Unreal Engine 4</p>
        </div>
        <div class="grid-item">
			<h3>Seedworld</h3>
            <img src="{{ site.baseurl }}/assets/images/seedworld.jpg" alt="Seedworld"
				class="clickable-image"
				data-title="Seedworld"
				data-client="Seedify, Seedworld"
				data-genre=" Metaverse with a persistent real economy"
				data-tech="C++, Blueprints, Unreal Engine 5"
				data-duration="Worked for almost a year"
				data-state="Under development"
				data-links='[
				  {"href": "https://store.steampowered.com/app/2023130/Tomorrow_Falls/", "label": "Steam"},
				  {"href": "https://seedify.fund/", "label": "Seedify"},
				  {"href": "https://seedworld.io/", "label": "Seedworld"},
				  {"href": "https://seedworldofficial.substack.com/", "label": "Seedworld dev updates"},
				  {"href": "https://www.youtube.com/@SeedworldMetaverse", "label": "Youtube channel"}
				]'
			  >
            <p>Worked on multiplayer gameplay mechanics, prototypes and UI systems</p>
			<p>Developed using C++, Blueprints and Unreal Engine 5</p>
        </div>
    </div>
</section>

<section class="section-container" id="courses">
  <h2>Personal Projects and Courses</h2>
  <p>
    This section includes personal proyects I´m currently working on, courses I´m currently taking and some that I´ve already finished
  </p>

  <div class="grid-container">
    <div class="grid-item">
      <h3>UE5 Gameplay Ability System</h3>
	<img src="{{ site.baseurl }}/assets/images/rpg.png" alt="Top down RPG with GAS"
				class="clickable-image"
				data-title="Top down RPG"
				data-client="udemy"
				data-genre="Action RPG"
				data-tech="C++, Blueprints, Unreal Engine 5"
				data-duration="428 classes, 105 hours"
				data-state="In progress"
				data-links='[
				  {"href": "https://github.com/AtlasArg/Gameplay_Ability_System_Course", "label": "Github},
				  {"href": "https://www.udemy.com/course/unreal-engine-5-gas-top-down-rpg/", "label": "Course Link"}
				]'
			  >
        <p>Creating an ARPG from scratch, learning and understanding Unreal's GAS system</p>
		<p>Developed using C++, Blueprints and Unreal Engine 5</p>
    </div>

    <div class="grid-item">
      <h3>Combat System for RPG in Unity 3D</h3>
	  
	   <img src="{{ site.baseurl }}/assets/images/UnityRPG.png" alt="Unity Combat System"
				class="clickable-image"
				data-title="Unity 3D RPG Core Combat Creator"
				data-client="udemy"
				data-genre="RPG Core Combat system"
				data-tech="C#, Unity 3D"
				data-duration="188 classes, 27 hours"
				data-state="Done"
				data-links='[
				  {"href": "https://github.com/AtlasArg/u_c_rpg", "label": "Github"},
				  {"href": "https://www.udemy.com/course/unityrpg/", "label": "Course Link"}
				]'
			  >
        <p>Creating a combat core for an ARPG in Unity 3D</p>
		<p>Developed using C# and Unity 3D</p>
    </div>

    <div class="grid-item">
 
        <h3>Tom Looman's C++ Unreal Course</h3>
	   <img src="{{ site.baseurl }}/assets/images/tomLooman.png" alt="Unreal c++ Course"
				class="clickable-image"
				data-title="Professional Game Development in C++ and Unreal Engine"
				data-client="Tom Looman's page"
				data-genre="RPG Core Combat system"
				data-tech="C++,Blueprints,Unreal Engine"
				data-duration="29 lessons"
				data-state="Done"
				data-links='[
				  {"href": "https://courses.tomlooman.com/p/unrealengine-cpp?coupon_code=COMMUNITY15", "label": "Course Link"}
				]'
			  >
        <p>Master Unreal Engine C++ Game Development with this university-grade course</p>
		<p>Developed using C++, Blueprints and Unreal Engine 5</p>
    </div>
  </div>
</section>

<section class="section-container" id="jams">
	<h2>Jam Games</h2>
	<p> This section covers the game jams I've participated during the years</p>
	 <div class="grid-container">
		<div class="grid-item">
            <h3>Creation </h3>
			 <img src="{{ site.baseurl }}/assets/images/creation.jpg" alt="Creation"
				class="clickable-image"
				data-title="Creation"
				data-client="Global Game Jam 2022"
				data-genre="A small city builder"
				data-tech="C#, Unity 3D"
				data-duration="Global Game Jam 2022"
				data-state="Free to play"
				data-links='[
				  {"href": "https://onesixgames.itch.io/creation", "label": "Itch.io"}
				]'
			  >
            <p>A small city builder developed under Global Game Jam 2022, worked on the gameplay and game design</p>
			<p>Developed using Unity 3D</p>
        </div>
		
		<div class="grid-item">
            <h3>Greedy Merchants </h3>
			<img src="{{ site.baseurl }}/assets/images/greedymerchants.png" alt="Greedy Merchants"
				class="clickable-image"
				data-title="Greedy Merchants"
				data-client="Ludum Dare 40"
				data-genre="a retro arcade game"
				data-tech="C#, Unity 3D"
				data-duration="Ludum dare 40"
				data-state="Free to play"
				data-links='[
				  {"href": "https://jlreymendez.itch.io/greedy-merchants", "label": "Itch.io"}
				]'
			  >
            <p>A retro arcade game developed for Ludum Dare 40, worked on the gameplay and game design</p>
			<p>Developed using Unity 3D</p>
        </div>
		
		<div class="grid-item">
            <h3>Western Domination </h3>
           		<img src="{{ site.baseurl }}/assets/images/western.png" alt="Western Domination"
				class="clickable-image"
				data-title="Western Domination"
				data-client=""
				data-genre="Action game"
				data-tech="C++, Unreal Engine 5"
				data-duration="Synty Game jam 2025"
				data-state="Free to play"
				data-links='[
				  {"href": "https://atlasarg.itch.io/westerndomination", "label": "Itch.io"}
				]'
			  >
            <p>An action game developed for Synty Game Jam 2025, worked on the gameplay and game design</p>
			<p>Developed using Unreal 5</p>
        </div>
		
		<div class="grid-item">
            <h3>Mine cart Madness </h3>
			<img src="{{ site.baseurl }}/assets/images/minecart.png" alt="Mine Cart"
				class="clickable-image"
				data-title="Mine Cart Madness"
				data-client=""
				data-genre="Action game"
				data-tech="C++, Unreal Engine 5"
				data-duration="GMTK Game Jam 2025"
				data-state="Free to play"
				data-links='[
				  {"href": "https://ivan-auteville.itch.io/mine-cart-madness", "label": "Itch.io"}
				]'
			  >
            <p>An action game developed for GMTK Game Jam 2025, worked on the gameplay and game design</p>
			<p>Developed using Unreal 5</p>
        </div>
    </div>	
</section>

<section class="section-container" id="contact">
    <h2>Contact</h2>
    <p>You can reach me through the following platforms:</p>
    
    <div class="social-links">
        <a href="https://x.com/GSimonetti85" target="_blank">
            <i class="fab fa-x-twitter"></i> 
        </a>
        <a href="https://www.linkedin.com/in/gaston-ignacio-simonetti/" target="_blank">
            <i class="fab fa-linkedin"></i>
        </a>

        <a href="mailto:gastonsimonetti85@gmail.com">
            <i class="fas fa-envelope"></i>
        </a>
		
		<a href="/assets/files/resume.pdf" class="resume-button" download>
        <i class="fas fa-file-pdf"></i> 
		</a>
    </div>
</section>
