function initAudioPlayer() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audio = document.querySelector('audio');
    
    // 添加用户交互触发音频播放
    document.addEventListener('touchstart', function() {
        // 恢复音频上下文
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        
        // 尝试播放音频
        if (audio && audio.paused) {
            audio.play().catch(function(error) {
                console.log("播放失败:", error);
            });
        }
    }, { once: true });
    
    // ... existing code ...
} 