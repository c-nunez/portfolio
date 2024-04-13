// $('#theme-mode').on('click', function() {
//     if($('html').attr('data-bs-theme') == 'light'){
//         $('html').attr('data-bs-theme', 'dark');
//         $('#theme-mode').text('☀️');

//     } else if($('html').attr('data-bs-theme') == 'dark'){
//         $('html').attr('data-bs-theme', 'light');
//         $('#theme-mode').text('🌙');
//     }
// });

function splitTextIntoSpans(target) {
  let elements = document.querySelectorAll(target);
  elements.forEach((element) => {
    element.classList.add("split-text");
    let text = element.innerText;
    let splitText = text
      .split(" ")
      .map(function (word) {
        let char = word
          .split("")
          .map((char) => {
            return `<span class="split-char">${char}</span>`;
          })
          .join("");
        return `<div class="split-word">${char}&nbsp</div>`;
      })
      .join("");

    element.innerHTML = splitText;
  });
}

splitTextIntoSpans("#name");
