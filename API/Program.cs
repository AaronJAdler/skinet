
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
//Made in net 5 style


namespace API
{
    public class Program
    {
        public static void Main(string[] args){
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(
                    webBuilder => webBuilder.UseStartup<Startup>());
    }
}
