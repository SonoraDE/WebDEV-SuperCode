output = document.querySelector(".date-output");
date1 = new Date("September 2, 2019 09:00:00");
date2 = new Date(0);
date3 = new Date(31556908800);  
date4 = new Date(86400000);

output.innerHTML = `
<div>
<p>${date1}</p>
<p>${date2}</p>
<p>${date3}</p>
<p>${date4}</p>
</div>`