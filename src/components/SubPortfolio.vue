<template>
     <!-- Modal 2 -->
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto" v-for="(obj,key) in SubPortfolioJSON" :key="key">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">{{ obj.title }}</h2>
                  <p class="item-intro text-muted">{{ obj.titlecaption }}</p>
                  <img class="img-fluid d-block mx-auto" src="img/JScalc.jpg" alt="">
                  <p>Showing the basics of web application design, the app was tested in a codepen editor before
                    using vs code to better understand javascript, following a course from WebDev Simplified. I've 
                    used this guide to better understand modern JavaScript practices.
                  </p>
                  <ul class="list-inline">
                    <li>Date: January 2020</li>
                    <li>Language: JavaScript</li>
                    <li>Category: Web app</li>
                    <li>Learn: <a href="https://www.youtube.com/watch?v=j59qQ7YWLxw&t=80s">WebDev Simplified</a></li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fas fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        SubPortfolioJSON: [
            {
                img:'',
                title:'Calculator',
                titlecaption:'Vanilla JavaScript Calculator',
                details:''
            },
            {
                img:'',
                title:'Vue Website',
                titlecaption:'New Vue website',
                details:''
            },
            {
                img:'',
                title:'Mean stack',
                titlecaption:'Full stack application',
                details:''
            },

        ]
    })
}
</script>
<style scoped>

</style>