function setLoop() {
    const video = document.querySelector('video');
    if (video) {
      video.loop = true;
      console.log("✅ Looping enabled for video:", location.href);
    } else {
      // Retry shortly if video not yet loaded
      setTimeout(setLoop, 500);
    }
  }
  
  // Run once initially
  setLoop();
  
  // Listen to YouTube's SPA navigation event
  window.addEventListener('yt-navigate-finish', () => {
    console.log("🔄 Navigation detected. Reapplying loop...");
    setTimeout(setLoop, 1000); // Give YouTube time to render video
 });
  