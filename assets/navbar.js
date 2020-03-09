(function ($) { // Begin jQuery
  $(function () { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('#navbarDropdownButton').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      $(this).toggleClass("partial");
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.nav-dropdown').hide();
      $("#navbarDropdownButton").toggleClass("partial");
    });
  }); // end DOM ready
})(jQuery); // end jQuery