const app = new Vue({
	el: "#app",
	data: {
		books: [
			{
				id: 1,
				name: "《算法导论》",
				date: "2006-9",
				price: 85.0,
				count: 1
			},
			{
				id: 2,
				name: "《算法导论》",
				date: "2006-5",
				price: 93.0,
				count: 1
			},
			{
				id: 3,
				name: "《算法导论》",
				date: "2003-9",
				price: 78.0,
				count: 1
			},
			{
				id: 4,
				name: "《算法导论》",
				date: "2005-5",
				price: 54.0,
				count: 1
			}
		]
	},
	methods: {
		increaseCount(index) {
			console.log(index);
			this.books[index].count += 1;
		},
		decreaseCount(index) {
			console.log("---");
			if (this.books[index].count > 1) {
				this.books[index].count -= 1;
			}
    },
    removeHandle(index){
      this.books.splice(index, 1);
    }
	},
	filters: {
		showPrice(value) {
			return "￥" + value.toFixed(2);
		}
	},
	computed: {
		totalPrice: function() {
			let sum = 0;
			// 1. forEach(function(e)){}
			// this.books.forEach(function(book) {
			// 	sum += book.price*book.count;
		// });

			// 2. for...in
			// for (let i in this.books){
			// 	sum += this.books[i].price*this.books[i].count;
			// }

			// 3. for...of
			// for (let book of this.books){
			// 	sum += book.price*book.count;
			// }
			
			// return sum;

			// 4.reduce
			return this.books.reduce(function(preValue, book){
				return preValue+book.price*book.count
			},0)
		}
	}
});
