// alert("conectado");

var divisible = false;

function write_FizzBuzz(ini, end)
{
    for(var i = ini; i <= end; i++)
    {
        
        if (i % 3 == 0 && i % 5 == 0)
        {
            document.write("fizzBuzz");
        }

        else if (i % 3 == 0)
        {
            document.write("fizz");
            divisible = true;    
        }

        else if (i % 5 == 0)
        {
            document.write("Buzz");    
            divisible = true
        }
        else
        {
            document.write(i);
        }
        document.write("<br/>");
    }
    
}

write_FizzBuzz(0, 15);