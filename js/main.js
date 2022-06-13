$('.slick123').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
        }
      },
     
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  const questions = document.querySelectorAll('.question-answer__accordion')
  questions.forEach((questions__accordions) => 
  questions__accordions.addEventListener('click', () => {
      
    questions__accordions.parentNode.classList.toggle('active')
      
      // if(question.parentNode.classList.contains('active')){
      //     question.parentNode.classList.toggle('active')
      // } else {
      //     questions.forEach((question) => question.parentNode.classList.remove('active'))
      //     question.parentNode.classList.add('active')
      // }
    })
  )