var Setup = {
  HSTabs: function() {
    $.HSCore.components.HSTabs.init('[role="tablist"]');
  }
};

$.HSCore.components.HSCarousel.init(".js-carousel");
$.HSCore.components.HSCubeportfolio.init(".cbp");
$.HSCore.components.HSGoTo.init(".js-go-to");
$.HSCore.components.HSHeader.init($("#js-header"));
$.HSCore.components.HSPopup.init(".js-fancybox");
$.HSCore.components.HSRating.init($(".js-rating"), { spacing: 2 });
$.HSCore.components.HSScrollNav.init($("#js-scroll-nav"), { duration: 700 });
$.HSCore.helpers.HSHamburgers.init(".hamburger");

$(".js-mega-menu").HSMegaMenu({
  event: "hover",
  pageContainer: $(".container"),
  breakpoint: 991
});

function main() {
  Setup.HSTabs();

  window.addEventListener("resize", function() {
    let id = null;

    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(Setup.HSTabs, 200);
  });
}

main();
