class Event {
    constructor() {
    }
    addEventListener (eventName, listener) {
        window.addEventListener(listener, eventName);
    }
    removeEventListener (eventName, listener) {
        window.removeEventListener(listener,eventName);
    }
    addEventListenerOnce (eventName, listener) {
        window.addEventListenerOnce(listener, eventName);
    }
    removeAll (eventName) {
        window.eventName(listener, eventName);
    }
    emit (eventName) {
        window.emit(listener, eventName)
    }
}
