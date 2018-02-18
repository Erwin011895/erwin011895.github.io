
//routing scripts
const ABOUT_ME = { template: '#about-me' };
const MY_EXPERIENCES = { template: '#experiences' };
const CONTACT_ME = { template: '#contact-me' };

const routes = [
  {path: '/', component: ABOUT_ME},
  {path: '/experiences', component: MY_EXPERIENCES},
  {path: '/contact-me', component: CONTACT_ME},
]

const router = new VueRouter({
  routes: routes
});

//app instance
var app = new Vue({
  router,
  data: {
    message: "asd"
  }
}).$mount('#app');

