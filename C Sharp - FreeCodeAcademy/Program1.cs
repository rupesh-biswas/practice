namespace C_Sharp___FreeCodeAcademy
{
    class Program1
    {
        static void Main(string[] args)
        {

            Chef chef = new Chef();
            chef.MakeSpecialDish();

            ItalianChef italianChef = new ItalianChef();
            italianChef.MakeSpecialDish();

            Console.ReadLine();
        }
    }
}