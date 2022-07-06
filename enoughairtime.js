function enoughairtime(projrctedUsage, available) {
    var call = 1.88;
    var data = 12;
    var sms = 0.75;
    let airtimeUsed = 0;
    var projectedAirtimeUsage = projrctedUsage.split(',');
    for ( var i=0; i< projectedAirtimeUsage.lenght; i++) {
if (projectedAirtimeUsage[i].startsWith('call')) {
    airtimeUsed += call;
} else if (projectedAirtimeUsage [i].startsWith('sms') ) {
    airtimeUsed += sms; 
} else if (projectedAirtimeUsage[i].startsWith('data') ) {
    airtimeUsed += data; 
}

    } 
    const sum = (airtimeUsed > available) ? 0 : available - airtimeUsed;
    return 'R' + sum.toFixed(2);
}