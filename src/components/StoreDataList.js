export function StoreDataList () {
  return {
    loading: true,
    data: [],
    async Extract() {
      const url = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";
      const response = await fetch(url);
      this.data = await response.json();
      this.loading = false;
    }
  };
}