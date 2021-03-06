import { wine, spiceMix, orangeJuice } from 'gift';
import { sugar, pot } from 'kitchen';
import { enjoy } from 'life';

pot.add(wine, 0.25, 'L');
pot.add(sugar, 1, 'tbsp');

while(pot.isNotBoiling()){
    pot.heat();
}

pot.add(spiceMix, 1, 'pack');
pot.add(orangeJuice, 0.125, 'L');

while(pot.isNotBoiling()){
    pot.heat();
}

while(pot.isNotEmpty()){
    enjoy();
}
