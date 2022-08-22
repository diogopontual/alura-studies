export function timeToSeconds(tempo:string): number{
    const [hours = '0',minutes = '0',seconds = '0'] = tempo.split(':');
    return Number(seconds) + Number(minutes) * 60 + Number(hours) * 3600;
}