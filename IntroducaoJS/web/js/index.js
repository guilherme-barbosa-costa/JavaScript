/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.addEventListener("DOMContentLoaded", function(){
    
  const button = document.getElementById("btnDados");
  const email = document.getElementById("inputEmail");

  button.addEventListener("click",function (){
    alert(email.value);
  });
});

