console.log('Object Literals');

const cinema={
    title: 'The Avengers',
    year: 2012,
    genre: "Action, Sci-Fi, Thriller",
    // cast: ["Robert Downey Jr, Chris Evans"],
    cast: {main_role: "Robert Downey Jr" ,  others: "Chris Evans"},
    getDetails: function(){
        console.log(`Title: ${cinema.title}\n Year: ${cinema.year}\n Gener: ${cinema.genre}\n Cast: ${cinema.cast}\n`);
    },

    getCinemaDetails: function(details){
        console.log(cinema[details]);
    }
}

console.log(cinema.title);
cinema.getDetails();

const details="year";
cinema.getCinemaDetails(details);

console.log(cinema.cast.main_role);


function main(){

    const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      street: "123 Main St",
      zipCode: "10001"
    }
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: '0101',
      zipCode: "10011"
    }
  };
  
  function getUserDetail(profile, keys) {
    // Implement your function here
       let value = profile;
      
        for (const key of keys) {
          if (!(key in value)) {
            return "Not available";
          }
      
          value = value[key];
        }
      
        return value;
      }


  console.log(getUserDetail(userProfile, ["address", "city"]));
  // Usage: should return "New York"
  //do not modify the return statement
return getUserDetail;
}

main();


console.log("********************")