let t = gsap.timeline();
let icons = document.querySelector(".three1");
let menuBar = document.getElementById("menu_bar");
let menu_icon = document.querySelector(".menuIcon");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let m_icons=document.querySelector('.m_one14');
let a=document.getElementById('pagalworld.com')


gsap.from(".sub_title h4", {
  y: 50,
  delay: 0.3,
  duration: 0.6,
  stagger: 0.3,
  opacity: 0,
});
gsap.from(".sub_title2", {
  scale:0,
});
gsap.from(".m_one14",{
  scale:0,
  delay:0.6,
  duration:0.6
})

gsap.from(".about .title", {
  scale:0,
  scrollTrigger: {
    trigger: ".about .title",
    scroller: ".two",
    start: "top 96%",
    end: "top 60%",
    scrub: true,
  },
});

gsap.from(".about_title", {
  scale:0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".skills",
    scroller: ".two",
    start: "top 120%",
    end: "top 60%",
    scrub: true,
  },
});
gsap.from(".about_sub_title", {
  scale:0,
  scrollTrigger: {
    trigger: ".about_sub_title",
    scroller: ".two",
    start: "top 96%",
    end: "top 60%",
    scrub: true,
  },
});

gsap.from(".skills .title", {
  scale:0,
  scrollTrigger: {
    trigger: ".skills .title",
    scroller: ".two",
    start: "top 75%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".skills_title", {
  scale:0,
  scrollTrigger: {
    trigger: ".skills_title",
    scroller: ".two",
    start: "top 75%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".skills_icons", {
  scale:0,
  duration: 3,
  scrollTrigger: {
    trigger: ".skills_icons",
    scroller: ".two",
    start: "top 75%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".portfolio .title", {
  scale:0,
  scrollTrigger: {
    trigger: ".portfolio .title",
    scroller: ".two",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});

gsap.from(".portfolio_title", {
  scale:0,
  scrollTrigger: {
    trigger: ".portfolio_title",
    scroller: ".two",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});
gsap.from(".portfolio_work", {
  scale:0,
  scrollTrigger: {
    trigger: ".portfolio_work",
    scroller: ".two",
    start:"top 70%",
    end:"top 40%",
    scrub: true,
  }
});
gsap.from(".certificate .title", {
  scale:0,
  scrollTrigger: {
    trigger: ".certificate .title",
    scroller: ".two",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});

gsap.from(".certificate_title", {
  scale:0,
  scrollTrigger: {
    trigger: ".certificate_title",
    scroller: ".two",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});
gsap.from(".certificate_work", {
  scale:0,
  scrollTrigger: {
    trigger: ".certificate_work",
    scroller: ".two",
    start: "top 90%",
    end: "top 60%",
    scrub: true,
  }
});


function sendEmail() {
  // Replace 'your-subject' with the desired subject for the email
  var subject = "we find your profile Intreasting. I want to hire you.";

  // Replace 'your-body' with the desired body text for the email
  var body = "Hello Naitik kumar,\n\nI'm interested in hiring you.";

  // Concatenate the subject and body with the 'mailto:' link
  var mailtoLink = "mailto:naitikkumarofficial2408@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // Open the user's email client with the mailto link
  window.location.href = mailtoLink;
}
