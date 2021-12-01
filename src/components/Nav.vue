<template>
    

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Just A Counter</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
       
        
    </ul>
    <ul class="nav navbar-nav justify-content-end">
 <router-link to="/" tag="li"><a class="nav-link">SYNC</a></router-link>
        <router-link to="/about" tag="li"><a class="nav-link">ASSYNC</a></router-link>
</ul>
  </div>
</nav>
</template>