/*
 * Script that helps you to generate an updated font awesome icons enum.
 *
 * - Just go to: http://fortawesome.github.com/Font-Awesome/
 * - Open the browser console
 * - paste this code and execute
 * - thats it
 *
 * @author Carlos A Becker
 */


var i = 'fa-';
var uniqueClasses = new Set();
$('#icons i').each(function () {
    var c = $(this).attr('class');
    c = c.substr(c.indexOf(i) + i.length);
    uniqueClasses.add(c);
});

var allclasses = Array.from(uniqueClasses);
allclasses.sort();

$(allclasses).each(function () {
    var c = this;
    console.log(c.replaceAll("-", "_").toUpperCase() + '("' + c + '"),');
});

