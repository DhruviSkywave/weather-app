'use client';

import { Card, CardContent } from "./ui/card";

function Weather({ data }) {
    const icon = data.weather[0].icon;
    return (
        <Card className="mt-6 rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">

                <h2 className="text-xl font-semibold text-gray-800">City: {data.name}</h2>
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="weather icon"
                    className="mx-auto"
                />
                <p className="text-4xl font-bold text-gray-600 mt-2">Temperature: {Math.round(data.main.temp)}°C</p>
                <p className="text-gray-600 mt-2">Weather: {data.weather[0].main}</p>

                <div className="mt-4 flex justify-between text-sm text-gray-600">
                    <span>💧 Humidity: {data.main.humidity}%</span>
                    <span>🌬 Wind Speed: {data.wind.speed}m/s</span>
                </div>
            </CardContent>
        </Card>
    );
}
export default Weather;