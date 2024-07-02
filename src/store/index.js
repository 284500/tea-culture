import {
	defineStore
} from "pinia"
export const useSearchStore = defineStore("Search", {
	//数据
	state: () => ({
		search: [{
				imgname: 'p1.png',
				price: 12,
				name: 'rea tea'
			},
			{
				imgname: 'p2.png',
				price: 13,
				name: 'green tea'
			},
			{
				imgname: 'p3.png',
				price: 14,
				description: 'adaadad',
				name: 'herbal tea'
			},
			{
				imgname: 'p3.png',
				price: 14,
				description: 'adaadad',
				name: 'herbal tea'
			}
		]
	}),
	//计算属性
	getters: {

	},
	//方法
	actions: {

	}
})
