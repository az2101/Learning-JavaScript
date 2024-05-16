class Thermostat {
    constructor() {
        this.temperature = 20;
        this.minTemperature = 10;
        this.maxTemperaturePSMon = 25;
        this.maxTemperaturePSMoff = 32;
        this.powerSavingMode = true;
        this.maxTemperature = this.maxTemperaturePSMon;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if (this.temperature < this.maxTemperature) {
            this.temperature++;
        }
    }

    down() {
        if (this.temperature > this.minTemperature) {
            this.temperature--;
        }
    }

    setPSM(status) {
        this.powerSavingMode = status;
        if (this.powerSavingMode) {
            this.maxTemperature = this.maxTemperaturePSMon;
            if (this.temperature > this.maxTemperature) {
                this.temperature = this.maxTemperature
            }
        } else{
            this.maxTemperature = this.maxTemperaturePSMoff;
        }
    }

    reset() {
        this.temperature = 20;
    }

    energyUsage() {
        if (this.temperature < 18) {
            return 'low-usage'
        } else if (this.temperature <= 25) {
            return 'medium-usage'
        } else {
            return 'high-usage'
        }
    }
}

module.exports = Thermostat
