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
          
            <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="">
                </a>
                <div class="portfolio-caption">
                    <h4>{{ obj.caption }}</h4>
                    
                    <p class="text-muted">{{ obj.title }}</p>
                    <p class="text-muted">{{ obj.link }}</p>
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
                title: 'Vanilla JS'
                
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Chat app',
                title: 'Vue'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Weather App',
                title: 'Vue'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Number Guesser',
                title: 'Python'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Window',
                title: 'Photography'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Bookstore',
                title: 'MEAN stack project' 
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Limbu.co',
                title: 'Progressive Vue page'
            },
            {
                img: '',
                caption: 'new',
                title: 'title'
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


