// alert("conectado");

var divisible = false;

function write_FizzBuzz(ini, end)
{
    for(var i = ini; i <= end; i++)
    {
        divisible = false;

        if (i % 3 == 0)
        {
            document.write("fizz");
            divisible = true;    
        }

        if (i % 5 == 0)
        {
            document.write("Buzz");    
            divisible = true
        }

        if (!divisible)
        {
            document.write(i);
        }
        document.write("<br/>");
    }
    
}

write_FizzBuzz(0, 15);