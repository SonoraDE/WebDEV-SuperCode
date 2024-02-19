output = document.querySelector(".date-output");
let date = new Date("July 7, 2222 17:25:00");
let date2 = new Date("March 10, 2074 08:45:00");
let date3 = new Date("January 14, 2401 01:55:00");
let date4 = new Date("August 17, 2057 21:15:00");
let date5 = new Date("October 29, 1999 11:25:00");
date.setDate(15);
date2.setDate(19);
date3.setDate(22);
date4.setDate(25);
date5.setDate(29);

output.innerHTML = `
<div>
<p>${date}</p>
<p>${date2}</p>
<p>${date3}</p>
<p>${date4}</p>
<p>${date5}</p>
</div>`