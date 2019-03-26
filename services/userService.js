const _ = require('lodash');

const Factory = function () { 
}

Factory.getProfile = function() {
	return {
		firstName: 'Eric',
		lastName: 'Cantona',
		number: '7',
		fullName: 'Eric Cantona',
		club: 'Manchester United'
	}
}

Factory.getUserList = function() {
	let users = [
		{
			firstName: 'Eric',
			lastName: 'Cantona',
			number: '7',
			fullName: 'Eric Cantona',
			club: 'Manchester United'
		},
		{
			firstName: 'David',
			lastName: 'Beckham',
			number: '7',
			fullName: 'David Beckham',
			club: 'Manchester United'
		},
		{
			firstName: 'Cristiano',
			lastName: 'Ronaldo',
			number: '7',
			fullName: 'Cristiano Ronaldo',
			club: 'Manchester United'
		},
		{
			firstName: 'Michael',
			lastName: 'Owen',
			number: '7',
			fullName: 'Michael Owen',
			club: 'Manchester United'
		},
		{
			firstName: 'Angel',
			lastName: 'Di Maria',
			number: '7',
			fullName: 'Angel Di Maria',
			club: 'Manchester United'
		},
		{
			firstName: 'Memphis',
			lastName: 'Depay',
			number: '7',
			fullName: 'Memphis Depay',
			club: 'Manchester United'
		}
	];
	return users;
}

Factory.getMenu = function () {
	var navigation = [
		{
			code: 'cash',
			name: 'Cash',			
			childNodes: [
				{ code: 'cashIn', name: 'Cash In' },
				{ code: 'cashOut', name: 'Cash Out' },
				{ code: 'cashReport', name: 'Report' }
			]
		},
		{
			code: 'inventory',
			name: 'Inventory',
			childNodes: [
				{ code: 'inventoryInput', name: 'Input' },
				{ code: 'inventoryOutput', name: 'Output' },				
				{ code: 'inventoryReport', name: 'Report' }
			]
		},
		{
			code: 'list',
			name: 'List',
			childNodes: [
				{ code: 'brand', name: 'Brand' },
				{ code: 'product', name: 'Product' },
				{ code: 'inventory', name: 'Inventory' },
				{ code: 'account', name: 'Account' },
				{ code: 'customer', name: 'Customer' },
				{ code: 'user', name: 'User' },
				{ code: 'group', name: 'Group' }
			]
		},
		{
			code: 'help',
			name: 'Help',
			clickable: true
		},
		{
			code: 'sample',
			name: 'Sample',
			clickable: true
		}
	];
	return navigation;
}

module.exports = Factory;