const Thermostat = require('../src/thermostat')

describe('thermostat', () => {
    let thermostat;

    beforeEach(() => {
        thermostat = new Thermostat();
    })

    test('Initial temperature is set to 20 degrees', () => {
        expect(thermostat.getTemperature()).toBe(20);
    })

    test('After calling up, temperature should increase to 21', () => {
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(21);
    })

    test('After calling up again, temperature should increase to 22', () => {
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(22);
    })

    test('After calling down, temp should decrease to 19', () => {
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(19);
    })

    test('Power Saving Mode sets max temperature to 25 degrees', () => {
        thermostat.setPSM(true);
        expect(thermostat.maxTemperature).toBe(25);
    })

    test('Reset method sets temperature back to 20 degrees', () => {
        thermostat.up();
        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20);
    })

    test('PSM false sets max temperature to 32 degrees', () => {
        thermostat.setPSM(false);
        expect(thermostat.maxTemperature).toBe(32);
    })

    test('When PSM true, temperature cannot go above 25', () => {
        thermostat.setPSM(true);
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(25);
    })

    test('When PSM false, temperature can go above 25', () => {
        thermostat.setPSM(false);
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(27);
    })

    test('When temp is 20, energy usage is medium usage', () => {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
    })

})