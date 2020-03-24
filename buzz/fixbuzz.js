 var numeros = 100;

for (var i = 1; i <= 100; i++) {

  if(i % 3 == 0)
  {
      document.write("Fixx");
  }
  else if(i % 5 == 0)
  {
    document.write("buzz");

  }
  else
  {
      document.write(i);
  }
  document.write("<br/>");
}
