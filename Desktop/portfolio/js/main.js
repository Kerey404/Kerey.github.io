// ===== Navbar scroll effect =====
$(window).on("scroll", function () {
  $(".navbar").toggleClass("scrolled", $(this).scrollTop() > 50);
});

// ===== Update footer year =====
$("#year").text(new Date().getFullYear());

// ===== Contact form submission =====
$("form").on("submit", function (e) {
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent successfully.");
  $(this).trigger("reset");
});

// ===== Modal interaction =====
$(".open-modal").on("click", function () {
  // Get title and description from data attributes
  const title = $(this).data("title");
  const desc = $(this).data("desc");

  // Insert data into modal
  $("#modalTitle").text(title);
  $("#modalDesc").text(desc);

  // Show modal with fade animation
  const modal = new bootstrap.Modal($("#projectModal"));
  modal.show();
});
