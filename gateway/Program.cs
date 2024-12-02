using Gateway;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddVitalServices();

builder.Configuration.AddJsonFile("ocelot.json");

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();

await app.UseOcelot();
app.Run();