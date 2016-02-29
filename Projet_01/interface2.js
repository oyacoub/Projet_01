var etat = {
  "inbox": [
    {
      "from": "AF22111212232211122",
      "date": "2015 12 28 20:15:42",
      "msg": "msg recu 1" },
    {
      "from": "AF22111212232211122",
      "date": "2016 01 03 10:15:31",
      "msg": "msg recu 2" },
      {
        "from": "90221F212A4200001AA",
        "date": "2016 01 03 10:15:31",
        "msg": "msg recu 3" }
                            ],

  "outbox": [
    {
      "to": "AF22111212232211122",
      "date": "2016 01 12 20:15:42",
      "msg": "ceci est le message envoyé numero 1" } ,
      {
        "to": "90221F212A4200001AA",
        "date": "2016 01 12 20:15:42",
        "msg": "ceci est le message envoyé numero 2" }
    ],

      "yp":

      {
          "AF22111212232211122": {"name": "Jean Fanchon"},
          "90221F212A4200001AA": {"name": "Bob"} }

};
$("#inbox").click( function (){
etat.inbox.forEach( function(msg,x){
  if (x<2 ) {
  $("#showinbox").append(
    $("<h5>").text(msg.msg));
    $("#showinbox").append(
      $("<h5>").text(etat.yp[msg.from].name));
      $("#showinbox").append(
        $("<h5>").text(msg.date));

}
});
});
$("#outbox").click( function (){
etat.outbox.forEach( function(msg){
  $("#showoutbox").append(
    $("<h3>").text(msg.date));

    $("#showoutbox").append(
      $("<h3>").text(etat.yp[msg.to].name));
      $("#showoutbox").append(
        $("<h3>").text(msg.msg));

});
});

$("#contact").click( function (){


etat.outbox.forEach( function(msg){
    $("#contact_section").append(
    $("<h5>").text(etat.yp[msg.to].name));
  });
});
$("#b4").click(function(){
  etat.outbox.append({"to":$("#@").text(),"msg":$("#msg").text(),"date":new Date()});
});
