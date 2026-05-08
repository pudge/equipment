function footer(el) {
  donate(el)
  lastModified(el)
}

function donate(el) {
  $(el).append(
    `<div class="donate">`
      + `<a href="http://paypal.me/pudgenet">`
        + `<img src="/images/paypal.png" alt="PayPal" title="PayPal" /></a>`
      + `<a href="https://venmo.com/pudgenet">`
        + `<img src="/images/venmo.png" alt="Venmo" title="Venmo" /></a>`
      + `<div class="donate_text">Donate!</div>`
    + `</div>`
  )
}

function lastModified(el) {
  $(el).append(
    `<div class="lastmod">Last modified <span id="lastmod">2024-01-01</span></div>`
  )
}
