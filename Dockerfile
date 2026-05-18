# Use Microsoft's official runtime SDK to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy project files and restore dependencies
COPY ["yourfriendlyweb.csproj", "."]
RUN dotnet restore "./yourfriendlyweb.csproj"

# Copy the remaining project source files and build
COPY . .
RUN dotnet publish "yourfriendlyweb.csproj" -c Release -o /app/publish

# Generate final runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENTRYPOINT ["dotnet", "yourfriendlyweb.dll"]
