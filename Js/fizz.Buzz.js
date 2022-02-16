// alert("conectado");

var divisible = false;

function write_FizzBuzz(ini, end)
{
    for(var i = ini; i <= end; i++)
    {
        divisible = false;

        if (Residuo(i, 3))
        {
            document.write("fizz");    
        }

        if (Residuo(i, 5))
        {
            document.write("Buzz");    
        }

        if (!Residuo(i, 3) && !Residuo(i, 5))
        {
            document.write(i);
        }
        document.write("<br/>");
    }
    
}

function Residuo(num, divisor)
{
    if (num % divisor == 0)
    {
        return true;
    }
    
    else
    {
        return false;
    }
}

write_FizzBuzz(0, 15);