//https://northwind.vercel.app/api/customers/




// axios("https://northwind.vercel.app/api/customers/").then(function (respons) {

//   for(let i=0 ;i<respons.data.length; i++) {
//           const tBodyElement=document.querySelector("tbody")
//
//          const trElement=document.createElement("tr");
//          const IdElement=document.createElement("td");
//          const CompanyNameElement=document.createElement("td");
//          const ContactNameElement=document.createElement("td");
//          const ContactTitleElement=document.createElement("td");
//          const AddressNameElement=document.createElement("td");
//          IdElement.textContent=respons.data[i].id;
//          CompanyNameElement.textContent=respons.data[i].companyName;
//          ContactNameElement.textContent=respons.data[i].contactName;
//          ContactTitleElement.textContent=respons.data[i].contactTitle;  
//          AddressNameElement.textContent=(`${respons.data[i].address.street},${respons.data[i].address.country}`);
//          trElement.append(IdElement,CompanyNameElement,ContactNameElement,ContactTitleElement,AddressNameElement);
//          tBodyElement.appendChild(trElement);

//       }
//   })

   
fetch("https://northwind.vercel.app/api/customers/")
.then(function(response){
return response.json();})
.then(function(data){
    for(let i=0 ;i<data.length; i++) {
                const tBodyElement=document.querySelector("tbody")        
                const trElement=document.createElement("tr");
                const IdElement=document.createElement("td");
                const CompanyNameElement=document.createElement("td");
                const ContactNameElement=document.createElement("td");
                const ContactTitleElement=document.createElement("td");
                const AddressNameElement=document.createElement("td");
                IdElement.textContent=data[i].id;
                CompanyNameElement.textContent=data[i].companyName;
                ContactNameElement.textContent=data[i].contactName;
                ContactTitleElement.textContent=data[i].contactTitle; 
                AddressNameElement.textContent=(`${data[i].address.street},${data[i].address.country}`);
                trElement.append(IdElement,CompanyNameElement,ContactNameElement,ContactTitleElement,AddressNameElement);
                tBodyElement.appendChild(trElement);
    }

    
})
