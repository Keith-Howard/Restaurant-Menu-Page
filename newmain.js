class MenuItem {
	constructor(title, price, description, photo, category) {
	this.title = title;
	this.price = price;
	this.description = description;
	this.photo = photo;
	this.category = category;
	}
}

function getFoodCategories(foods) {
	const foodCategories = ["all"];
	foods.forEach(foodItem => {
		if (foodCategories.indexOf(foodItem.category) == -1) {
			foodCategories.push(foodItem.category);
		}	
	});
	return foodCategories;
}

/* function createButtonsWithReduce(categories) { 
	inner_html = categories.reduce(function (prevVal, currVal, idx) {
        return idx == 0 ? '<button type="button" class="filter-btn" id="' + currVal + '">' + currVal + '</button>' : prevVal + '<button type="button" class="filter-btn" id="' + currVal + '">' + currVal + '</button>' 
	}, 'start first value');
	btnContainer.innerHTML = inner_html;
    return inner_html;
}	 */

function createButtons(categories) {
    let htmlButtonString= ''; 
	categories.forEach(category => {
		htmlButtonString = htmlButtonString + '<button type="button" class="filter-btn" data-id="' + category + '">' + category + '</button>';
	});
	btnContainer.innerHTML = htmlButtonString;
    
	let filterBtns = document.querySelectorAll('.filter-btn');
	filterBtns.forEach(button => {
		button.addEventListener('click', function (event) {
			const category = event.currentTarget.dataset.id;
			if (category == 'all') {
				displayMenuItems(allMenuItems);
			} else {
				const filteredItems = allMenuItems.filter(function(item) {
					if (item.category == category) {
						return item;
					}
				});
				displayMenuItems(filteredItems);
						
			}
		})
	})
}	

function createFoodArray(foods) {
	return new MenuItem(foods[0], foods[1], foods[2], foods[3], foods[4]);
}

function displayMenuItems(menuItems) {
	let displayMenu = '';
	menuItems.forEach(item => { 
		displayMenu = displayMenu + 
		'<article class="menu-item">' +
          '<img src=' + item.photo + ' alt=' + item.title + 'class="photo" />' +
          '<div class="item-info">' +
            '<header>' +
              '<h4>' + item.title + '</h4>' +
              '<h4 class="price">' + item.price + '</h4>' +
            '</header>' +
            '<p class="item-text">' +
              item.description +
            '</p>' +
          '</div>' +
        '</article>';
  });
    sectionCenter.innerHTML = displayMenu;
};

