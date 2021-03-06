async function weeklyreport(){ 
    
    console.log("weekly report running");

    const response = await fetch('/api/weekly-report', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/api/weekly-report');
    } else {
        alert(response.statusText); 
    }

}

document.getElementById('weeklyreport').addEventListener('click', weeklyreport);
document.getElementById('weekly-report').addEventListener('click', weeklyreport);

