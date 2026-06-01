const audio = document.getElementById('mySong');
const btn = document.getElementById('startAudio');

window.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', () => {
        audio.muted = false; 
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaElementSource(audio);
        const filter = audioContext.createBiquadFilter();
        const panner = audioContext.createStereoPanner();
        const gainNode = audioContext.createGain();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(750, audioContext.currentTime);
        panner.pan.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.55, audioContext.currentTime);
        source.connect(filter);
        filter.connect(panner);
        panner.connect(gainNode);
        gainNode.connect(audioContext.destination);
        audioContext.resume();
    }, { once: true });
});
