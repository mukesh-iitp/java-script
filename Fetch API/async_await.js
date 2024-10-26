const divEle = document.querySelector('.card-container');

// function getUser(url){
//   return fetch(url)
//   .then((response) => {
//     if(!response.ok){
//       throw new Error("Id doesn't match any data.");
//     }
//     return response.json();
//   })
// }

async function getDetails(id) {
  try{
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    // console.log(response);
    if(!response.ok)
      throw new Error("No data present");
    const userdata = await response.json();
    displayUser(userdata, 'beforeend');
  }catch(err){
    console.log(err);
  }
  


    // getUser(`https://dummyjson.com/users/${id}`)
    // .then((user) => {
    //   displayUser(user,"beforeend");
    //   return getUser(`https://dummyjson.com/users/${id-1}`);
    // })
    // .then((user) => {
    //   displayUser(user,"afterbegin", 'other');
    //   return getUser(`https://dummyjson.com/users/${id-2}`);
    // })
    // .then((user) => {
    //   displayUser(user,"afterbegin",'back');
    // })
    // .catch((err)=>{
    //   console.error(err);
    // });
}

function displayUser(data,pos,className=""){

  const card = `<div class="user-card ${className}">
    <img src=${data.image} alt="Profile Image" />
    <h3>${data.firstName}</h3>
    <h3>${data.lastName}</h3>
    <p class="email">${data.email}</p>
    <button class="btn">View Profile</button>
    </div>`;

    // divEle.innerHTML=card;
    divEle.insertAdjacentHTML(pos,card);    
}



getDetails(0);
