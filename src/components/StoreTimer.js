export function StoreTimer () {
  return {
    currenttime : new Date(),
    CallMe() {
      setInterval(() => {
        this.currenttime = new Date();
      }, 1000);
    }
  };
}