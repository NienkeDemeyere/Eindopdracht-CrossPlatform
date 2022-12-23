info over de url: 'https://itunes.apple.com/search?media=music&limit=200&term=exampleTerm'
      [website]/[zoek]?[enkel liedjes]&[toon max 200 resutlaten]&[zoekterm=songTitle]
      enkel liedjes: want je kan ook boeken en films vinden via deze api
      max 200 resultaten: standaard staat het op 100, dat vond ik net iets te weinig
      zoekterm=songTitle: wordt ingevuld in het input veld op de home pagina

Handleiding;
wanneer je de app start, kom je op het Homescherm.
      Home
            daar kan je een zoekterm invullen. de zoekterm bevat het liedje dat je zoekt, of de artiest die je zoekt.
            wanneer je op zoek klikt, wordt de lijst ingeladen van gevonden liedjes. (dit via de itunes api)
            terwijl ik de lijst ophaal, wordt er een spinner getoond
            als je een niet bestaande zoekterm ingeeft, wordt een error getoond "geen liedjes gevonden"
            als er iets fout ging tijdens het ophalen van de liedjes, wordt een error getoond "Er ging iets fout bij het ophalen van de liedjes: [error]"
            als er wel liedjes gevonden werden, worden deze nu in een lijst getoond.
            je ziet de albumcover, de naam van de artiest, en de naam van het liedje
            als je op de naam van de artiest klikt, word je naar een volgend scherm gebracht "ArtistDetail"
            als je op de naam van het liedjes klikt, word je naar een volgend scherm gebracht "SongDetail"
      ArtistDetail
            Alle liedjes van deze artiest worden ingeladen.
            je kan ook klikken op de link "Klik hier om meer over [artiest] te weten te komen."
            de link brengt je naar het overzicht van de artiest op apple music.
            je kan ook op de titel van het liedje klikken (net zoals op het homescreen). dit brengt je naar het scherm SongDetail.
      SongDetail
            op dit scherm zie je alle info over het liedje.
            je kan er het liedje instellen als favoriet. wanneer je op die button klikt, wordt je naar het scherm Instellingen gebracht.
      Instellingen
            hier zie je je favoriete liedje, en heb je de mogelijkheid om darkmode of lightmode te gebruiken
      SongDetail
            wanneer je terug keert naar SongDetail, kan je ook een preview beluisteren door op de link 'klik hier om een preview te downloaden' te klikken
            ook heb je de mogelijkheid om het liedje te bekijken op apple music door op de link 'Klik hier om het liedje te bekijken op apple music'
            je hebt ook de mogelijkheid om op de naam van de artiest te klikken. hierdoor wordt je opnieuw naar het scherm "ArtistDetail" gebracht


