<template>
    <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Projects</h2>
            <h3 class="section-subheading ">Please find below some of my projects along with their source code.</h3>
          </div>
        </div>
        <div class="row">
          <!-- Comment -->
            <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="/assets/img/longon.jpg" alt="">
                </a>
                <div class="portfolio-caption">
                    <h4>{{ obj.caption }}</h4>
                    
                    <p class="text-muted">{{ obj.title }}</p>
                    <a v-bind:href="obj.link">Github Link</a>
                    <p class="text-muted">{{ obj.subtitle }}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        portfolioJSON: [
            {
                img: './assets/img/JScalc.jpg',
                caption: ' Calculator',
                title: 'Vanilla JS',
                subtitle:'Vanilla JS calculator',
                link:'https://madox357.github.io/Vanilla-JavaScript-Calculator/'
                
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Chat app',
                title: 'Vue',
                link:'https://bjs-chatapp.herokuapp.com/'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Weather App',
                title: 'Vue',
                link:'https://quirky-volhard-99400e.netlify.app/'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Food game',
                title: 'Random name generator',
                link:'https://madox357.github.io/Vue_Who_Pays_Bill/'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Window',
                title: 'Photography'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Book Store',
                title: 'MEAN stack project',
                link:''
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Limbu.co',
                title: 'Progressive Vue page',

            },
            {
                img: '',
                caption: 'Plain HTML',
                title: 'HTML page initial build',
                link: 'https://madox357.github.io/PlainHTML-CSS/'
            },
            {
                caption:'latest'
            }
        ]
    })
}
</script>

<style lang="css">

</style>


