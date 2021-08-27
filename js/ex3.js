function update(picker, selector) {
    document.querySelector(selector).style.background = picker.toBackground()
}

// triggers 'onInput' and 'onChange' on all color pickers when they are ready
jscolor.trigger('input change');

document.getElementById('clickCopy').addEventListener('click', execCopy);
function execCopy() {
  document.querySelector("#input").select();
  document.execCommand("copy");
}