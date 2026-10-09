Quando iniziai a scrivere il codice di Fallen Zenith, ero convinto che la cosa più importante fosse mettermi subito al lavoro. Avevo un'idea di gioco in mente, conoscevo le basi di C# e non vedevo perché avrei dovuto perdere tempo a pianificare qualcosa che avrei potuto direttamente programmare.

Dopo appena un paio di giorni, però, iniziai a rendermi conto che non stavo seguendo una direzione precisa.

Il mio processo di sviluppo assomigliava più a uno zigzag che a una linea retta.

Un giorno implementavo il sistema di combattimento, quello dopo mi veniva in mente che i personaggi avrebbero dovuto avere anche degli MP (Mana Points). A quel punto tornavo indietro per modificare le classi già scritte, salvo poi accorgermi che non avevo ancora deciso come dovessero funzionare le abilità, quanto Mana consumassero o in che modo i personaggi potessero recuperarlo.

Era un continuo aggiungere funzionalità a sistemi che non avevo ancora finito di progettare.

Il problema non era tanto dover modificare il codice, cosa assolutamente normale nello sviluppo software, quanto il fatto che ogni nuova idea sembrava mettere in discussione tutto ciò che avevo scritto fino a quel momento.

Alla seconda settimana ero completamente nel pallone.

Avevo diverse classi, qualche meccanica funzionante e una quantità crescente di idee, ma non riuscivo più a capire come tutti quei pezzi dovessero incastrarsi.

E, soprattutto, mi resi conto di una cosa piuttosto assurda: stavo programmando un gioco senza aver ancora deciso esattamente quale gioco volessi realizzare.

Avevo iniziato a implementare combattimenti, personaggi e statistiche, ma non avevo ancora risposto ad alcune domande fondamentali.

Qual era l'obiettivo del giocatore? Come sarebbe progredito nel corso dell'avventura? Quali meccaniche erano davvero necessarie? E, soprattutto, come avrebbero interagito tra loro?

Non avevo nemmeno scritto la storia.

Di conseguenza, non sapevo come strutturare la progressione, quali eventi avrebbero dovuto verificarsi e quali stati avrebbe dovuto gestire la mia applicazione.

In pratica, stavo costruendo le stanze di una casa senza averne disegnato la planimetria. Ogni volta che mi veniva in mente di aggiungere una porta, scoprivo che dall'altra parte non c'era ancora nessuna stanza.

Per un momento pensai persino di avere il famoso blocco creativo, quello che nell'immaginario collettivo affligge artisti tormentati e creativi maledetti.

La realtà era decisamente meno romantica: non avevo un blocco creativo. Non avevo un piano.

Il mio approccio, fino a quel momento, si poteva riassumere in una frase:

«Intanto scrivo il codice, poi si vedrà».

E infatti, poco dopo, vidi.

Vidi che buona parte del codice avrebbe richiesto un refactoring, che alcune responsabilità erano state distribuite male tra le classi e che stavo prendendo decisioni architetturali sulla base di meccaniche che non avevo ancora definito.

A quel punto mi fermai.

ALT. Torniamo alla linea di partenza.

Prima di chiedermi come implementare Fallen Zenith, dovevo rispondere a una domanda molto più semplice:

Perché sto sviluppando questo gioco?

La risposta, in realtà, non era soltanto «perché voglio creare un videogioco».

Fin dall'inizio, Fallen Zenith aveva anche un altro obiettivo: diventare un progetto personale attraverso il quale consolidare e dimostrare le mie competenze come sviluppatore C#.

Essendo una repository pubblica su GitHub, volevo che chiunque, compreso un potenziale recruiter, potesse esplorare il codice e comprendere non soltanto cosa avevo implementato, ma soprattutto perché avevo scelto di implementarlo in un determinato modo.

Per esempio, perché utilizzare una classe astratta Character invece di duplicare proprietà e comportamenti in ogni classe giocabile? Perché separare la logica del combattimento dalla gestione del turno? Quando ha senso applicare lo State Design Pattern e quando, invece, si rischia soltanto di complicare inutilmente il progetto?

Volevo che il codice raccontasse anche il ragionamento che c'era dietro.

E volevo dimostrare che non si trattava semplicemente di AI slop: codice generato, copiato e incollato senza comprenderne davvero il funzionamento.

L'obiettivo era produrre qualcosa che fosse farina del mio sacco, frutto di studio, sperimentazione, errori e scelte consapevoli. Non necessariamente il codice più sofisticato del mondo, ma codice che sarei stato in grado di spiegare, difendere e, soprattutto, modificare senza dover chiedere a qualcun altro come funzionasse.

Da qui arrivò una seconda considerazione.

Se lo scopo principale era rafforzare le mie competenze in C#, perché complicarmi immediatamente la vita con sprite, animazioni, interfacce grafiche e gestione degli input?

Prima ancora di vedere un personaggio muoversi sullo schermo, dovevo essere sicuro che il sistema di combattimento funzionasse, che le statistiche fossero gestite correttamente e che le responsabilità delle classi fossero ben definite.

Così decisi di ridimensionare il progetto, almeno nella sua fase iniziale.

Il primo MVP (Minimum Viable Product) di Fallen Zenith sarà un gioco testuale da console.

Niente grafica, niente animazioni, niente effetti particellari.

Soltanto C#, logica di gioco e un'architettura che possa evolvere nel tempo.

Questo mi permetterà di concentrarmi su ciò che voglio realmente approfondire: programmazione orientata agli oggetti (OOP), ereditarietà, polimorfismo, incapsulamento, gestione degli stati, separazione delle responsabilità e design pattern.

Tutti concetti che non voglio limitarmi a ripassare in vista di un colloquio tecnico, ma che voglio imparare a utilizzare per risolvere problemi concreti.

La componente grafica arriverà successivamente, attraverso uno sviluppo incrementale, quando le fondamenta del gioco saranno sufficientemente solide.

Perché ho capito che scrivere codice non significa necessariamente sviluppare un software.

Si possono scrivere centinaia di righe perfettamente funzionanti e ritrovarsi comunque con un progetto che non ha una direzione.

E, soprattutto, ho capito che pianificare non significa smettere di programmare o rinunciare alla creatività. Significa dare una struttura alle proprie idee, affinché possano diventare qualcosa di concreto.

Fallen Zenith, quindi, non sarà soltanto un videogioco.

Sarà anche il mio laboratorio personale per imparare a progettare software, prendere decisioni architetturali consapevoli e, inevitabilmente, commettere nuovi errori.

Con una differenza rispetto a prima: questa volta voglio sapere dove sto andando, anche se lungo il percorso cambierò idea.

Perché ricominciare da zero non significa necessariamente aver perso tempo. A volte significa aver finalmente capito da dove bisognava partire.
