# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

# Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Vi organisere vores fil-typer i mapper, så hver fil type har en under-mappe. Den eneste fil der ikke er i en undermappe er index.html.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  Boilerplate blev placeret hvor de ville være senere hen i løbet så de var klar til at blive brugt med det samme.

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?

Vores projektstruktur er organiseret således: index.html ligger i roden af projektmappen, mens alle øvrige HTML-filer, såsom browse.html og profile.html, er placeret i html/-mappen.

Vi har en css/-mappe, hvor der findes én generel stylesheet til fælles styling, samt individuelle CSS-filer til hver af HTML-siderne for at sikre en målrettet tilpasning af designet.

JavaScript-filerne er samlet i en js/-mappe, hvor browse.js håndterer funktionaliteten for browse.html (listevisning), og profile.js styrer detaljevisningen i profile.html.

# Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  Alting er blevet skrevet med småt og vi brugte "-" som mellemrum.

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Ved at give dem det præcis samme navn men en anden filtype til sidst.

# Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)

Vi har placeret vores CSS filer og skrifttyper oppe i head, og placeret vores JS udenfor main, underfooter og lige over body end-tagget.

# Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)

Vores branches er blevet navngivet efter hvad der blevet lavet om på det. Så foreksempel hvis man tilføjede billeder ville man skrive: Flere-billeder.

# Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?

  Vi ville have en diskussion om hvem ville lave hvad og så ville personen lave en branch til hvad de skulle arbejde på.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  I vores kommentar starter man med at skrive hvad man har tilføjet ved at skrive: "ADD" - Derefter så har vi så efterladt mere beskrivende kommentarer inde i github før merge.

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Vi ville holde hinanden opdateret om mergen er gået rigtigt igennem, og om nogle var klar til at der blev merged i main.

# Kode:

## Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)

- I Javascript bruger vi fetch og filter funktioner til API'er, og ville bruge URLSearchParams(Window.location.search).get("X") for at hive dataen fra den tidligere side.

## Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)

- Vi bruger classes for styling.

## Skal filer have korte forklaringer som kommentarer?

- For de mere nye funtkioner (Alt relateret til API) skal have kommentarer som kort forklarer hvordan de virker og gør
  De kommentarer der er blevet tilføjet er en blande af vores egen kode og ChatGPT kommentarer.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af information fra API.

Det data vi har hentet fra API er følgende:
Age
Gender
Height
Weight
Hair type
Eye color
University
Job
Coin
State
City

- Filtrering af users baseret på brugerens valg.
  Det samme som før udover Height og weight.

- Dynamisk visning af users i HTML.
  Den er dynamisk ved at den henter data fra API'et baseret på filter og user.id i profile.html.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

Vi tog data fra User API'et som har følgende link:
https://dummyjson.com/products

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?

I browse.js bliver der brugt filters, som blivet spillet sammen med valuesne fra option taggene i browse.html. Det den gør er at den hiver fat i valuen fra option tagget og ser om det matcher med dataen fra API'en, og hvis det gør så bliver det filtreret som i at de IDs der har filteret blvier vist.

Desuden bliver der brugt .map for at fremkalle vores cards i browse.html.

I profile.js bliver der hentet mere data gennem koden:
${data.X}.

- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
  For at få javascript koden til at virke, især filter delen, så skal man absolut have en select og option tag med values sat inde på HTML'en.

- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
  Funktionerne retunerer værdier til os som vi så bruger som tekst.

- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```

Har har vi Javascrip funktionen til en af filterne, i dette eksempel har vi for "age".

Først siger den if (filters.age) for at om dataen eksisterer, hvis det ikke gør bliver det sprunget over.

I const age ranges har jeg definieret de age ranges jeg gerne vil have med som et array, de er blevet skrevet op på 2 måder.

Så er der let [minAge, maxAge], som så ser hvad det laveste og højeste værdi er i arrayen der blevet valgt, hvis det er 20'erne vil minAge være 20 og maxAge vil være 29.

Så er der den sidste del af koden hvor den tjekker gennem filteret og viser kun de brugere der opfylder array'et. Foreksempel hvis du valgte 20s vil den kun visse folk fra 20 til 29 på deres "age" data.

        // Apply age filter
        if (filters.age) {
          const ageRanges = {
            "20|21|22|23|24|25|26|27|28|29": [20, 29],
            "30|31|32|33|34|35|36|37|38|39": [30, 39],
            "40|41|42|43|44|45|46|47|48|49": [40, 49],
          };
          let [minAge, maxAge] = ageRanges[filters.age];
          users = users.filter(
            (user) => user.age >= minAge && user.age <= maxAge
          );
        }
