async function weeklyReport(){ 
    
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

document.getElementById('weeklyReport').addEventListener('click', weeklyReport);
document.getElementById('weekly-report').addEventListener('click', weeklyReport);


