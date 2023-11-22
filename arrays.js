const deskArray = ["pen", "camera", "phone", "notebook", "headphones", "lightbulb", "usb drive"];
console.log("Original array:", deskArray);

deskArray.pop();
console.log("New array:", deskArray);

deskArray.unshift(deskArray.pop());
console.log("Last item is now first:", deskArray);

deskArray.sort();
console.log("Sorted array:", deskArray);

const foundItem = deskArray.find((item) => item === "notebook");
console.log("Found item:", foundItem);

let remove = "notebook";
deskArray.splice(deskArray.indexOf(remove), 1);
console.log(`Array with "${remove}" removed:`, deskArray);
