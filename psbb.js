
function psbb(numberOfFamiies, numberOfMembers) {

    let families = parseInt(numberOfFamiies)
    let membersArray = numberOfMembers.split(" ").map(e => parseInt(e))
    
    if (families !== membersArray.length) return -1;

    let buses = 0; 

    while (membersArray.length) {
        buses++; 
        let busCapacity = 4; 
        let familyCount = 0; 

        for (let j = 0; j < membersArray.length; j++) {
            if (membersArray[j] <= busCapacity && familyCount < 2) {
                busCapacity -= membersArray[j]; 
                familyCount++; 
                membersArray.splice(j, 1); 
                j--; 
            }
        }
    }

    return buses;
}