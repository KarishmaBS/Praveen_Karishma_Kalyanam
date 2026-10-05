/**
 * Audio Manager for Praveen & Karishma Wedding
 * Plays "Seetha Kalyana Vaibhogame (Instrumental)" attached by the user.
 */

class WeddingAudioManager {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private subscribers: ((playing: boolean) => void)[] = [];
  private volume = 0.75;
  private audioSrc = './audio/seetha_kalyana.mp3';

  private initAudio() {
    if (!this.audio) {
      this.audio = new Audio(this.audioSrc);
      this.audio.loop = true;
      this.audio.volume = this.volume;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('error', (e) => {
        console.warn('Audio playback error', e);
        this.isPlaying = false;
        this.notify();
      });
    }
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.subscribers.push(cb);
    return () => {
      this.subscribers = this.subscribers.filter((s) => s !== cb);
    };
  }

  private notify() {
    this.subscribers.forEach((cb) => cb(this.isPlaying));
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      this.audio.volume = this.volume;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public play() {
    try {
      this.initAudio();
      if (!this.audio) return;
      const promise = this.audio.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            this.isPlaying = true;
            this.notify();
          })
          .catch((err) => {
            console.warn('Audio play was prevented or interrupted:', err);
            this.isPlaying = false;
            this.notify();
          });
      }
    } catch (e) {
      console.warn('Failed to start audio playback', e);
      this.isPlaying = false;
      this.notify();
    }
  }

  public stop() {
    if (this.audio) {
      this.audio.pause();
    }
    this.isPlaying = false;
    this.notify();
  }
}

export const weddingAudio = new WeddingAudioManager();
