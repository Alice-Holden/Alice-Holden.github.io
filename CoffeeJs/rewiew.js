$(document).ready(function(){
  $("#formR").submit(function(){
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function(){
      alert("Thank you for the application! We will call you soon.");
    });
    return false;
  });
});