1. interpolation/one-way binding - Da, svugdje gdje god se koristi neka varijabla u template dijelu (npr. DestinationComponent.vue :10)
2. two-way binding - Da u npr. HomeView.vue :22
3. methods - Da/ne, nema bloka kao takvog jer ne postoji u Composition API-u, ali zamjena je bilo koja funkcija koja je definirana u setup bloku (npr. DestinationDetailView.vue :51...:54)
4. computed properties - Da, gdje god je computed keyword (npr. HomeView.vue :31)
5. barem jedan scoped style - Da, svugdje, skoro u svakom file-u je definiran taj blok (npr. HomeView.vue :73...:92)
6. koristiti barem jedan lifecycle hook - Da, onMounted u npr. DestinationDetailView.vue :29 :72...:74
7. routing (više stranica)
   aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)- Da, definiran je router (folder router file index.ts (:8...:25))
   dinamičko usmjeravanje s 404 stranicom ("catch all")- Da, postoji catchAll stranica NotFoundView.vue
8. (barem) dvije komponente
   komponenta bez stanja, koristiti properties - Da, Destination nema stanje, ima defineProps (DestinationComponent.vue :23...:36)
   komponenta sa stanjem - Da, CurrentTripComponent.vue ima stanje (vlastiti property) (:17 :18)
9. barem jedna komponenta mora emitirati barem jedan event - Da, DestinationComponent emitira event kod uklanjanja destinationa (DestinationComponent.vue :42:43:44)
10. store (Pinia) - Da, sve se vrti oko njega (npr. store.ts :1 ili DestinationDetailView.vue :31 :33)
11. asinkroni dohvat podataka s backenda - Da, asinkroni dohvat podataka iz json datoteke (mock) (postoji destinations.json i npr. App.vue :19...:30)

//pokretanje
npm install
npm run dev