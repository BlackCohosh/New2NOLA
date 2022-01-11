let newFormEat = document.getElementById('new-eat');
let delSelectEat = document.getElementById('del-select-eat');
let delFormEat = document.getElementById('del-form-eat');
let upSelectEat = document.getElementById('up-select-eat');
let upFormEat = document.getElementById('up-form-eat');

let newFormDrink = document.getElementById('new-drink');
let delSelectDrink = document.getElementById('del-select-drink');
let delFormDrink = document.getElementById('del-form-drink');
let upSelectDrink = document.getElementById('up-select-drink');
let upFormDrink = document.getElementById('up-form-drink');

let newFormBeMerry = document.getElementById('new-beMerry');
let delSelectBeMerry = document.getElementById('del-select-beMerry');
let delFormBeMerry = document.getElementById('del-form-beMerry');
let upSelectBeMerry = document.getElementById('up-select-beMerry');
let upFormBeMerry = document.getElementById('up-form-beMerry');

fetchEat = () => {
    axios.get("http://localhost:4000/api/new2nola")
    .then(res => renderEat(res.data, "get"))
}
fetchDrink = () => {
    axios.get("http://localhost:4000/api/new2nola/drink")
    .then(res => renderDrink(res.data, "get"))
}
fetchBeMerry = () => {
    axios.get("http://localhost:4000/api/new2nola/beMerry")
    .then(res => renderBeMerry(res.data, "get"))
}

generateEat = () => {
    axios.get("http://localhost:4000/api/new2nola/gen")
    .then(res => populateOptionsEat(res.data));
}
generateDrink = () => {
    axios.get("http://localhost:4000/api/new2nola/drink/gen")
    .then(res => populateOptionsDrink(res.data));
}
generateBeMerry = () => {
    axios.get("http://localhost:4000/api/new2nola/beMerry/gen")
    .then(res => populateOptionsBeMerry(res.data));
}

populateOptionsEat = eat => {
    eat.forEach((eat, index) => {
        let option = document.createElement('option');
        option.id = `d-${index}`;
        option.value = index;
        option.innerText = eat.text;
        let clone = option.cloneNode(true);
        clone.id = `u-${index}`;
        delSelectEat.appendChild(option);
        upSelectEat.appendChild(clone);
    })
}
populateOptionsDrink = drink => {
    drink.forEach((drink, index) => {
        let option = document.createElement('option');
        option.id = `d-${index}`;
        option.value = index;
        option.innerText = drink.text;
        let clone = option.cloneNode(true);
        clone.id = `u-${index}`;
        delSelectDrink.appendChild(option);
        upSelectDrink.appendChild(clone);
    })
}
populateOptionsBeMerry = beMerry => {
    beMerry.forEach((beMerry, index) => {
        let option = document.createElement('option');
        option.id = `d-${index}`;
        option.value = index;
        option.innerText = beMerry.text;
        let clone = option.cloneNode(true);
        clone.id = `u-${index}`;
        delSelectBeMerry.appendChild(option);
        upSelectBeMerry.appendChild(clone);
    })
}

addOptionEat = eat => {
    let { index, text } = eat;
    let option = document.createElement('option');
    option.id = `d-${index}`;
    option.value = index;
    option.innerText = text;
    let clone = option.cloneNode(true);
    clone.id = `u-${index}`;
    delSelectEat.appendChild(option);
    upSelectEat.appendChild(clone);
}
addOptionDrink = drink => {
    let { index, text } = drink;
    let option = document.createElement('option');
    option.id = `d-${index}`;
    option.value = index;
    option.innerText = text;
    let clone = option.cloneNode(true);
    clone.id = `u-${index}`;
    delSelectDrink.appendChild(option);
    upSelectDrink.appendChild(clone);
}
addOptionBeMerry = beMerry => {
    let { index, text } = beMerry;
    let option = document.createElement('option');
    option.id = `d-${index}`;
    option.value = index;
    option.innerText = text;
    let clone = option.cloneNode(true);
    clone.id = `u-${index}`;
    delSelectBeMerry.appendChild(option);
    upSelectBeMerry.appendChild(clone);
}


newEat = e => {
    e.preventDefault();
    let value = e.target.children[1].value;
    let eat = {
        text: value
    }
    axios.post('http://localhost:4000/api/new2nola', eat)
    .then(res => {
        renderEat(res.data, "post");
        addOptionEat(res.data);
    });

    newFormEat.reset();
}
newDrink = e => {
    e.preventDefault();
    let value = e.target.children[1].value;
    let drink = {
        text: value
    }
    axios.post('http://localhost:4000/api/new2nola/drink', drink)
    .then(res => {
        renderDrink(res.data, "post");
        addOptionDrink(res.data);
    });

    newFormDrink.reset();
}
newBeMerry = e => {
    e.preventDefault();
    let value = e.target.children[1].value;
    let beMerry = {
        text: value
    }
    axios.post('http://localhost:4000/api/new2nola/beMerry', beMerry)
    .then(res => {
        renderBeMerry(res.data, "post");
        addOptionBeMerry(res.data);
    });

    newFormBeMerry.reset();
}

deleteEat = e => {
    e.preventDefault();
    let target = e.submitter.previousElementSibling.value;
    axios.delete(`http://localhost:4000/api/new2nola/${target}`)
    .then(res => removeOptionEat(res.data));
}
deleteDrink = e => {
    e.preventDefault();
    let target = e.submitter.previousElementSibling.value;
    axios.delete(`http://localhost:4000/api/new2nola/drink/${target}`)
    .then(res => removeOptionDrink(res.data));
}
deleteBeMerry = e => {
    e.preventDefault();
    let target = e.submitter.previousElementSibling.value;
    axios.delete(`http://localhost:4000/api/new2nola/beMerry/${target}`)
    .then(res => removeOptionBeMerry(res.data));
}

updateEat = e => {
    e.preventDefault();
    let index = e.target.children[0].value;
    let text = e.target.children[1].children[0].value;
    let obj = {
        index: index,
        text: text
    }
    axios.put(`http://localhost:4000/api/new2nola/${index}`, obj)
    .then(res => changeOptionsEat(res.data));

    upForm.reset();
}
updateDrink = e => {
    e.preventDefault();
    let index = e.target.children[0].value;
    let text = e.target.children[1].children[0].value;
    let obj = {
        index: index,
        text: text
    }
    axios.put(`http://localhost:4000/api/new2nola/drink/${index}`, obj)
    .then(res => changeOptionsDrink(res.data));

    upForm.reset();
}
updateBeMerry = e => {
    e.preventDefault();
    let index = e.target.children[0].value;
    let text = e.target.children[1].children[0].value;
    let obj = {
        index: index,
        text: text
    }
    axios.put(`http://localhost:4000/api/new2nola/beMerry/${index}`, obj)
    .then(res => changeOptionsBeMerry(res.data));

    upForm.reset();
}

removeOptionEat = index => {
    document.getElementById(`d-${index}`).remove();
    document.getElementById(`u-${index}`).remove();
}
removeOptionDrink = index => {
    document.getElementById(`d-${index}`).remove();
    document.getElementById(`u-${index}`).remove();
}
removeOptionBeMerry = index => {
    document.getElementById(`d-${index}`).remove();
    document.getElementById(`u-${index}`).remove();
}

changeOptionsEat = eat => {
    let { index, text } = eat;
    let delOptionEat = document.getElementById(`d-${index}`);
    let upOptionEat = document.getElementById(`u-${index}`);
    delOptionEat.innerText = text;
    upOptionEat.innerText = text;
}
changeOptionsDrink = drink => {
    let { index, text } = drink;
    let delOptionDrink = document.getElementById(`d-${index}`);
    let upOptionDrink = document.getElementById(`u-${index}`);
    delOptionDrink.innerText = text;
    upOptionDrink.innerText = text;
}
changeOptionsBeMerry = beMerry => {
    let { index, text } = beMerry;
    let delOptionBeMerry = document.getElementById(`d-${index}`);
    let upOptionBeMerry = document.getElementById(`u-${index}`);
    delOptionBeMerry.innerText = text;
    upOptionBeMerry.innerText = text;
}

renderEat = (text, type) => {
    let target;

    let eat = document.createElement('h3');

    if (type === "get") {
        target = document.getElementById('random-eat-body');
        eat.innerText = text;
        eat.className = "text";
    } else {
        target = document.getElementById('new-eat-body');
        eat.innerText = text.text
        eat.className = "text";
    }

    if (target.children.length === 0) {
        target.style.display = "";
        target.appendChild(eat);
    } else {
        target.style.display = "";
        let h3 = target.children[0];
        h3.innerText = eat.innerText;
    }
    
}
renderDrink = (text, type) => {
    let target;

    let drink = document.createElement('h3');

    if (type === "get") {
        target = document.getElementById('random-drink-body');
        drink.innerText = text;
        drink.className = "text";
    } else {
        target = document.getElementById('new-drink-body');
        drink.innerText = text.text
        drink.className = "text";
    }

    if (target.children.length === 0) {
        target.style.display = "";
        target.appendChild(drink);
    } else {
        target.style.display = "";
        let h3 = target.children[0];
        h3.innerText = drink.innerText;
    }
    
}
renderBeMerry = (text, type) => {
    let target;

    let beMerry = document.createElement('h3');

    if (type === "get") {
        target = document.getElementById('random-beMerry-body');
        beMerry.innerText = text;
        beMerry.className = "text";
    } else {
        target = document.getElementById('new-beMerry-body');
        beMerry.innerText = text.text
        beMerry.className = "text";
    }

    if (target.children.length === 0) {
        target.style.display = "";
        target.appendChild(beMerry);
    } else {
        target.style.display = "";
        let h3 = target.children[0];
        h3.innerText = beMerry.innerText;
    }
    
}


document.getElementById('eat').addEventListener("click", fetchEat);
document.addEventListener("DOMContentLoaded", generateEat);
newFormEat.addEventListener("submit", newEat);
delFormEat.addEventListener("submit", deleteEat);
upFormEat.addEventListener("submit", updateEat);

document.getElementById('drink').addEventListener("click", fetchDrink);
document.addEventListener("DOMContentLoaded", generateDrink);
newFormDrink.addEventListener("submit", newDrink);
delFormDrink.addEventListener("submit", deleteDrink);
upFormDrink.addEventListener("submit", updateDrink);

document.getElementById('beMerry').addEventListener("click", fetchBeMerry);
document.addEventListener("DOMContentLoaded", generateBeMerry);
newFormBeMerry.addEventListener("submit", newBeMerry);
delFormBeMerry.addEventListener("submit", deleteBeMerry);
upFormBeMerry.addEventListener("submit", updateBeMerry);