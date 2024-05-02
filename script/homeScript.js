const accordians = document.querySelectorAll(".accordian");
accordians.forEach((accordian) => {
  const icon = accordian.querySelector(".icon");
  const answer = accordian.querySelector(".answer");

  accordian.addEventListener("click", (e) => {
    if (icon.classList.contains("active")) {
      // console.log("yes contain ");
      answer.style.display = "none";
      console.log(e);
      icon.classList.remove("active");
      // console.log("active removed");
    } else {
    //   console.log("donot  contain ");
      answer.style.display = "block";
      icon.classList.add("active");
    //   console.log(" active added now");
    }
  });
});
