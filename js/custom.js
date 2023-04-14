document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("home")) {
      let postBlocks = document.querySelectorAll(".post-block");
      postBlocks.forEach(function (postBlock) {
        postBlock.classList.add("home-post-block");
      });
    }
  });
  