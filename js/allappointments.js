getData();

  async function getData(){
       const response= await fetch('http://54.227.122.144:8080/api/all/appointments')
       console.log(response);
       const data= await response.json();
       console.log(data);
       length=data.data.length;
       console.log(length);
       var temp="";
       for(i=0;i<length;i++)
       {
          temp+="<tr>";
          temp+="<td>"+data.data[i].id+"</td>";
          temp+="<td>"+data.data[i].fullname+"</td>";
          temp+="<td>"+data.data[i].email+"</td>";
          temp+="<td>"+data.data[i].message+"</td>";


       }

    document.getElementById("data").innerHTML=temp;
     }
