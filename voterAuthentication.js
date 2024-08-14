function voterAuthentication(people){
    let age = prompt("Please enter your age:");
    age = Number(age);
    
    console.log('Filterd voters names of age: '+ age);
    if(age < 18){
        alert('You are not eligble for voting');
        return [];
    }

    let eligibleVoters = people.filter(voter => voter.age === age);

    eligibleVoters.forEach(voter => console.log(voter));

    return eligibleVoters;
}

let people = [
    {name: 'Khuzaima', age: 22, id: 1234},
    {name: 'Irfan', age: 23, id: 5678},
    {name: 'Hamza', age: 22, id: 9101},
]
voterAuthentication(people);