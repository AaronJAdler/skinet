export function getEventValue(event: Event) {
        return (event.target as HTMLInputElement).value;
}