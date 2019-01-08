document
  .querySelector('.create__btn')
  .addEventListener('click', create_hero);

//#FUNCTIONS

function create_hero()
{
  var new_hero =
  {
    "name": document.querySelector('.create__name').value,
    "class": document.querySelector('.create__class_name').value
  };
  new_hero.stats = get_class_stats(new_hero.class);

  var heroes_storage = localStorage.getItem("heroes_storage");
  if(!heroes_storage)
  {
    var heroes = [];
    heroes[0] = new_hero;
    localStorage.setItem("heroes_storage", JSON.stringify(heroes));
  }
  else
  {
    var heroes = JSON.parse(heroes_storage);
    heroes.push(new_hero);
    localStorage.setItem("heroes_storage", JSON.stringify(heroes));
  }

  show_heroes();
}

function get_class_stats(class_name)
{
  var class_stats =
  {
    "hp": 0,
    "power": 0,
    "luck": 0
  };

  switch (class_name)
  {
    case "druid":
      class_stats.hp = 100;
      class_stats.power = 70;
      class_stats.luck = 40;
      break;

    case "hunter":
      class_stats.hp = 80;
      class_stats.power = 50;
      class_stats.luck = 70;
      break;

    case "mage":
      class_stats.hp = 50;
      class_stats.power = 90;
      class_stats.luck = 50;
      break;

    case "paladin":
      class_stats.hp = 150;
      class_stats.power = 60;
      class_stats.luck = 20;
      break;

    case "priest":
      class_stats.hp = 60;
      class_stats.power = 50;
      class_stats.luck = 80;
      break;

    case "rogue":
      class_stats.hp = 70;
      class_stats.power = 50;
      class_stats.luck = 70;
      break;

    case "druid":
      class_stats.hp = 100;
      class_stats.power = 70;
      class_stats.luck = 40;
      break;

    case "shaman":
      class_stats.hp = 100;
      class_stats.power = 80;
      class_stats.luck = 40;
      break;

    case "warlock":
      class_stats.hp = 150;
      class_stats.power = 60;
      class_stats.luck = 20;
      break;

    case "warrior":
      class_stats.hp = 200;
      class_stats.power = 100;
      class_stats.luck = 0;
      break;

    default:
  }

  return class_stats;
}

function show_heroes()
{
  var heroes_storage = localStorage.getItem("heroes_storage");

  if(heroes_storage)
  {
    // Show heroes from scratch
    document.querySelector('.heroes__title').style.display = "block";
    document.querySelector('.heroes__table').style.display = "block";
    document.querySelector('.select_heroes').style.display = "block";
    document.querySelector('.heroes__table tbody').innerHTML = "";
    var heroes = JSON.parse(heroes_storage);

    for(var i = 0; i < heroes.length; i++)
    {
      // Add hero to table
      var new_hero = document.createElement("tr");
      new_hero.innerHTML = "<td>" + heroes[i].name +"</td>";
      new_hero.innerHTML += "<td>" + heroes[i].class +"</td>";
      new_hero.innerHTML += "<td>" + heroes[i].stats.hp +"</td>";
      new_hero.innerHTML += "<td>" + heroes[i].stats.power +"</td>";
      new_hero.innerHTML += "<td>" + heroes[i].stats.luck +"</td>";

      document
        .querySelector('.heroes__table tbody')
        .appendChild(new_hero);;

      // Add hero to select
      var new_option = document.createElement("option");
      new_option.innerHTML = heroes[i].name;
      var new_option_cp = document.createElement("option");
      new_option_cp.innerHTML = heroes[i].name;

      document
        .querySelector('.select_heroes__one')
        .appendChild(new_option);

      document
        .querySelector('.select_heroes__two')
        .appendChild(new_option_cp);
    }
  }
}

show_heroes()
