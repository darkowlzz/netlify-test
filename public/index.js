$(document).ready(function () {

  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  dataURL = "config2.json"
  fetch(dataURL)
    .then(function (response) { return response.json(); })
    .then(function (data) {

      // Set page title.
      document.title = data["title"]

      var jumboTemplate = $("#jumbo-hb").html()
      var jumboTemplateScript = Handlebars.compile(jumboTemplate)
      jumboHtml = jumboTemplateScript(data)
      $("#jumbo-div").append(jumboHtml)

      $("#jumbo").css("background", data["primary-background"])
      $("body").css("background", data["secondary-background"])

      // Iterate through the catalog and create entries for all the items per
      // category.
      catalog = data["catalog"]
      for (var catIndex = 0; catIndex < catalog.length; catIndex++) {
        category = catalog[catIndex]

        var categoryTemplate = $("#list-category-hb").html()
        var categoryTemplateScript = Handlebars.compile(categoryTemplate, { noEscape: true })
        categoryHtml = categoryTemplateScript(category)
        $("#listing").append(categoryHtml)
      }

      // Footer
      var footerTemplate = $("#footer-hb").html()
      var footerTemplateScript = Handlebars.compile(footerTemplate)
      footerHtml = footerTemplateScript(data)
      console.log("FOOTER:", footerHtml)
      $("#footer").append(footerHtml)

      // Add click event on all the images for preview.
      var imgs = $(".card-img-top")
      imgs.each(function () {
        $(this).click(function () {
          modal.style.display = "block"
          modalImg.src = this.src
          captionText.innerHTML = this.alt
        })
      })
    });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
})
