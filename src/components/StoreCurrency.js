import axios from 'axios'; 
export function StoreCurrency () {
  return {
    from : 'XCD',
    to : 'XCD',
    result : 1.0,
    weight : 0.0,
    currency : [{"currency":"XCD","name":"East Caribbean dollar","symbol":"$"},
    {"currency":"EUR","name":"European euro","symbol":"€"},
    {"currency":"GEL","name":"Georgian lari","symbol":"₾"},
    {"currency":"XCD","name":"East Caribbean dollar","symbol":"$"},
    {"currency":"HTG","name":"Haitian gourde","symbol":"G"},
    {"currency":"INR","name":"Indian rupee","symbol":"₹"},
    {"currency":"ILS","name":"Israeli new sheqel","symbol":"₪"},
    {"currency":"KZT","name":"Kazakhstani tenge","symbol":"лв"},
    {"currency":"KWD","name":"Kuwaiti dinar","symbol":"د.ك"},
    {"currency":"LSL","name":"Lesotho loti","symbol":"L"},
    { "currency": "INR", "name": "Indian rupee", "symbol": "₹"},
    {"currency":"USD","name":"U.S. Dollar","symbol":"$"}],
    async CallMe() {
      console.log('CallMe');
      const url = `https://free.currconv.com/api/v7/convert?q=${this.from}_${this.to}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`;
      const response = await axios(url);
      const value = await response.data();
      this.result = parseFloat(value[this.from + '_' + this.to]);
      this.result = this.result * parseFloat(this.weight);
    },
    updatefrom (newfrom)  {
      console.log('updetefrom');
      this.from = newfrom;
      this.CallMe();
    },
    updateto (newto) {
      console.log('updeteto');
      this.to = newto;
      this.CallMe();
    },
    upadteweight (newweight) {
      console.log('updeteweight');
      this.weight = newweight;
      this.CallMe();
    }
  };
}