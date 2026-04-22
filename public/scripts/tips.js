// ══════════════════════════════════════════════════════════════════════════════
// Tips
// ══════════════════════════════════════════════════════════════════════════════
const TIPS=[
  // MULTIPLICATION
  {cat:'mul',title:{en:'Multiply by 5',nl:'Vermenigvuldigen met 5',es:'Multiplicar por 5'},
   body:{en:'Multiply by 10 and halve the result. Far faster than counting in fives.',nl:'Vermenigvuldig met 10 en deel door 2. Veel sneller dan optellen met stappen van 5.',es:'Multiplica por 10 y divide entre 2. Mucho más rápido que contar de cinco en cinco.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">7 × 5</span>\n→ 7 × 10 = 70\n→ 70 ÷ 2 = <span class="hl">35</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">7 × 5</span>\n→ 7 × 10 = 70\n→ 70 ÷ 2 = <span class="hl">35</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">7 × 5</span>\n→ 7 × 10 = 70\n→ 70 ÷ 2 = <span class="hl">35</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply by 9',nl:'Vermenigvuldigen met 9',es:'Multiplicar por 9'},
   body:{en:'Multiply by 10 and subtract the number once.',nl:'Vermenigvuldig met 10 en trek het getal er één keer af.',es:'Multiplica por 10 y resta el número una vez.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">8 × 9</span>\n→ 8 × 10 = 80\n→ 80 − 8 = <span class="hl">72</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">8 × 9</span>\n→ 8 × 10 = 80\n→ 80 − 8 = <span class="hl">72</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">8 × 9</span>\n→ 8 × 10 = 80\n→ 80 − 8 = <span class="hl">72</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply by 11 (two digits)',nl:'Vermenigvuldigen met 11 (twee cijfers)',es:'Multiplicar por 11 (dos dígitos)'},
   body:{en:'Write the first digit, place the sum of both digits in the middle, write the last digit. If the middle sum is ≥ 10, add 1 to the first digit and keep only the units digit in the middle.',nl:'Schrijf het eerste cijfer, zet de som van beide cijfers in het midden, schrijf het laatste cijfer. Als de middelste som ≥ 10 is, tel 1 op bij het eerste cijfer en houd alleen het eenheidscijfer in het midden.',es:'Escribe el primer dígito, coloca la suma de ambos dígitos en el medio, escribe el último. Si la suma del medio es ≥ 10, suma 1 al primer dígito y conserva solo las unidades en el medio.'},
   ex:{en:'<span class="step">Simple (sum &lt; 10):</span>  <span class="hl">36 × 11</span>\n→ 3 _ 6  →  middle = 3+6 = <span class="hl-g">9</span>\n→ <span class="hl">396</span>\n\n<span class="step">Carry (sum ≥ 10):</span>  <span class="hl">78 × 11</span>\n→ 7 _ 8  →  middle = 7+8 = <span class="hl-b">15</span>  (≥10 → carry!)\n→ first digit: 7+1 = <span class="hl-g">8</span>,  middle = <span class="hl-g">5</span>\n→ <span class="hl">858</span>',nl:'<span class="step">Eenvoudig (som &lt; 10):</span>  <span class="hl">36 × 11</span>\n→ 3 _ 6  →  midden = 3+6 = <span class="hl-g">9</span>\n→ <span class="hl">396</span>\n\n<span class="step">Onthouden (som ≥ 10):</span>  <span class="hl">78 × 11</span>\n→ 7 _ 8  →  midden = 7+8 = <span class="hl-b">15</span>  (≥10 → onthoud!)\n→ eerste cijfer: 7+1 = <span class="hl-g">8</span>,  midden = <span class="hl-g">5</span>\n→ <span class="hl">858</span>',es:'<span class="step">Simple (suma &lt; 10):</span>  <span class="hl">36 × 11</span>\n→ 3 _ 6  →  medio = 3+6 = <span class="hl-g">9</span>\n→ <span class="hl">396</span>\n\n<span class="step">Con acarreo (suma ≥ 10):</span>  <span class="hl">78 × 11</span>\n→ 7 _ 8  →  medio = 7+8 = <span class="hl-b">15</span>  (≥10 → ¡acarreo!)\n→ primer dígito: 7+1 = <span class="hl-g">8</span>,  medio = <span class="hl-g">5</span>\n→ <span class="hl">858</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply by 25',nl:'Vermenigvuldigen met 25',es:'Multiplicar por 25'},
   body:{en:'Divide by 4 (halve twice). Turns hard multiplication into simple division.',nl:'Deel door 4 (twee keer halveren). Maakt moeilijke vermenigvuldiging eenvoudig.',es:'Divide entre 4 (parte por la mitad dos veces). Convierte una multiplicación difícil en división simple.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">44 × 25</span>\n→ 44 ÷ 2 = 22\n→ 22 ÷ 2 = 11\n→ 11 × 100 = <span class="hl">1100</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">44 × 25</span>\n→ 44 ÷ 2 = 22\n→ 22 ÷ 2 = 11\n→ 11 × 100 = <span class="hl">1100</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">44 × 25</span>\n→ 44 ÷ 2 = 22\n→ 22 ÷ 2 = 11\n→ 11 × 100 = <span class="hl">1100</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Difference of squares',nl:'Verschil van kwadraten',es:'Diferencia de cuadrados'},
   body:{en:'a² − b² = (a+b)(a−b). Great for multiplying numbers equidistant from a round figure.',nl:'a² − b² = (a+b)(a−b). Handig voor getallen gelijk ver van een rond getal.',es:'a² − b² = (a+b)(a−b). Ideal para multiplicar números equidistantes de una cifra redonda.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">19 × 21</span>\n→ (20−1)(20+1) = 20² − 1\n→ 400 − 1 = <span class="hl">399</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">19 × 21</span>\n→ (20−1)(20+1) = 20² − 1\n→ 400 − 1 = <span class="hl">399</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">19 × 21</span>\n→ (20−1)(20+1) = 20² − 1\n→ 400 − 1 = <span class="hl">399</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply by 4',nl:'Vermenigvuldigen met 4',es:'Multiplicar por 4'},
   body:{en:'Double the number twice. Quicker than multiplying directly.',nl:'Verdubbel het getal twee keer.',es:'Dobla el número dos veces. Más rápido que multiplicar directamente.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">23 × 4</span>\n→ 23 × 2 = 46\n→ 46 × 2 = <span class="hl">92</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">23 × 4</span>\n→ 23 × 2 = 46\n→ 46 × 2 = <span class="hl">92</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">23 × 4</span>\n→ 23 × 2 = 46\n→ 46 × 2 = <span class="hl">92</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply by 8',nl:'Vermenigvuldigen met 8',es:'Multiplicar por 8'},
   body:{en:'Double the number three times in a row. The mirror of dividing by 8.',nl:'Verdubbel het getal drie keer achter elkaar. Het spiegelbeeld van delen door 8.',es:'Dobla el número tres veces seguidas. El espejo de dividir entre 8.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">23 × 8</span>\n→ 23 × 2 = 46\n→ 46 × 2 = 92\n→ 92 × 2 = <span class="hl">184</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">23 × 8</span>\n→ 23 × 2 = 46\n→ 46 × 2 = 92\n→ 92 × 2 = <span class="hl">184</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">23 × 8</span>\n→ 23 × 2 = 46\n→ 46 × 2 = 92\n→ 92 × 2 = <span class="hl">184</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Break numbers apart',nl:'Getallen opsplitsen',es:'Descomponer los números'},
   body:{en:'Split one factor into a round number plus a small remainder (distributive property).',nl:'Splits een factor op in een rond getal plus een kleine rest.',es:'Divide un factor en un número redondo más un resto pequeño (propiedad distributiva).'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">14 × 17</span>\n→ (10+4) × 17\n→ 170 + 68 = <span class="hl">238</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">14 × 17</span>\n→ (10+4) × 17\n→ 170 + 68 = <span class="hl">238</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">14 × 17</span>\n→ (10+4) × 17\n→ 170 + 68 = <span class="hl">238</span>'},
   ops:['mul']},
  // ADDITION
  {cat:'add',title:{en:'Left-to-right addition',nl:'Van links naar rechts optellen',es:'Suma de izquierda a derecha'},
   body:{en:'Add from left to right in chunks — hundreds first, then tens, then units.',nl:'Tel op van links naar rechts: eerst honderden, dan tientallen, dan eenheden.',es:'Suma de izquierda a derecha: primero centenas, luego decenas, después unidades.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">347 + 286</span>\n→ 300+200 = 500\n→ 40+80 = 120 → 620\n→ 7+6 = 13 → <span class="hl">633</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">347 + 286</span>\n→ 300+200 = 500\n→ 40+80 = 120 → 620\n→ 7+6 = 13 → <span class="hl">633</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">347 + 286</span>\n→ 300+200 = 500\n→ 40+80 = 120 → 620\n→ 7+6 = 13 → <span class="hl">633</span>'},
   ops:['add']},
  {cat:'add',title:{en:'Round and adjust',nl:'Afronden en corrigeren',es:'Redondear y ajustar'},
   body:{en:'Round one number up to a multiple of 10, add, then subtract the difference.',nl:'Rond één getal af naar een tiental, tel op en trek het verschil er weer af.',es:'Redondea un número a la decena más cercana, suma y resta la diferencia.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">58 + 37</span>\n→ 60 + 37 = 97\n→ 97 − 2 = <span class="hl">95</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">58 + 37</span>\n→ 60 + 37 = 97\n→ 97 − 2 = <span class="hl">95</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">58 + 37</span>\n→ 60 + 37 = 97\n→ 97 − 2 = <span class="hl">95</span>'},
   ops:['add']},
  {cat:'add',title:{en:'Make tens / hundreds',nl:'Tientallen / honderden vormen',es:'Formar decenas / centenas'},
   body:{en:'Spot pairs that sum to 10 or 100 first, then add the rest.',nl:'Zoek eerst koppels die optellen tot 10 of 100, tel de rest daarna op.',es:'Busca pares que sumen 10 o 100 primero, luego suma el resto.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">17+46+33+54</span>\n→ (17+33)+(46+54)\n→ 50+100 = <span class="hl">150</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">17+46+33+54</span>\n→ (17+33)+(46+54)\n→ 50+100 = <span class="hl">150</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">17+46+33+54</span>\n→ (17+33)+(46+54)\n→ 50+100 = <span class="hl">150</span>'},
   ops:['add']},
  // SUBTRACTION
  {cat:'sub',title:{en:'Subtract by adding up',nl:'Aftrekken door op te tellen',es:'Restar sumando'},
   body:{en:'Count up from the smaller to the larger number — the way cashiers make change.',nl:'Tel op van het kleinere naar het grotere getal — zoals een kassier wisselgeld geeft.',es:'Cuenta hacia arriba desde el número menor al mayor — como un cajero dando cambio.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">82 − 47</span>\n→ 47 → 50 (+3)\n→ 50 → 82 (+32)\n→ 3+32 = <span class="hl">35</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">82 − 47</span>\n→ 47 → 50 (+3)\n→ 50 → 82 (+32)\n→ 3+32 = <span class="hl">35</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">82 − 47</span>\n→ 47 → 50 (+3)\n→ 50 → 82 (+32)\n→ 3+32 = <span class="hl">35</span>'},
   ops:['sub']},
  {cat:'sub',title:{en:'Round and adjust (subtraction)',nl:'Afronden en corrigeren (aftrekken)',es:'Redondear y ajustar (resta)'},
   body:{en:'Round the subtracted number up to the nearest 10, subtract, then add back the difference.',nl:'Rond het af te trekken getal op naar het dichtstbijzijnde tiental, trek af en tel het verschil terug op.',es:'Redondea el número que se resta a la decena superior, resta y suma la diferencia de vuelta.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">134 − 58</span>\n→ 134 − 60 = 74\n→ 74 + 2 = <span class="hl">76</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">134 − 58</span>\n→ 134 − 60 = 74\n→ 74 + 2 = <span class="hl">76</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">134 − 58</span>\n→ 134 − 60 = 74\n→ 74 + 2 = <span class="hl">76</span>'},
   ops:['sub']},
  {cat:'sub',title:{en:'Subtract near-multiples of 100',nl:'Bijna-veelvouden van 100 aftrekken',es:'Restar casi-múltiplos de 100'},
   body:{en:'When subtracting 98, 99, 101, 102 etc., subtract 100 and correct by ±1 or ±2.',nl:'Als je 98, 99, 101, 102 aftrekt: trek 100 af en corrigeer met ±1 of ±2.',es:'Al restar 98, 99, 101, 102: resta 100 y corrige con ±1 o ±2.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">345 − 99</span>\n→ 345 − 100 = 245\n→ 245 + 1 = <span class="hl">246</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">345 − 99</span>\n→ 345 − 100 = 245\n→ 245 + 1 = <span class="hl">246</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">345 − 99</span>\n→ 345 − 100 = 245\n→ 245 + 1 = <span class="hl">246</span>'},
   ops:['sub']},
  // DIVISION
  {cat:'div',title:{en:'Divide by 5',nl:'Delen door 5',es:'Dividir entre 5'},
   body:{en:'Multiply by 2 then divide by 10.',nl:'Vermenigvuldig met 2 en deel dan door 10.',es:'Multiplica por 2 y luego divide entre 10.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">85 ÷ 5</span>\n→ 85 × 2 = 170\n→ 170 ÷ 10 = <span class="hl">17</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">85 ÷ 5</span>\n→ 85 × 2 = 170\n→ 170 ÷ 10 = <span class="hl">17</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">85 ÷ 5</span>\n→ 85 × 2 = 170\n→ 170 ÷ 10 = <span class="hl">17</span>'},
   ops:['div']},
  {cat:'div',title:{en:'Divide by 4',nl:'Delen door 4',es:'Dividir entre 4'},
   body:{en:'Halve the number twice.',nl:'Halveer het getal twee keer.',es:'Divide el número por la mitad dos veces.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">148 ÷ 4</span>\n→ 148 ÷ 2 = 74\n→ 74 ÷ 2 = <span class="hl">37</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">148 ÷ 4</span>\n→ 148 ÷ 2 = 74\n→ 74 ÷ 2 = <span class="hl">37</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">148 ÷ 4</span>\n→ 148 ÷ 2 = 74\n→ 74 ÷ 2 = <span class="hl">37</span>'},
   ops:['div']},
  {cat:'div',title:{en:'Divide by 25',nl:'Delen door 25',es:'Dividir entre 25'},
   body:{en:'Multiply by 4 then divide by 100. The inverse of the multiply-by-25 trick.',nl:'Vermenigvuldig met 4 en deel dan door 100. Het omgekeerde van de maal-25-truc.',es:'Multiplica por 4 y luego divide entre 100. El inverso del truco de multiplicar por 25.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">325 ÷ 25</span>\n→ 325 × 4 = 1300\n→ 1300 ÷ 100 = <span class="hl">13</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">325 ÷ 25</span>\n→ 325 × 4 = 1300\n→ 1300 ÷ 100 = <span class="hl">13</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">325 ÷ 25</span>\n→ 325 × 4 = 1300\n→ 1300 ÷ 100 = <span class="hl">13</span>'},
   ops:['div']},
  {cat:'div',title:{en:'Simplify before dividing',nl:'Vereenvoudig vóór het delen',es:'Simplifica antes de dividir'},
   body:{en:'If both numbers share a common factor, divide both by it first. This turns a hard division into an easy one.',nl:'Als beide getallen een gemeenschappelijke deler hebben, deel beide er eerst door. Zo wordt een moeilijke deling eenvoudig.',es:'Si ambos números comparten un factor común, divídelos primero por ese factor. Convierte una división difícil en fácil.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">180 ÷ 15</span>\n→ both divisible by 5\n→ 36 ÷ 3 = <span class="hl">12</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">180 ÷ 15</span>\n→ beide deelbaar door 5\n→ 36 ÷ 3 = <span class="hl">12</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">180 ÷ 15</span>\n→ ambos divisibles entre 5\n→ 36 ÷ 3 = <span class="hl">12</span>'},
   ops:['div']},
  {cat:'gen',title:{en:'Divisibility shortcuts',nl:'Deelbaarheidsregels',es:'Atajos de divisibilidad'},
   body:{en:'Before dividing, check if the result will be a whole number. Div by 3: digit sum divisible by 3. Div by 9: digit sum divisible by 9. Div by 6: number is even AND digit sum divisible by 3.',nl:'Controleer vóór het delen of de uitkomst een geheel getal is. Door 3: cijfersom deelbaar door 3. Door 9: cijfersom deelbaar door 9. Door 6: even én cijfersom deelbaar door 3.',es:'Antes de dividir, comprueba si el resultado será un número entero. Entre 3: suma de dígitos divisible entre 3. Entre 9: suma de dígitos divisible entre 9. Entre 6: par Y suma de dígitos divisible entre 3.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">Will 324 ÷ 9 be a whole number?</span>\n→ digit sum: 3+2+4 = 9\n→ 9 ÷ 9 = 1 ✓ → yes, result is whole\n→ 324 ÷ 9 = <span class="hl">36</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">Geeft 324 ÷ 9 een geheel getal?</span>\n→ cijfersom: 3+2+4 = 9\n→ 9 ÷ 9 = 1 ✓ → ja, uitkomst is geheel\n→ 324 ÷ 9 = <span class="hl">36</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">¿324 ÷ 9 da un número entero?</span>\n→ suma de dígitos: 3+2+4 = 9\n→ 9 ÷ 9 = 1 ✓ → sí, el resultado es entero\n→ 324 ÷ 9 = <span class="hl">36</span>'},
   ops:['div']},
  // PERCENTAGE
  {cat:'pct',title:{en:'The 1% anchor',nl:'Het 1%-anker',es:'El ancla del 1%'},
   body:{en:'Find 1% first (shift the decimal two places left), then scale to the percentage you need.',nl:'Bereken eerst 1% (schuif de komma twee plaatsen naar links) en vermenigvuldig daarna.',es:'Primero encuentra el 1% (mueve el decimal dos lugares a la izquierda), luego escala al porcentaje.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">7% of 350</span>\n→ 1% = 3.50\n→ 7% = 3.50 × 7 = <span class="hl">24.50</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">7% van 350</span>\n→ 1% = 3,50\n→ 7% = 3,50 × 7 = <span class="hl">24,50</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">7% de 350</span>\n→ 1% = 3,50\n→ 7% = 3,50 × 7 = <span class="hl">24,50</span>'},
   ops:['pct']},
  {cat:'pct',title:{en:'Flip the percentage',nl:'Percentage omdraaien',es:'Voltear el porcentaje'},
   body:{en:'x% of y = y% of x. Sometimes one direction is much easier to compute.',nl:'x% van y = y% van x. Soms is de ene richting veel makkelijker te berekenen.',es:'x% de y = y% de x. A veces una dirección es mucho más fácil de calcular.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">26% of 50</span>\n→ flip: 50% of 26\n→ half of 26 = <span class="hl">13</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">26% van 50</span>\n→ draai om: 50% van 26\n→ helft van 26 = <span class="hl">13</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">26% de 50</span>\n→ voltear: 50% de 26\n→ mitad de 26 = <span class="hl">13</span>'},
   ops:['pct']},
  {cat:'pct',title:{en:'Percentages via fractions',nl:'Procenten via breuken',es:'Porcentajes mediante fracciones'},
   body:{en:'Learn key equivalents: 25%=¼, 33%≈⅓, 12.5%=⅛, 37.5%=⅜, 66%≈⅔.',nl:'Ken de breuken: 25%=¼, 33%≈⅓, 12,5%=⅛, 37,5%=⅜, 66%≈⅔.',es:'Memoriza los equivalentes: 25%=¼, 33%≈⅓, 12,5%=⅛, 37,5%=⅜, 66%≈⅔.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">37.5% of 80</span>\n→ ⅜ of 80\n→ 80 ÷ 8 × 3 = <span class="hl">30</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">37,5% van 80</span>\n→ ⅜ van 80\n→ 80 ÷ 8 × 3 = <span class="hl">30</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">37,5% de 80</span>\n→ ⅜ de 80\n→ 80 ÷ 8 × 3 = <span class="hl">30</span>'},
   ops:['pct']},
  {cat:'pct',title:{en:'10% as a building block',nl:'10% als bouwsteen',es:'10% como bloque base'},
   body:{en:'Find 10% quickly, then combine multiples to hit other percentages.',nl:'Bereken snel 10%, combineer veelvouden voor andere percentages.',es:'Calcula el 10% rápidamente, luego combina múltiplos para otros porcentajes.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">35% of 80</span>\n→ 10% = 8\n→ 30% = 24,  5% = 4\n→ 24 + 4 = <span class="hl">28</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">35% van 80</span>\n→ 10% = 8\n→ 30% = 24,  5% = 4\n→ 24 + 4 = <span class="hl">28</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">35% de 80</span>\n→ 10% = 8\n→ 30% = 24,  5% = 4\n→ 24 + 4 = <span class="hl">28</span>'},
   ops:['pct']},
  // GENERAL
  {cat:'gen',title:{en:'Estimation first',nl:'Eerst schatten',es:'Primero estima'},
   body:{en:'Round all numbers to 1 significant figure for a quick sanity check before computing.',nl:'Rond alle getallen af naar 1 significant cijfer voor een snelle controle.',es:'Redondea todos los números a 1 cifra significativa para una comprobación rápida.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">47 × 19</span>\n→ estimate: 50 × 20 = 1000\n→ exact: <span class="hl">893</span>  (close!)',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">47 × 19</span>\n→ schatting: 50 × 20 = 1000\n→ exact: <span class="hl">893</span>  (dichtbij!)',es:'<span class="step">Ejemplo:</span>  <span class="hl">47 × 19</span>\n→ estimado: 50 × 20 = 1000\n→ exacto: <span class="hl">893</span>  (¡cerca!)'},
   ops:['add','sub','mul','div','pct']},
  {cat:'add',title:{en:'Work with complements',nl:'Werken met complementen',es:'Trabajar con complementos'},
   body:{en:'The complement of a number to 100 is 100 − n. When two numbers together exceed 100, find how much one needs to reach 100, then add the leftover.',nl:'Het complement van een getal tot 100 is 100 − n. Als twee getallen samen meer dan 100 zijn, bereken hoeveel er nodig is om 100 te bereiken en tel de rest op.',es:'El complemento de un número a 100 es 100 − n. Cuando dos números juntos superan 100, calcula cuánto falta para llegar a 100 y suma el resto.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">63 + 78</span>\n→ 78 needs 22 to reach 100\n→ 63 − 22 = 41 left over\n→ 100 + 41 = <span class="hl">141</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">63 + 78</span>\n→ 78 heeft 22 nodig om 100 te bereiken\n→ 63 − 22 = 41 over\n→ 100 + 41 = <span class="hl">141</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">63 + 78</span>\n→ 78 necesita 22 para llegar a 100\n→ 63 − 22 = 41 sobrante\n→ 100 + 41 = <span class="hl">141</span>'},
   ops:['add']},
  {cat:'add',title:{en:'Chunking large sums',nl:'Grote sommen in stukken',es:'Dividir sumas grandes'},
   body:{en:'Break both numbers into hundreds, tens and units. Add each chunk separately from left to right.',nl:'Breek beide getallen op in honderden, tientallen en eenheden. Tel elke groep afzonderlijk op van links naar rechts.',es:'Divide ambos números en centenas, decenas y unidades. Suma cada parte por separado de izquierda a derecha.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">357 + 486</span>\n→ 300+400 = 700\n→ 50+80 = 130 → 830\n→ 7+6 = 13 → <span class="hl">843</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">357 + 486</span>\n→ 300+400 = 700\n→ 50+80 = 130 → 830\n→ 7+6 = 13 → <span class="hl">843</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">357 + 486</span>\n→ 300+400 = 700\n→ 50+80 = 130 → 830\n→ 7+6 = 13 → <span class="hl">843</span>'},
   ops:['add']},
  {cat:'sub',title:{en:'Chunking large differences',nl:'Grote aftrekkingen in stukken',es:'Restar en partes'},
   body:{en:'Break the subtracted number into chunks and subtract each piece one at a time.',nl:'Splits het af te trekken getal in stukken en trek elk stuk apart af.',es:'Divide el número que restas en partes y réstalas una a una.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">743 − 268</span>\n→ 743 − 200 = 543\n→ 543 − 60 = 483\n→ 483 − 8 = <span class="hl">475</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">743 − 268</span>\n→ 743 − 200 = 543\n→ 543 − 60 = 483\n→ 483 − 8 = <span class="hl">475</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">743 − 268</span>\n→ 743 − 200 = 543\n→ 543 − 60 = 483\n→ 483 − 8 = <span class="hl">475</span>'},
   ops:['sub']},
  // NEW TIPS
  {cat:'mul',title:{en:'Multiply by 15',nl:'Vermenigvuldigen met 15',es:'Multiplicar por 15'},
   body:{en:'Multiply by 10, then add half of that result.',nl:'Vermenigvuldig met 10 en tel er dan de helft van bij op.',es:'Multiplica por 10 y luego suma la mitad de ese resultado.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">24 × 15</span>\n→ 24 × 10 = 240\n→ half of 240 = 120\n→ 240 + 120 = <span class="hl">360</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">24 × 15</span>\n→ 24 × 10 = 240\n→ helft van 240 = 120\n→ 240 + 120 = <span class="hl">360</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">24 × 15</span>\n→ 24 × 10 = 240\n→ mitad de 240 = 120\n→ 240 + 120 = <span class="hl">360</span>'},
   ops:['mul']},
  {cat:'mul',title:{en:'Multiply two numbers near 100',nl:'Twee getallen dicht bij 100 vermenigvuldigen',es:'Multiplicar dos números cercanos a 100'},
   body:{en:'Use the formula: (100+a)(100+b) = 10000 + 100(a+b) + ab, where a and b are the differences from 100.',nl:'Gebruik (100+a)(100+b) = 10000 + 100(a+b) + ab, waarbij a en b de afwijkingen van 100 zijn.',es:'Usa la fórmula: (100+a)(100+b) = 10000 + 100(a+b) + ab, donde a y b son las diferencias con 100.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">97 × 96</span>\n→ a = −3, b = −4\n→ 10000 + 100(−7) + 12\n→ 10000 − 700 + 12 = <span class="hl">9312</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">97 × 96</span>\n→ a = −3, b = −4\n→ 10000 + 100(−7) + 12\n→ 10000 − 700 + 12 = <span class="hl">9312</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">97 × 96</span>\n→ a = −3, b = −4\n→ 10000 + 100(−7) + 12\n→ 10000 − 700 + 12 = <span class="hl">9312</span>'},
   ops:['mul']},
  {cat:'add',title:{en:'Double and halve',nl:'Verdubbelen en halveren',es:'Doblar y dividir'},
   body:{en:'Double one number and halve the other so that one becomes a round number. Works best when one number is a multiple of 2.',nl:'Verdubbel één getal en halveer het andere zodat één ervan een rond getal wordt. Werkt het beste als één getal een veelvoud van 2 is.',es:'Dobla un número y divide el otro por la mitad para que uno se convierta en un número redondo. Funciona mejor cuando uno es múltiplo de 2.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">125 + 48</span>\n→ double 125 = 250, halve 48 = 24\n→ 250 + 24 = <span class="hl">274</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">125 + 48</span>\n→ verdubbel 125 = 250, halveer 48 = 24\n→ 250 + 24 = <span class="hl">274</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">125 + 48</span>\n→ dobla 125 = 250, divide 48 entre 2 = 24\n→ 250 + 24 = <span class="hl">274</span>'},
   ops:['add']},
  {cat:'sub',title:{en:'Subtract from 1000',nl:'Aftrekken van 1000',es:'Restar de 1000'},
   body:{en:'Subtract each digit from 9, except the last digit which you subtract from 10.',nl:'Trek elk cijfer af van 9, behalve het laatste dat je van 10 aftrekt.',es:'Resta cada dígito de 9, excepto el último que lo restas de 10.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">1000 − 386</span>\n→ 9−3=6, 9−8=1, 10−6=4\n→ <span class="hl">614</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">1000 − 386</span>\n→ 9−3=6, 9−8=1, 10−6=4\n→ <span class="hl">614</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">1000 − 386</span>\n→ 9−3=6, 9−8=1, 10−6=4\n→ <span class="hl">614</span>'},
   ops:['sub']},
  {cat:'div',title:{en:'Divide by 8',nl:'Delen door 8',es:'Dividir entre 8'},
   body:{en:'Halve three times in succession.',nl:'Halveer drie keer achter elkaar.',es:'Divide por la mitad tres veces seguidas.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">184 ÷ 8</span>\n→ 184 ÷ 2 = 92\n→ 92 ÷ 2 = 46\n→ 46 ÷ 2 = <span class="hl">23</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">184 ÷ 8</span>\n→ 184 ÷ 2 = 92\n→ 92 ÷ 2 = 46\n→ 46 ÷ 2 = <span class="hl">23</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">184 ÷ 8</span>\n→ 184 ÷ 2 = 92\n→ 92 ÷ 2 = 46\n→ 46 ÷ 2 = <span class="hl">23</span>'},
   ops:['div']},
  {cat:'div',title:{en:'Long division shortcut — factor the divisor',nl:'Lange deling — ontbind de deler',es:'División larga — factoriza el divisor'},
   body:{en:'If the divisor has easy factors, divide by each factor in turn instead of doing one hard division.',nl:'Als de deler makkelijke factoren heeft, deel dan achtereenvolgens door elke factor.',es:'Si el divisor tiene factores fáciles, divide por cada factor por turno en lugar de hacer una división difícil.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">252 ÷ 14</span>\n→ 14 = 2 × 7\n→ 252 ÷ 2 = 126\n→ 126 ÷ 7 = <span class="hl">18</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">252 ÷ 14</span>\n→ 14 = 2 × 7\n→ 252 ÷ 2 = 126\n→ 126 ÷ 7 = <span class="hl">18</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">252 ÷ 14</span>\n→ 14 = 2 × 7\n→ 252 ÷ 2 = 126\n→ 126 ÷ 7 = <span class="hl">18</span>'},
   ops:['div']},
  {cat:'gen',title:{en:'The "nice number" strategy',nl:'De "mooie getal"-strategie',es:'La estrategia del "número redondo"'},
   body:{en:'Before computing, ask: is either number close to 10, 100 or 1000? If yes, round to the nice number, compute, then correct by the difference.',nl:'Vraag vóór het rekenen: ligt een van de getallen dicht bij 10, 100 of 1000? Zo ja, rond af, reken, en corrigeer daarna met het verschil.',es:'Antes de calcular, pregúntate: ¿algún número está cerca de 10, 100 o 1000? Si es así, redondea, calcula y corrige después por la diferencia.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">× 99</span>  → use × 100, subtract once\n<span class="hl">+ 198</span> → use + 200, subtract 2\n<span class="hl">÷ 50</span>  → use ÷ 100, double the result',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">× 99</span>  → gebruik × 100, trek één keer af\n<span class="hl">+ 198</span> → gebruik + 200, trek 2 af\n<span class="hl">÷ 50</span>  → gebruik ÷ 100, verdubbel de uitkomst',es:'<span class="step">Ejemplo:</span>  <span class="hl">× 99</span>  → usa × 100, resta una vez\n<span class="hl">+ 198</span> → usa + 200, resta 2\n<span class="hl">÷ 50</span>  → usa ÷ 100, dobla el resultado'},
   ops:['add','sub','mul','div']},
  {cat:'gen',title:{en:'Cross-check your answer',nl:'Je antwoord kruiselings controleren',es:'Verificar la respuesta cruzadamente'},
   body:{en:'After computing, do a quick reverse check: if you got 48 for 6×8, verify 48÷6=8.',nl:'Na het berekenen, doe een snelle terugrekening: bij 6×8=48, verifieer 48÷6=8.',es:'Después de calcular, haz una verificación inversa rápida: si obtuviste 48 para 6×8, comprueba 48÷6=8.'},
   ex:{en:'<span class="step">Example:</span>  <span class="hl">342 ÷ 9 = 38?</span>\n→ cross-check: 38 × 9\n→ 38×10−38 = 380−38 = <span class="hl">342 ✓</span>',nl:'<span class="step">Voorbeeld:</span>  <span class="hl">342 ÷ 9 = 38?</span>\n→ controleer: 38 × 9\n→ 38×10−38 = 380−38 = <span class="hl">342 ✓</span>',es:'<span class="step">Ejemplo:</span>  <span class="hl">342 ÷ 9 = 38?</span>\n→ verificar: 38 × 9\n→ 38×10−38 = 380−38 = <span class="hl">342 ✓</span>'},
   ops:['mul','div']},
];

let currentTipFilter=new Set(['all']); // multi-select set; 'all' means show all

function renderTipsFilterBtns(){
  const cats=[
    {key:'all',cls:'f-all'},
    {key:'mul',cls:'f-mul'},{key:'div',cls:'f-div'},
    {key:'add',cls:'f-add'},{key:'sub',cls:'f-sub'},
    {key:'pct',cls:'f-pct'},{key:'gen',cls:'f-gen'},
  ];
  const filterKeys={all:'filter_all',mul:'filter_mul',div:'filter_div',add:'filter_add',sub:'filter_sub',pct:'filter_pct',gen:'filter_gen'};
  const el=document.getElementById('tips-filter-row');
  if(!el)return;
  const isAll=currentTipFilter.has('all');
  el.innerHTML=cats.map(c=>{
    const active=c.key==='all'?isAll:(!isAll&&currentTipFilter.has(c.key));
    return`<button class="tips-filter-btn ${c.cls}${active?' active':''}" onclick="setTipFilter('${c.key}')">${t(filterKeys[c.key])}</button>`;
  }).join('');
}

function setTipFilter(f){
  if(f==='all'){
    currentTipFilter=new Set(['all']);
  } else {
    currentTipFilter.delete('all');
    if(currentTipFilter.has(f)){
      currentTipFilter.delete(f);
      if(currentTipFilter.size===0) currentTipFilter=new Set(['all']);
    } else {
      currentTipFilter.add(f);
    }
  }
  renderTipsFilterBtns();
  renderTipsList();
}

function renderTipsList(){
  const el=document.getElementById('tips-list');
  if(!el)return;
  const catLabel={mul:t('filter_mul'),div:t('filter_div'),add:t('filter_add'),sub:t('filter_sub'),pct:t('filter_pct'),gen:t('filter_gen')};
  const isAll=currentTipFilter.has('all');
  const filtered=isAll?TIPS:TIPS.filter(tip=>currentTipFilter.has(tip.cat));
  // Update count badge
  const badge=document.getElementById('tips-count-badge');
  if(badge) badge.textContent=`${filtered.length} / ${TIPS.length} ${t('tips_count_label')}`;
  el.innerHTML=filtered.map((tip)=>{
    const realIdx=TIPS.indexOf(tip);
    const title=tip.title[lang]||tip.title.en;
    const body=tip.body[lang]||tip.body.en;
    const ex=tip.ex[lang]||tip.ex.en;
    return`<div class="tip-card" id="tipcard-${realIdx}">
      <div class="tip-card-inner">
        <div class="tip-header">
          <div class="tip-left">
            <span class="tip-tag ${tip.cat}">${catLabel[tip.cat]}</span>
            <div class="tip-title">${title}</div>
            <div class="tip-body">${body}</div>
          </div>
        </div>
        <pre class="tip-example">${ex}</pre>
        ${tip.cat!=='gen'?`<button class="tip-practice-btn" onclick="startTipPractice(${realIdx})">▶ ${t('tip_practice_this')}</button>`:''}
      </div>
    </div>`;
  }).join('');
}

