function getAMPM(datum) {
    const stunde = datum.getHours();
    const ampm = stunde >= 12 ? 'PM' : 'AM';
    return ampm;
}

const date1 = new Date(1999, 10, 5, 15);
const date2 = new Date();
const date3 = new Date(2019, 12, 3, 12); 
const date4 = new Date(2000, 1, 1, 11); 

console.log(getAMPM(date1)); 
console.log(getAMPM(date2)); 
console.log(getAMPM(date3)); 
console.log(getAMPM(date4)); 