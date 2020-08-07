"use strict";
$(document).foundation();


const api_key = "10223990622099685";
function inputListener() {
    $("form").on("submit", function (e) {
        e.preventDefault();
        $('.preloader').html(`<i class="fas fa-circle-notch fa-spin"></i>`)
        let search = $("#search").val().toLowerCase();
        console.log(search) 
        pullData(search);
    });
}
function pullData(search) {
    console.log(`The search value: ${search}.`),
        console.log(`GET REQUEST TO: https://superheroapi.com/api/${api_key}/search/${search}`),
        fetch(`https://superheroapi.com/api.php/${api_key}/search/${search}`)
            .then((e) => e.json())
            .then((e) => displayResults(e))
            .catch((e) => console.log(e));
}
function displayResults(e) {
    let searchResults = $(".results")
    searchResults.empty()

    console.log(e);
    for (let i = 0; i < e.results.length; i++)  {

      let html = `
      <div data-toggler data-animate="fade-in fade-out" class="grid-x grid-padding-x">
        <div class="large-12 medium-12 cell">
  
          <div class="grid-x grid-padding-x">
            <div class="large-12 cell">
              <div class="primary callout">
                <ul>
                  <li>
                    <img class="character-img" src="${e.results[i].image.url}">
                  </li>
                  <li>
                    <h3><strong>${e.results[i].name}</strong></h3>
                  </li>
                  <li>
                  <p id="alignment">Alignment: <strong>${e.results[i].biography.alignment}</strong></p>
                  </li>
                  <li>
                    <p>First Appearance: <strong>${e.results[i].biography["first-appearance"]}</strong></p>
                    <p>Group Affliation: <strong>${e.results[i].connections["group-affiliation"]}</strong></p>
                  </li>
                  <li>
                  <div class="custom-progress-container">
                  <h5><strong>Power Stats<strong></h5>
                  <div class="progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                  <span class="progress-meter" style="width: ${e.results[i].powerstats['combat']}%">
                    <span class="progress-meter-text">Combat: ${e.results[i].powerstats['combat']}%</span>
                  </span>
                </div>
                <div class="progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                  <span class="progress-meter" style="width: ${e.results[i].powerstats['durability']}%">
                    <span class="progress-meter-text">Durability: ${e.results[i].powerstats['durability']}%</span>
                  </span>
                </div>
                <div class="progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                  <span class="progress-meter" style="width: ${e.results[i].powerstats['intelligence']}%">
                    <span class="progress-meter-text">Intelligence: ${e.results[i].powerstats['intelligence']}%</span>
                  </span>
                </div>
                <div class="progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                  <span class="progress-meter" style="width: ${e.results[i].powerstats['power']}%">
                    <span class="progress-meter-text">Power: ${e.results[i].powerstats['power']}%</span>
                  </span>
                </div>
                <div class="progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                  <span class="progress-meter" style="width: ${e.results[i].powerstats['speed']}%">
                    <span class="progress-meter-text">Speed: ${e.results[i].powerstats['speed']}%</span>
                  </span>
                </div>
                <div class="progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                  <span class="progress-meter" style="width: ${e.results[i].powerstats['strength']}%">
                    <span class="progress-meter-text">Strength: ${e.results[i].powerstats['strength']}%</span>
                  </span>
                </div>
</div>
  </div>
</div>
                  </li>
               </ul>
            </div>
          </div>
  </div>
      `
      $('.preloader').remove();
        searchResults.append(`${html}`).fadeIn('slow');
    }
}


$(function () {
    inputListener();

});