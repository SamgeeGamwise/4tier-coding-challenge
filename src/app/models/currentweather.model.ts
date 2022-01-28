import { Deserializable } from "./deserializable.model"

export class CurrentWeather implements Deserializable {
    name: string = ""
    sys: { country: string } = { country: "" }
    wind: { speed: number } = { speed: 0 }
    main: { humidity: number, temp: number } = { humidity: 0, temp: 0 }

    location(): string {
        return `${this.name}, ${this.sys.country}`
    }

    speed(): number {
        return this.wind.speed
    }

    humidity(): number {
        return this.main.humidity
    }

    temp(): number {
        return this.main.temp
    }

    deserialize(input: any) {
        Object.assign(this, input)
        return this
    }
}
