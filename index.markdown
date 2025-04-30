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
	<p> Some of the game projects I've worked on</p>
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
			<p>Developed using c++. </p>
			<a href="https://store.steampowered.com/app/1622900/Star_Trek_Infinite/" target="_blank" class="project-link">Check on Steam</a>
        </div>
        <div class="grid-item">
			<h3>Tomorrow Falls </h3>
            <img src="{{ site.baseurl }}/assets/images/tomorrowfalls.jpg" alt="Tomorrow Falls">
		    <p>Worked on gameplay mechanics and UI for this great ongoing game</p>
			<a href="https://store.steampowered.com/app/2023130/Tomorrow_Falls/" target="_blank" class="project-link">Check on Steam</a>
        </div>
        <div class="grid-item">
			<h3>Seedworld</h3>
            <img src="{{ site.baseurl }}/assets/images/seedworld.jpg" alt="Imagen del Proyecto 3">
            <p>A Multiplayer Shooter Game implemented mostly on C++ </p>
			<a href="https://seedworld.io/" target="_blank" class="project-link">Check it</a>
        </div>
    </div>
	 <h2>Personal Projects</h2>
	 <p> This are my personal projects I work on my free time </p>
	 <div class="grid-container">
        <div class="grid-item">
            <h3>UE5 - Gameplay Ability System </h3>
            <img src="{{ site.baseurl }}/assets/images/image_test.jpg" alt="Imagen del Proyecto 4">
            <p>An ARPG implemented with GAS in UE5. (In progress) </p>
			<a href="https://github.com/AtlasArg/Gameplay_Ability_System_Course" target="_blank" class="project-link">Check it on Github</a>
        </div>
        <div class="grid-item">
            <h3>Combat System for RPG in Unity 3D </h3>
            <img src="{{ site.baseurl }}/assets/images/image_test.jpg" alt="Imagen del Proyecto 5">
            <p>Descripción del Proyecto 5...</p>
			<a href="https://github.com/AtlasArg/u_c_rpg" target="_blank" class="project-link">Check it on Github</a>
        </div>
		<div class="grid-item">
            <h3>Combat System for RPG in Unity 3D </h3>
            <img src="{{ site.baseurl }}/assets/images/image_test.jpg" alt="Imagen del Proyecto 5">
            <p>Descripción del Proyecto 5...</p>
		</div>
    </div>
	
	<h2>Jam Games</h2>
	<p> Some of the game jams I've participated </p>
	 <div class="grid-container">
		<div class="grid-item">
            <h3>Creation </h3>
            <img src="{{ site.baseurl }}/assets/images/creation.jpg" alt="Imagen del Proyecto 5">
            <p>Descripción del Proyecto 5...</p>
			<a href="https://onesixgames.itch.io/creation" target="_blank" class="project-link">Check it on Itch.io</a>
        </div>
		<div class="grid-item">
            <h3>Greedy Merchants </h3>
            <img src="{{ site.baseurl }}/assets/images/greedymerchants.png" alt="Imagen del Proyecto 5">
            <p>Descripción del Proyecto 5...</p>
			<a href="https://jlreymendez.itch.io/greedy-merchants" target="_blank" class="project-link">Check it on Itch.io</a>
        </div>
    </div>	
	
</section>

<section class="section-container" id="courses">
    <h2>Courses</h2>
    <p>This are some of the online courses I've been doing: </p>
		
	<div class="grid-container">
        <div class="grid-item">
            <h3>UE5 - Gameplay Ability System </h3>
            <img src="{{ site.baseurl }}/assets/images/image_test.jpg" alt="Imagen del Proyecto 4">
            <p>An ARPG implemented with GAS in UE5. (In progress) </p>
			<a href="https://github.com/AtlasArg/Gameplay_Ability_System_Course" target="_blank" class="project-link">Check it on Github</a>
        </div>
        <div class="grid-item">
            <h3>Combat System for RPG in Unity 3D </h3>
            <img src="{{ site.baseurl }}/assets/images/image_test.jpg" alt="Imagen del Proyecto 5">
            <p>Descripción del Proyecto 5...</p>
			<a href="https://github.com/AtlasArg/u_c_rpg" target="_blank" class="project-link">Check it on Github</a>
        </div>
        <div class="grid-item">
            <h3>Professional Game Development in C++ and Unreal Engine </h3>
            <img src="{{ site.baseurl }}/assets/images/image_test.jpg" alt="Imagen del Proyecto 5">
            <p>Descripción del Proyecto 5...</p>
			<a href="https://github.com/AtlasArg/u_c_rpg" target="_blank" class="project-link">Check it on Github</a>
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
