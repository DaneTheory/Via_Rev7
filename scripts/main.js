$(document).ready(function() {

 var $this = $("loader-wrapper");

 $this.fadeOut('fast', function(){ $this.next().fadeIn('slow'); });

});





$(document).ready(function() {
  $(this).css('overflow','hidden');

  var $socialFind = $(this).find('.homesocial');

    $(".mainPhotoWrapper").hover(function() {

        event.preventDefault();

        $socialFind.slideDown(200);

    }, function() {
        $socialFind.slideUp(500).stop(true,true);
    });

});



$(document).ready(function(){

    $('a.back').click(function(){

      window.history.back();

    });
});



// $(document).ready(function() {
//
//     $('body').css('display', 'none');
//
//     $('body').fadeIn(1000);
//
//
//
//     $('.mainPhotoWrapper').click(function() {
//
//       event.preventDefault();
//
//       //newLocation = this.href;
//
//       $('body').fadeOut(1000);
//
//     });
//
//       // function newpage() {
//       //
//       //   window.location = newLocation;
//       //
//       // }
//
// });

var pictureOffset = 0;


$(document).ready(function(){
    showNewPics( pictureOffset, 12);


    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            showNewPics( pictureOffset, 4);
       }
    })
});

function showNewPics( offset, limit)
{
    var photos = $(".mainPhotoWrapper");
    for( var i = offset; i < (offset + limit); i++){
        $(photos[i]).show( 0 , function(){
            initIsotopes();
        });
    }
    updateOffset(limit);

}

function updateOffset(offset)
{
    pictureOffset += offset;
}

function initIsotopes()
{
    $("#windowContainer").isotope({
        filter: '*',
        itemSelector : '.mainPhotoWrapper',
       layoutMode: 'masonry',
        masonry: {
          columnWidth: 0,
          gutter: 0,
        },
        percentPosition: true,
    });

    var $stampElem = $container.find('.stamp');

}


var $container = $('#windowContainer').imagesLoaded( function() {
var $displayDefaultArtist = $("[data_display=default]");

//setTimeout(function(){
      $("#windowContainer").isotope({
        filter: '*',
        itemSelector : '.mainPhotoWrapper',
       layoutMode: 'masonry',
        masonry: {
          columnWidth: 0,
          gutter: 0,
        },
        percentPosition: true,
    });

    //var $stampElem = $container.find('.stamp');
    //$container.isotope( 'layout' );


  //}, 1000);
	});



  $('nav.menu a').click(function(){
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    return false;
  });

$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);

});

//  $(document).ready(function(){
//     $('.mainPhotoWrapper').hover(
//       function() {
//         $(this).css('overflow','hidden');
//         var $imgFind = $(this).find('.mainPhoto');
//         var $dataFind = $(this).find('.infoOverlay');
//         var $nameFind = $(this).find('.artistName');
//         var $likeFind = $(this).find('.tumblrLikeButton');
//         // $imgFind.toggleClass('transition');
//         $dataFind.toggleClass('animated fadeIn');
//         $nameFind.toggleClass('animated fadeIn');
//         $likeFind.toggleClass('animated fadeIn');
//     })
// });

// $(document).ready(function() {
//     $('.mainPhotoWrapper').hover(
//         function () {
//             $('.homesocial').animate({ "top": "-=20px" }, "slow" );
//         },
//         function () {
//             $('.homesocial').animate({ "top": "+=20px" }, "slow" );
//         }
//      );
//  });







$(document).ready(function(){

(function() {

	var bodyEl = document.body,
		content = document.querySelector( '#windowContainer' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();

});
