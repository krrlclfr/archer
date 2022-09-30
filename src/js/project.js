$(document).ready(function () {

    $('#card-item').hover(
        function(){
            $('#btn-view').removeClass('d-none');
            $('#card-item').css('cursor', 'pointer');
        },function(){
            $('#btn-view').addClass('d-none');
        }
    )

    $('#card-item-memestagram').hover(
        function(){
            $('#btn-view-memestagram').removeClass('d-none');
            $('#card-item-memestagram').css('cursor', 'pointer');
        },function(){
            $('#btn-view-memestagram').addClass('d-none');
        }
    )


    $('#card-item-rv').hover(
        function(){
            $('#btn-view-rv').removeClass('d-none');
            $('#card-item-rv').css('cursor', 'pointer');
        },function(){
            $('#btn-view-rv').addClass('d-none');
        }
    )
    $('#card-item-crud').hover(
        function(){
            $('#btn-view-crud').removeClass('d-none');
            $('#card-item-crud').css('cursor', 'pointer');
        },function(){
            $('#btn-view-crud').addClass('d-none');
        }
    )

    $('#card-item-calculator').hover(
        function(){
            $('#btn-view-calculator').removeClass('d-none');
            $('#card-item-calculator').css('cursor', 'pointer');
        },function(){
            $('#btn-view-calculator').addClass('d-none');
        }
    )


    $('#card-item-arcs').hover(
        function(){
            $('#btn-view-arcs').removeClass('d-none');
            $('#card-item-arcs').css('cursor', 'pointer');
        },function(){
            $('#btn-view-arcs').addClass('d-none');
        }
    )


    $('#card-item-fr').hover(
        function(){
            $('#btn-view-fr').removeClass('d-none');
            $('#card-item-fr').css('cursor', 'pointer');
        },function(){
            $('#btn-view-fr').addClass('d-none');
        }
    )

    $('#card-item-system').hover(
        function(){
            $('#btn-view-system').removeClass('d-none');
            $('#card-item-system').css('cursor', 'pointer');
        },function(){
            $('#btn-view-system').addClass('d-none');
        }
    )

    $('#card-item-bms').hover(
        function(){
            $('#btn-view-bms').removeClass('d-none');
            $('#card-item-bms').css('cursor', 'pointer');
        },function(){
            $('#btn-view-bms').addClass('d-none');
        }
    )

    $('#card-item-rps').hover(
        function(){
            $('#btn-view-rps').removeClass('d-none');
            $('#card-item-rps').css('cursor', 'pointer');
        },function(){
            $('#btn-view-rps').addClass('d-none');
        }
    )

    $('#card-item-inventory').hover(
        function(){
            $('#btn-view-inventory').removeClass('d-none');
            $('#card-item-inventory').css('cursor', 'pointer');
        },function(){
            $('#btn-view-inventory').addClass('d-none');
        }
    )

    $('#nav-home-tab').click(function(){
      $('#card-item-rps').fadeIn().removeClass('d-none');
      $('#card-item-system').fadeIn().removeClass('d-none');
      $('#card-item-fr').fadeIn().removeClass('d-none');
      $('#card-item-calculator').fadeIn().removeClass('d-none');
      $('#card-item-arcs').fadeIn().removeClass('d-none');
      $('#card-item-bms').fadeIn().removeClass('d-none');
      $('#card-item-crud').fadeIn().removeClass('d-none');
      $('#card-item-rv').fadeIn().removeClass('d-none');
      $('#card-item').fadeIn().removeClass('d-none');
      $('#card-item-inventory').fadeIn().removeClass('d-none');
      $('#card-item-memestagram').fadeIn().removeClass('d-none');

      $('#nav-home-tab').addClass('project-active');
      $('#nav-web-app-tab').removeClass('project-active');
      $('#nav-desktop-app-tab').removeClass('project-active');
      $('#nav-program-tab').removeClass('project-active');
    })

    $('#nav-web-app-tab').click(function(){
      $('#card-item-rps').fadeOut().addClass('d-none');
      $('#card-item-system').fadeOut().addClass('d-none');
      $('#card-item-fr').fadeOut().addClass('d-none');
      $('#card-item-calculator').fadeOut().addClass('d-none');
      $('#card-item-arcs').fadeOut().addClass('d-none');
      $('#card-item-bms').fadeIn().removeClass('d-none');
      $('#card-item-crud').fadeIn().removeClass('d-none');
      $('#card-item-rv').fadeIn().removeClass('d-none');
      $('#card-item').fadeIn().removeClass('d-none');
      $('#card-item-inventory').fadeIn().removeClass('d-none');
      $('#card-item-memestagram').fadeIn().removeClass('d-none');

      $('#nav-home-tab').removeClass('project-active');
      $('#nav-web-app-tab').addClass('project-active');
      $('#nav-desktop-app-tab').removeClass('project-active');
      $('#nav-program-tab').removeClass('project-active');
    })

    $('#nav-desktop-app-tab').click(function(){
      $('#card-item-rps').fadeOut().addClass('d-none');
      $('#card-item-system').fadeIn().removeClass('d-none');
      $('#card-item-fr').fadeIn().removeClass('d-none');
      $('#card-item-calculator').fadeIn().removeClass('d-none');
      $('#card-item-arcs').fadeIn().removeClass('d-none');
      $('#card-item-bms').fadeOut().addClass('d-none');
      $('#card-item-crud').fadeOut().addClass('d-none');
      $('#card-item-rv').fadeOut().addClass('d-none');
      $('#card-item').fadeOut().addClass('d-none');
      $('#card-item-inventory').fadeOut().addClass('d-none');
      $('#card-item-memestagram').fadeOut().addClass('d-none');

      $('#nav-home-tab').removeClass('project-active');
      $('#nav-web-app-tab').removeClass('project-active');
      $('#nav-desktop-app-tab').addClass('project-active');
      $('#nav-program-tab').removeClass('project-active');

    })

    $('#nav-program-tab').click(function(){
      $('#card-item-rps').fadeIn().removeClass('d-none');
      $('#card-item-system').fadeOut().addClass('d-none');
      $('#card-item-fr').fadeOut().addClass('d-none');
      $('#card-item-calculator').fadeOut().addClass('d-none');
      $('#card-item-arcs').fadeOut().addClass('d-none');
      $('#card-item-bms').fadeOut().addClass('d-none');
      $('#card-item-crud').fadeOut().addClass('d-none');
      $('#card-item-rv').fadeOut().addClass('d-none');
      $('#card-item').fadeOut().addClass('d-none');
      $('#card-item-inventory').fadeOut().addClass('d-none');
      $('#card-item-memestagram').fadeOut().addClass('d-none');  

      $('#nav-home-tab').removeClass('project-active');
      $('#nav-web-app-tab').removeClass('project-active');
      $('#nav-desktop-app-tab').removeClass('project-active');
      $('#nav-program-tab').addClass('project-active');

  })
  

});