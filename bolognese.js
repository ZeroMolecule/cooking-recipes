import {spaghetti, passata, beef, onion, celery, carrot, garlic} from "store";
import {salt, pepper, oliveOil, water, saucepan, pot} from "kitchen";
import {basil, oregano} from "spices";

onion.take(1, 'piece').dice();
celery.take(150, 'g').dice();
carrot.take(150, 'g').dice();
garlic.take(2, 'clove').chop();
beef.take(400, 'g').mince();

saucepan.add(oliveOil, 1, 'tbsp');
saucepan.add(beef);
saucepan.add(salt, 1, 'pinch');
saucepan.add(pepper, 2, 'pinch');

while(!beef.browned()){
    saucepan.heat('medium');
}

saucepan.setAside(beef);
saucepan.add(oliveOil, 1, 'tbsp');
saucepan.add(salt, 1, 'pinch');
saucepan.add(onion);
saucepan.add(celery);
saucepan.add(carrot);

while(!onion.softened()){
    saucepan.heat('medium');
}

saucepan.add(garlic);
saucepan.putBack(beef);
saucepan.add(passata, 400, 'g');
saucepan.simmer();

pot.add(water, 2, 'L');
pot.add(salt, 1, 'tbsp');
while(!pot.isBoiling()){
    pot.heat();  
}
pot.add(spaghetti, 400, 'g');
while(!spaghetti.isAlDente()){
    pot.heat();
}
pot.setAside(water, 1, 'cup');
pot.drain();

saucepan.put(spaghetti);
saucepan.put(water);
saucepan.add(basil, 2, 'tsp');
saucepan.add(oregano, 2, 'tsp');
while(!saucepan.isSauceReduced()){
    saucepan.simmer();
}

saucepan.serve();