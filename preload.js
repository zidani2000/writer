const { app } = require("electron")
window.initialize = function () { this.document.getElementById("writer").classList.add("FIT") , this.document.getElementById("menu.fonts.sans").style.fontFamily = "'Helvetica Neue', Lato, 'TeX Gyre Adventor', Sans-Serif, 'Unifont LANGDEV'" , this.document.getElementById("menu.fonts.serif").style.fontFamily = "Junicode, Cardo, 'TeX Gyre Bonum', Serif, 'Unifont LANGDEV'" , this.document.getElementById("menu.fonts.monospace").style.fontFamily = "'M+ 1m', 'Courier Prime', 'TeX Gyre Cursor', Monospace, 'Unifont LANGDEV'" , this.document.getElementById("menu.fonts.cursive").style.fontFamily = "'Apple Chancery', 'ITC Zapf Chancery', 'Monotype Corsiva', 'TeX Gyre Chorus', Cursive, 'Unifont LANGDEV'" }
